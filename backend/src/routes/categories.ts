import express from 'express';
import { body, validationResult } from 'express-validator';
import { prisma, redis } from '../server';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = express.Router();

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Check cache first
    const cacheKey = 'categories:all';
    const cached = await redis.get(cacheKey);

    if (cached) {
      return res.json(JSON.parse(cached));
    }

    const categories = await prisma.category.findMany({
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
      data: categories
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

// @desc    Create category
// @route   POST /api/categories
// @access  Private (Admin only)
router.post('/', authenticate, authorize('ADMIN'), [
  body('name').notEmpty().trim(),
  body('description').optional().trim(),
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

    const { name, description, image } = req.body;

    // Generate slug from name
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        description,
        image
      }
    });

    // Clear cache
    await redis.del('categories:*');

    res.status(201).json({
      success: true,
      data: category
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
