import express from 'express';
import { body, validationResult } from 'express-validator';
import { prisma } from '../server';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Generate ticket number
const generateTicketNumber = () => {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `RPR-${timestamp}-${random}`;
};

// @desc    Get user's repair tickets
// @route   GET /api/repairs
// @access  Private
router.get('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const tickets = await prisma.repairTicket.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      data: tickets
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get single repair ticket
// @route   GET /api/repairs/:id
// @access  Private
router.get('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const ticket = await prisma.repairTicket.findFirst({
      where: { 
        id,
        userId: req.user!.id 
      }
    });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: 'Repair ticket not found'
      });
    }

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Create repair ticket
// @route   POST /api/repairs
// @access  Private
router.post('/', authenticate, [
  body('deviceType').notEmpty().trim(),
  body('brand').notEmpty().trim(),
  body('model').notEmpty().trim(),
  body('issue').notEmpty().trim(),
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

    const {
      deviceType,
      brand,
      model,
      issue,
      description,
      images,
      videoUrl,
      customerNotes
    } = req.body;

    const ticket = await prisma.repairTicket.create({
      data: {
        userId: req.user!.id,
        ticketNumber: generateTicketNumber(),
        deviceType,
        brand,
        model,
        issue,
        description,
        images: images || [],
        videoUrl,
        customerNotes,
        status: 'SUBMITTED',
        priority: 'MEDIUM'
      }
    });

    res.status(201).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update repair ticket status (Admin/Technician only)
// @route   PUT /api/repairs/:id/status
// @access  Private (Admin/Technician)
router.put('/:id/status', authenticate, authorize('ADMIN', 'TECHNICIAN'), [
  body('status').isIn(['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'IN_PROGRESS', 'WAITING_PARTS', 'COMPLETED', 'READY_FOR_PICKUP', 'DELIVERED', 'CANCELLED']),
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

    const { id } = req.params;
    const { 
      status, 
      estimatedCost, 
      actualCost, 
      estimatedTime, 
      technicianNotes,
      priority,
      assignedTo
    } = req.body;

    const updateData: any = { status };

    if (estimatedCost !== undefined) updateData.estimatedCost = estimatedCost;
    if (actualCost !== undefined) updateData.actualCost = actualCost;
    if (estimatedTime) updateData.estimatedTime = estimatedTime;
    if (technicianNotes) updateData.technicianNotes = technicianNotes;
    if (priority) updateData.priority = priority;
    if (assignedTo) updateData.assignedTo = assignedTo;

    if (status === 'COMPLETED') {
      updateData.completedAt = new Date();
    }

    const ticket = await prisma.repairTicket.update({
      where: { id },
      data: updateData
    });

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get all repair tickets (Admin/Technician only)
// @route   GET /api/repairs/admin/all
// @access  Private (Admin/Technician)
router.get('/admin/all', authenticate, authorize('ADMIN', 'TECHNICIAN'), async (req: AuthRequest, res) => {
  try {
    const { status, priority, assignedTo } = req.query;

    const where: any = {};

    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (assignedTo) where.assignedTo = assignedTo;

    const tickets = await prisma.repairTicket.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        }
      },
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    res.json({
      success: true,
      data: tickets
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
