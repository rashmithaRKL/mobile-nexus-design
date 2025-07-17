import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'mobile-phones' },
      update: {},
      create: {
        name: 'Mobile Phones',
        slug: 'mobile-phones',
        description: 'Latest smartphones and mobile devices',
        isActive: true
      }
    }),
    prisma.category.upsert({
      where: { slug: 'accessories' },
      update: {},
      create: {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Phone accessories, cases, chargers, and more',
        isActive: true
      }
    })
  ]);

  console.log('✅ Categories created');

  // Create brands
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { slug: 'apple' },
      update: {},
      create: {
        name: 'Apple',
        slug: 'apple',
        isActive: true
      }
    }),
    prisma.brand.upsert({
      where: { slug: 'samsung' },
      update: {},
      create: {
        name: 'Samsung',
        slug: 'samsung',
        isActive: true
      }
    }),
    prisma.brand.upsert({
      where: { slug: 'oneplus' },
      update: {},
      create: {
        name: 'OnePlus',
        slug: 'oneplus',
        isActive: true
      }
    })
  ]);

  console.log('✅ Brands created');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@mobilenexus.com' },
    update: {},
    create: {
      email: 'admin@mobilenexus.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      isActive: true
    }
  });

  console.log('✅ Admin user created');

  // Create sample products
  const products = [
    {
      name: 'iPhone 15 Pro Max 256GB',
      slug: 'iphone-15-pro-max-256gb',
      description: 'The most advanced iPhone ever with titanium design',
      longDescription: 'Experience the iPhone 15 Pro Max with its stunning titanium design, advanced camera system, and the powerful A17 Pro chip.',
      price: 1199,
      originalPrice: 1299,
      sku: 'IPH15PM256',
      stock: 50,
      images: [
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop'
      ],
      condition: 'NEW',
      isActive: true,
      isFeatured: true,
      isOnSale: true,
      rating: 4.9,
      reviewCount: 1234,
      categoryId: categories[0].id,
      brandId: brands[0].id,
      specifications: {
        display: '6.7-inch Super Retina XDR',
        chip: 'A17 Pro',
        camera: '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
        battery: 'Up to 29 hours video playback',
        storage: '256GB'
      }
    },
    {
      name: 'Galaxy S24 Ultra 256GB',
      slug: 'galaxy-s24-ultra-256gb',
      description: 'Galaxy S24 Ultra with S Pen and 200MP camera',
      longDescription: 'Samsung Galaxy S24 Ultra with built-in S Pen, 200MP camera, and AI-powered features.',
      price: 1299,
      sku: 'SAM24U256',
      stock: 30,
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
      ],
      condition: 'NEW',
      isActive: true,
      isFeatured: true,
      rating: 4.8,
      reviewCount: 987,
      categoryId: categories[0].id,
      brandId: brands[1].id,
      specifications: {
        display: '6.8-inch Dynamic AMOLED 2X',
        processor: 'Snapdragon 8 Gen 3',
        camera: '200MP Main, 50MP Telephoto, 12MP Ultra Wide',
        battery: '5000mAh',
        storage: '256GB'
      }
    },
    {
      name: 'OnePlus 12 256GB',
      slug: 'oneplus-12-256gb',
      description: 'OnePlus 12 with Snapdragon 8 Gen 3 and 100W charging',
      longDescription: 'OnePlus 12 delivers flagship performance with ultra-fast charging and premium design.',
      price: 799,
      sku: 'OP12256',
      stock: 25,
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
      ],
      condition: 'NEW',
      isActive: true,
      isFeatured: true,
      rating: 4.7,
      reviewCount: 456,
      categoryId: categories[0].id,
      brandId: brands[2].id,
      specifications: {
        display: '6.82-inch LTPO OLED',
        processor: 'Snapdragon 8 Gen 3',
        camera: '50MP Main, 64MP Telephoto, 48MP Ultra Wide',
        battery: '5400mAh with 100W charging',
        storage: '256GB'
      }
    }
  ];

  for (const productData of products) {
    await prisma.product.upsert({
      where: { slug: productData.slug },
      update: {},
      create: productData
    });
  }

  console.log('✅ Sample products created');

  console.log('🎉 Database seeding completed successfully!');
  console.log('📧 Admin login: admin@mobilenexus.com');
  console.log('🔑 Admin password: admin123');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
