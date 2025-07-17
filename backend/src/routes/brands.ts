import express from 'express';
import { body, validationResult } from 'express-validator';
import { prisma, redis } from '../server';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = express.Router();

// @desc    Get all brands
// @route   GET /api/brands
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Check cache first
    const cacheKey = 'brands:all';
    const cached = await redis.get(cacheKey);

    if (cached) {
      return res.json(JSON.parse(cached));
    }

    const brands = await prisma.brand.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: { products: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    const result = {
      success: true,
      data: brands
    };

    // Cache for 30 minutes
    await redis.setex(cacheKey, 1800, JSON.stringify(result));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Create brand
// @route   POST /api/brands
// @access  Private (Admin only)
router.post('/', authenticate, authorize('ADMIN'), [
  body('name').notEmpty().trim(),
], async (req: AuthRequest, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { name, logo } = req.body;

    // Generate slug from name
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const brand = await prisma.brand.create({
      data: {
        name,
        slug,
        logo
      }
    });

    // Clear cache
    await redis.del('brands:*');

    res.status(201).json({
      success: true,
      data: brand
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;
