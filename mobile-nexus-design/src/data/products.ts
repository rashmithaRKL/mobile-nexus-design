export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    category: "mobile-phones",
    condition: "new",
    price: 1199,
    originalPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop"
    ],
    rating: 4.9,
    reviews: 1234,
    isNew: true,
    isOnSale: true,
    description: "The most advanced iPhone ever with titanium design and powerful A17 Pro chip.",
    longDescription: "Experience the iPhone 15 Pro Max with its stunning titanium design, advanced camera system, and the powerful A17 Pro chip. Features include a 6.7-inch Super Retina XDR display, Pro camera system with 5x Telephoto lens, and all-day battery life.",
    variants: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"]
    },
    specifications: {
      display: "6.7-inch Super Retina XDR",
      chip: "A17 Pro",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      storage: "256GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3"
    }
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max 512GB",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    category: "mobile-phones",
    condition: "new",
    price: 1399,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.9,
    reviews: 987,
    isNew: true,
    description: "iPhone 15 Pro Max with larger 512GB storage capacity.",
    longDescription: "iPhone 15 Pro Max with massive 512GB storage for all your photos, videos, and apps.",
    variants: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"]
    },
    specifications: {
      display: "6.7-inch Super Retina XDR",
      chip: "A17 Pro",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      storage: "512GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3"
    }
  },
  {
    id: 3,
    name: "iPhone 14 Pro 128GB",
    brand: "Apple",
    model: "iPhone 14 Pro",
    category: "mobile-phones",
    condition: "new",
    price: 999,
    originalPrice: 1099,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 2156,
    isOnSale: true,
    description: "iPhone 14 Pro with Dynamic Island and always-on display.",
    longDescription: "The iPhone 14 Pro introduces Dynamic Island, a new way to interact with your iPhone. Features the A16 Bionic chip, Pro camera system, and always-on display.",
    variants: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      colors: ["Deep Purple", "Gold", "Silver", "Space Black"]
    },
    specifications: {
      display: "6.1-inch Super Retina XDR",
      chip: "A16 Bionic",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      storage: "128GB"
    }
  },
  {
    id: 4,
    name: "iPhone 14 Pro 256GB",
    brand: "Apple",
    model: "iPhone 14 Pro",
    category: "mobile-phones",
    condition: "used",
    price: 849,
    originalPrice: 999,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 543,
    isOnSale: true,
    description: "Used iPhone 14 Pro in excellent condition with 256GB storage.",
    longDescription: "Pre-owned iPhone 14 Pro in excellent condition, tested and certified.",
    variants: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      colors: ["Deep Purple", "Gold", "Silver", "Space Black"]
    },
    specifications: {
      display: "6.1-inch Super Retina XDR",
      chip: "A16 Bionic",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      storage: "256GB"
    }
  },
  {
    id: 5,
    name: "iPhone 13 128GB",
    brand: "Apple",
    model: "iPhone 13",
    category: "mobile-phones",
    condition: "new",
    price: 699,
    originalPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 3456,
    isOnSale: true,
    description: "iPhone 13 with advanced dual-camera system and A15 Bionic chip.",
    longDescription: "iPhone 13 features the most advanced dual-camera system ever in iPhone and the lightning-fast A15 Bionic chip.",
    variants: {
      storage: ["128GB", "256GB", "512GB"],
      colors: ["Pink", "Blue", "Midnight", "Starlight", "Red"]
    },
    specifications: {
      display: "6.1-inch Super Retina XDR",
      chip: "A15 Bionic",
      camera: "12MP Main, 12MP Ultra Wide",
      battery: "Up to 19 hours video playback",
      storage: "128GB"
    }
  },
  {
    id: 6,
    name: "iPhone 13 256GB",
    brand: "Apple",
    model: "iPhone 13",
    category: "mobile-phones",
    condition: "used",
    price: 599,
    originalPrice: 699,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 1234,
    isOnSale: true,
    description: "Used iPhone 13 in great condition with 256GB storage.",
    longDescription: "Pre-owned iPhone 13 in great condition, thoroughly tested.",
    variants: {
      storage: ["128GB", "256GB", "512GB"],
      colors: ["Pink", "Blue", "Midnight", "Starlight", "Red"]
    },
    specifications: {
      display: "6.1-inch Super Retina XDR",
      chip: "A15 Bionic",
      camera: "12MP Main, 12MP Ultra Wide",
      battery: "Up to 19 hours video playback",
      storage: "256GB"
    }
  },
  {
    id: 7,
    name: "Galaxy S24 Ultra 256GB",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    category: "mobile-phones",
    condition: "new",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 987,
    isNew: true,
    description: "Galaxy S24 Ultra with S Pen and 200MP camera.",
    longDescription: "Samsung Galaxy S24 Ultra with built-in S Pen, 200MP camera, and AI-powered features for ultimate productivity.",
    variants: {
      storage: ["256GB", "512GB", "1TB"],
      ram: ["12GB"],
      colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"]
    },
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main, 50MP Telephoto, 12MP Ultra Wide",
      battery: "5000mAh",
      storage: "256GB",
      ram: "12GB"
    }
  },
  {
    id: 8,
    name: "Galaxy S24 Ultra 512GB",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    category: "mobile-phones",
    condition: "new",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 654,
    isNew: true,
    description: "Galaxy S24 Ultra with enhanced 512GB storage.",
    longDescription: "Samsung Galaxy S24 Ultra with massive 512GB storage and S Pen functionality.",
    variants: {
      storage: ["256GB", "512GB", "1TB"],
      ram: ["12GB"],
      colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"]
    },
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main, 50MP Telephoto, 12MP Ultra Wide",
      battery: "5000mAh",
      storage: "512GB",
      ram: "12GB"
    }
  },
  {
    id: 9,
    name: "Galaxy S23 128GB",
    brand: "Samsung",
    model: "Galaxy S23",
    category: "mobile-phones",
    condition: "new",
    price: 799,
    originalPrice: 899,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 1456,
    isOnSale: true,
    description: "Galaxy S23 with enhanced night photography and Snapdragon 8 Gen 2.",
    longDescription: "Samsung Galaxy S23 delivers flagship performance with enhanced cameras and all-day battery life.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["8GB"],
      colors: ["Phantom Black", "Cream", "Green", "Lavender"]
    },
    specifications: {
      display: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main, 10MP Telephoto, 12MP Ultra Wide",
      battery: "3900mAh",
      storage: "128GB",
      ram: "8GB"
    }
  },
  {
    id: 10,
    name: "Galaxy S23 256GB",
    brand: "Samsung",
    model: "Galaxy S23",
    category: "mobile-phones",
    condition: "used",
    price: 649,
    originalPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 789,
    isOnSale: true,
    description: "Used Galaxy S23 in excellent condition with 256GB storage.",
    longDescription: "Pre-owned Samsung Galaxy S23 in excellent condition, fully tested.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["8GB"],
      colors: ["Phantom Black", "Cream", "Green", "Lavender"]
    },
    specifications: {
      display: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main, 10MP Telephoto, 12MP Ultra Wide",
      battery: "3900mAh",
      storage: "256GB",
      ram: "8GB"
    }
  },
  {
    id: 11,
    name: "Galaxy A54 128GB",
    brand: "Samsung",
    model: "Galaxy A54",
    category: "mobile-phones",
    condition: "new",
    price: 449,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.5,
    reviews: 743,
    description: "Galaxy A54 with 50MP camera and 5000mAh battery.",
    longDescription: "Samsung Galaxy A54 offers premium features at an affordable price with great camera performance.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["6GB", "8GB"],
      colors: ["Awesome Graphite", "Awesome Violet", "Awesome White", "Awesome Lime"]
    },
    specifications: {
      display: "6.4-inch Super AMOLED",
      processor: "Exynos 1380",
      camera: "50MP Main, 12MP Ultra Wide, 5MP Macro",
      battery: "5000mAh",
      storage: "128GB",
      ram: "6GB"
    }
  },
  {
    id: 12,
    name: "Galaxy A54 256GB",
    brand: "Samsung",
    model: "Galaxy A54",
    category: "mobile-phones",
    condition: "used",
    price: 349,
    originalPrice: 449,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.4,
    reviews: 456,
    isOnSale: true,
    description: "Used Galaxy A54 in good condition with 256GB storage.",
    longDescription: "Pre-owned Samsung Galaxy A54 in good condition with expanded storage.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["6GB", "8GB"],
      colors: ["Awesome Graphite", "Awesome Violet", "Awesome White", "Awesome Lime"]
    },
    specifications: {
      display: "6.4-inch Super AMOLED",
      processor: "Exynos 1380",
      camera: "50MP Main, 12MP Ultra Wide, 5MP Macro",
      battery: "5000mAh",
      storage: "256GB",
      ram: "8GB"
    }
  },
  {
    id: 13,
    name: "OnePlus 12 256GB",
    brand: "OnePlus",
    model: "OnePlus 12",
    category: "mobile-phones",
    condition: "new",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 456,
    isNew: true,
    description: "OnePlus 12 with Snapdragon 8 Gen 3 and 100W charging.",
    longDescription: "OnePlus 12 delivers flagship performance with ultra-fast charging and premium design.",
    variants: {
      storage: ["256GB", "512GB"],
      ram: ["12GB", "16GB"],
      colors: ["Silky Black", "Flowy Emerald", "Pale Blue"]
    },
    specifications: {
      display: "6.82-inch LTPO OLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main, 64MP Telephoto, 48MP Ultra Wide",
      battery: "5400mAh with 100W charging",
      storage: "256GB",
      ram: "12GB"
    }
  },
  {
    id: 14,
    name: "OnePlus 12 512GB",
    brand: "OnePlus",
    model: "OnePlus 12",
    category: "mobile-phones",
    condition: "new",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 234,
    isNew: true,
    description: "OnePlus 12 with premium 512GB storage and 16GB RAM.",
    longDescription: "OnePlus 12 with maximum storage and RAM configuration for power users.",
    variants: {
      storage: ["256GB", "512GB"],
      ram: ["12GB", "16GB"],
      colors: ["Silky Black", "Flowy Emerald", "Pale Blue"]
    },
    specifications: {
      display: "6.82-inch LTPO OLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main, 64MP Telephoto, 48MP Ultra Wide",
      battery: "5400mAh with 100W charging",
      storage: "512GB",
      ram: "16GB"
    }
  },
  {
    id: 15,
    name: "OnePlus 11 128GB",
    brand: "OnePlus",
    model: "OnePlus 11",
    category: "mobile-phones",
    condition: "new",
    price: 699,
    originalPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 678,
    isOnSale: true,
    description: "OnePlus 11 with Hasselblad camera and 80W charging.",
    longDescription: "OnePlus 11 features Hasselblad camera system and blazing-fast charging technology.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["8GB", "16GB"],
      colors: ["Titan Black", "Eternal Green"]
    },
    specifications: {
      display: "6.7-inch LTPO OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main, 32MP Telephoto, 48MP Ultra Wide",
      battery: "5000mAh with 80W charging",
      storage: "128GB",
      ram: "8GB"
    }
  },
  {
    id: 16,
    name: "OnePlus 11 256GB",
    brand: "OnePlus",
    model: "OnePlus 11",
    category: "mobile-phones",
    condition: "used",
    price: 549,
    originalPrice: 699,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.5,
    reviews: 345,
    isOnSale: true,
    description: "Used OnePlus 11 in excellent condition with 256GB storage.",
    longDescription: "Pre-owned OnePlus 11 in excellent condition with Hasselblad cameras.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["8GB", "16GB"],
      colors: ["Titan Black", "Eternal Green"]
    },
    specifications: {
      display: "6.7-inch LTPO OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main, 32MP Telephoto, 48MP Ultra Wide",
      battery: "5000mAh with 80W charging",
      storage: "256GB",
      ram: "16GB"
    }
  },
  {
    id: 17,
    name: "AirPods Pro (2nd Gen)",
    brand: "Apple",
    model: "AirPods Pro 2nd Gen",
    category: "accessories",
    condition: "new",
    price: 249,
    originalPrice: 279,
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 1567,
    isOnSale: true,
    description: "AirPods Pro with active noise cancellation and spatial audio.",
    longDescription: "AirPods Pro (2nd generation) deliver rich, immersive sound with Adaptive EQ and active noise cancellation.",
    variants: {
      colors: ["White"]
    },
    specifications: {
      chip: "H2 chip",
      battery: "Up to 6 hours listening time",
      features: "Active Noise Cancellation, Spatial Audio",
      connectivity: "Bluetooth 5.3"
    }
  },
  {
    id: 18,
    name: "AirPods Pro (2nd Gen) - Used",
    brand: "Apple",
    model: "AirPods Pro 2nd Gen",
    category: "accessories",
    condition: "used",
    price: 199,
    originalPrice: 249,
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 432,
    isOnSale: true,
    description: "Used AirPods Pro in good condition with all accessories.",
    longDescription: "Pre-owned AirPods Pro (2nd generation) in good condition, tested and certified.",
    variants: {
      colors: ["White"]
    },
    specifications: {
      chip: "H2 chip",
      battery: "Up to 6 hours listening time",
      features: "Active Noise Cancellation, Spatial Audio",
      connectivity: "Bluetooth 5.3"
    }
  },
  {
    id: 19,
    name: "iPhone 15 Pro Max 1TB - Titanium Black",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    category: "mobile-phones",
    condition: "used",
    price: 1299,
    originalPrice: 1599,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 456,
    isOnSale: true,
    description: "Used iPhone 15 Pro Max 1TB in excellent condition.",
    longDescription: "Pre-owned iPhone 15 Pro Max with maximum storage capacity.",
    variants: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"]
    },
    specifications: {
      display: "6.7-inch Super Retina XDR",
      chip: "A17 Pro",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      storage: "1TB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3"
    }
  },
  {
    id: 20,
    name: "iPhone 14 Pro 512GB - Deep Purple",
    brand: "Apple",
    model: "iPhone 14 Pro",
    category: "mobile-phones",
    condition: "new",
    price: 1199,
    originalPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 789,
    isOnSale: true,
    description: "iPhone 14 Pro 512GB in stunning Deep Purple.",
    longDescription: "iPhone 14 Pro with premium storage capacity and Dynamic Island.",
    variants: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      colors: ["Deep Purple", "Gold", "Silver", "Space Black"]
    },
    specifications: {
      display: "6.1-inch Super Retina XDR",
      chip: "A16 Bionic",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      storage: "512GB"
    }
  },
  {
    id: 21,
    name: "iPhone 13 512GB - Product Red",
    brand: "Apple",
    model: "iPhone 13",
    category: "mobile-phones",
    condition: "new",
    price: 899,
    originalPrice: 999,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 654,
    isOnSale: true,
    description: "iPhone 13 512GB in striking Product Red.",
    longDescription: "iPhone 13 with maximum storage and iconic red design.",
    variants: {
      storage: ["128GB", "256GB", "512GB"],
      colors: ["Pink", "Blue", "Midnight", "Starlight", "Red"]
    },
    specifications: {
      display: "6.1-inch Super Retina XDR",
      chip: "A15 Bionic",
      camera: "12MP Main, 12MP Ultra Wide",
      battery: "Up to 19 hours video playback",
      storage: "512GB"
    }
  },
  {
    id: 22,
    name: "Galaxy S24 Ultra 1TB - Titanium Yellow",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    category: "mobile-phones",
    condition: "used",
    price: 1399,
    originalPrice: 1699,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 321,
    isOnSale: true,
    description: "Used Galaxy S24 Ultra 1TB in vibrant Titanium Yellow.",
    longDescription: "Pre-owned Galaxy S24 Ultra with maximum storage and S Pen.",
    variants: {
      storage: ["256GB", "512GB", "1TB"],
      ram: ["12GB"],
      colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"]
    },
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main, 50MP Telephoto, 12MP Ultra Wide",
      battery: "5000mAh",
      storage: "1TB",
      ram: "12GB"
    }
  },
  {
    id: 23,
    name: "Galaxy S23 256GB - Green",
    brand: "Samsung",
    model: "Galaxy S23",
    category: "mobile-phones",
    condition: "new",
    price: 849,
    originalPrice: 949,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 567,
    isOnSale: true,
    description: "Galaxy S23 256GB in elegant Green color.",
    longDescription: "Samsung Galaxy S23 with enhanced storage and premium design.",
    variants: {
      storage: ["128GB", "256GB"],
      ram: ["8GB"],
      colors: ["Phantom Black", "Cream", "Green", "Lavender"]
    },
    specifications: {
      display: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main, 10MP Telephoto, 12MP Ultra Wide",
      battery: "3900mAh",
      storage: "256GB",
      ram: "8GB"
    }
  },
  {
    id: 24,
    name: "OnePlus 12 1TB - Flowy Emerald",
    brand: "OnePlus",
    model: "OnePlus 12",
    category: "mobile-phones",
    condition: "used",
    price: 999,
    originalPrice: 1199,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 234,
    isOnSale: true,
    description: "Used OnePlus 12 1TB in beautiful Flowy Emerald.",
    longDescription: "Pre-owned OnePlus 12 with maximum storage and premium color.",
    variants: {
      storage: ["256GB", "512GB", "1TB"],
      ram: ["12GB", "16GB"],
      colors: ["Silky Black", "Flowy Emerald", "Pale Blue"]
    },
    specifications: {
      display: "6.82-inch LTPO OLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main, 64MP Telephoto, 48MP Ultra Wide",
      battery: "5400mAh with 100W charging",
      storage: "1TB",
      ram: "16GB"
    }
  },
  {
    id: 25,
    name: "OnePlus 11 512GB - Eternal Green",
    brand: "OnePlus",
    model: "OnePlus 11",
    category: "mobile-phones",
    condition: "new",
    price: 799,
    originalPrice: 899,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    rating: 4.5,
    reviews: 432,
    isOnSale: true,
    description: "OnePlus 11 512GB in striking Eternal Green.",
    longDescription: "OnePlus 11 with enhanced storage and Hasselblad cameras.",
    variants: {
      storage: ["128GB", "256GB", "512GB"],
      ram: ["8GB", "16GB"],
      colors: ["Titan Black", "Eternal Green"]
    },
    specifications: {
      display: "6.7-inch LTPO OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main, 32MP Telephoto, 48MP Ultra Wide",
      battery: "5000mAh with 80W charging",
      storage: "512GB",
      ram: "16GB"
    }
  }
];
