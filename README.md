# Mobile Nexus Design - Complete E-commerce Platform

A modern, high-performance mobile phone e-commerce platform with repair services, built with React + TypeScript frontend and Node.js backend.

## 🚀 Project Overview

**Mobile Nexus Design** is a full-stack e-commerce platform specifically designed for mobile phone retail and repair services. It features a beautiful, responsive React frontend and a lightning-fast Node.js backend API.

### ✨ Key Features

- 📱 **Mobile Phone Store** - Complete product catalog with filtering and search
- 🛒 **Shopping Cart & Checkout** - Seamless purchasing experience
- 🔧 **Repair Services** - Book and track phone repair services
- 👤 **User Management** - Authentication, profiles, order history
- 📊 **Admin Dashboard** - Product, order, and user management
- 🎨 **Modern UI/UX** - Built with Tailwind CSS and shadcn/ui
- ⚡ **High Performance** - Optimized for speed and scalability

## 🏗️ Architecture

```
mobile-nexus-design/
├── mobile-nexus-design/          # React Frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/               # Application pages
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utilities and helpers
│   │   └── data/                # Static data and types
│   ├── public/                  # Static assets
│   └── package.json
│
└── backend/                     # Node.js Backend API
    ├── src/
    │   ├── routes/              # API endpoints
    │   ├── middleware/          # Express middleware
    │   ├── database/            # Database utilities
    │   └── server.ts            # Main server file
    ├── prisma/                  # Database schema
    └── package.json
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **React Router** for navigation
- **React Query** for data fetching
- **React Hook Form** for form handling

### Backend
- **Node.js** with Express and TypeScript
- **PostgreSQL** database with Prisma ORM
- **Redis** for caching and sessions
- **JWT** authentication
- **Multer** for file uploads
- **Sharp** for image processing
- **bcrypt** for password hashing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- Redis 6+
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mobile-nexus-design.git
cd mobile-nexus-design
```

### 2. Setup Backend
```bash
cd backend
chmod +x setup.sh
./setup.sh
```

### 3. Setup Frontend
```bash
cd ../mobile-nexus-design
npm install
```

### 4. Configure Environment
```bash
# Backend - Edit backend/.env
DATABASE_URL="postgresql://username:password@localhost:5432/mobile_nexus_db"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-secret-key"

# Frontend - Create mobile-nexus-design/.env.local if needed
VITE_API_URL="http://localhost:3001"
```

### 5. Start Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd mobile-nexus-design
npm run dev
```

Visit:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3001
- **API Health**: http://localhost:3001/health

## 📱 Features Overview

### 🛍️ E-commerce Features
- **Product Catalog** - Browse phones by category, brand, condition
- **Advanced Filtering** - Price range, specifications, ratings
- **Product Details** - Images, specs, reviews, variants
- **Shopping Cart** - Add, update, remove items
- **Checkout Process** - Secure payment and order processing
- **Order Tracking** - Real-time order status updates

### 🔧 Repair Services
- **Service Booking** - Schedule phone repairs
- **Repair Tracking** - Track repair progress
- **Video Consultation** - Upload videos describing issues
- **Service Types** - Screen, battery, camera, water damage repairs
- **Technician Dashboard** - Manage repair tickets

### 👥 User Management
- **Authentication** - Secure login/registration
- **User Profiles** - Manage personal information
- **Order History** - View past purchases
- **Repair History** - Track repair services
- **Reviews** - Rate and review products

### 🎨 UI/UX Features
- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme switching
- **Smooth Animations** - Enhanced user experience
- **Loading States** - Skeleton loaders and spinners
- **Error Handling** - User-friendly error messages

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - Get products with filtering
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update status (Admin)

### Repairs
- `GET /api/repairs` - Get repair tickets
- `POST /api/repairs` - Create repair ticket
- `PUT /api/repairs/:id/status` - Update status

[See backend/README.md for complete API documentation]

## 🚀 Performance

### Frontend Performance
- **Vite** for lightning-fast development
- **Code splitting** for optimal loading
- **Image optimization** with lazy loading
- **Caching strategies** for better UX

### Backend Performance
- **3-5x faster** than PHP alternatives
- **Redis caching** for frequently accessed data
- **Database optimization** with proper indexing
- **Async/await** for non-blocking operations

## 🔒 Security

- **JWT Authentication** with secure token handling
- **Password hashing** with bcrypt
- **Rate limiting** to prevent abuse
- **CORS protection** for cross-origin requests
- **Input validation** on all endpoints
- **SQL injection protection** via Prisma ORM

## 📊 Admin Features

- **Dashboard** - Overview of sales, orders, repairs
- **Product Management** - CRUD operations for products
- **Order Management** - Process and track orders
- **User Management** - View and manage users
- **Repair Management** - Assign and track repairs
- **Analytics** - Sales and performance metrics

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd mobile-nexus-design
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
cd backend
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Prisma** for the excellent database toolkit
- **Vite** for the fast build tool

## 📞 Support

For support and questions:
- 📧 Email: support@mobilenexus.com
- 💬 Discord: [Join our community]
- 📖 Documentation: [View docs]
- 🐛 Issues: [Report bugs]

---

**Built with ❤️ for the mobile commerce community**

🚀 **Ready to launch your mobile store? This platform gives you everything you need!**
