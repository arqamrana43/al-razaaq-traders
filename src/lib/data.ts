export interface Product {
  id: string;
  name: string;
  nameUrdu?: string;
  category: string;
  price: number;
  discount: number;
  discountedPrice: number;
  description: string;
  image: string;
  stock: number;
  weight: string;
  isNew: boolean;
  isFeatured: boolean;
  tags: string[];
}

// Helper function to calculate discounted price
const calculateDiscountedPrice = (price: number, discount: number) => {
  return Math.round(price - (price * discount) / 100);
};

// Product categories
export type CategoryType = "fertilizers" | "rice" | "lentils" | "flour" | "essentials";

export const categories = [
  {
    id: "fertilizers",
    name: "Fertilizers",
    nameUrdu: "کھادیں",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop",
    description: "Organic and chemical fertilizers for better crop yield and plant health.",
  },
  {
    id: "rice",
    name: "Rice",
    nameUrdu: "چاول",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070&auto=format&fit=crop",
    description: "Premium quality rice varieties from different regions of Pakistan.",
  },
  {
    id: "lentils",
    name: "Lentils",
    nameUrdu: "دالیں",
    image: "https://www.lummi.ai/api/render/image/9c76b75f-9c89-4804-b553-aa88b9271133?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjljNzZiNzVmLTljODktNDgwNC1iNTUzLWFhODhiOTI3MTEzMyIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiVkptNTdYWnU1YTV6MF9BVTRZTTlKIiwiaWF0IjoxNzQxNDgzNTU3LCJleHAiOjE3NDE0ODM2MTd9.anHf-arcNVwgZnFExPcriBoy6Ttq65_-aG98Ijrg2zc",
    description: "Various types of nutritious lentils for your daily cooking needs.",
  },
  {
    id: "flour",
    name: "Flour",
    nameUrdu: "آٹا",
    image: "https://www.lummi.ai/api/render/image/6684ec55-46fd-4e5e-b0ce-5521bf9f6d63?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY2ODRlYzU1LTQ2ZmQtNGU1ZS1iMGNlLTU1MjFiZjlmNmQ2MyIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiVGxCcl8tR0loVWNzWktNbmpQbE04IiwiaWF0IjoxNzQxNDgzNjUzLCJleHAiOjE3NDE0ODM3MTN9.9nS1LTRVE1yN-zg4wyOm-R5GUoXAwPcYZWc-BbhUGO4",
    description: "Freshly ground flour for making delicious bread, rotis and more.",
  },
  {
    id: "essentials",
    name: "Daily Essentials",
    nameUrdu: "روز مرہ کی چیزیں",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070&auto=format&fit=crop",
    description: "Essential grocery items for everyday household needs.",
  },
];

// Mock products data
export const products: Product[] = [
  // Fertilizers
  {
    id: "fert-001",
    name: "Organic Plant Food",
    nameUrdu: "نباتاتی خوراک",
    category: "fertilizers",
    price: 600,
    discount: 0,
    discountedPrice: 600,
    description: "100% organic plant food that enhances soil fertility and plant growth. Made from natural ingredients.",
    image: "https://www.lummi.ai/api/render/image/31489013-e2ab-4abe-9c1e-b7d881f54ba6?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMxNDg5MDEzLWUyYWItNGFiZS05YzFlLWI3ZDg4MWY1NGJhNiIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiY3BSb3dTQUtYZF95TXhqUkZYTGhBIiwiaWF0IjoxNzQxNDgzMjQ5LCJleHAiOjE3NDE0ODMzMDl9.tklhIP7CxjjvrQTqlKUk2YU3ynQ0WX1qEx0eH26KNpo",
    stock: 50,
    weight: "1 kg",
    isNew: true,
    isFeatured: true,
    tags: ["organic", "plant food", "fertilizer"],
  },
  {
    id: "fert-002",
    name: "NPK Fertilizer Mix",
    nameUrdu: "این پی کے کھاد مکس",
    category: "fertilizers",
    price: 850,
    discount: 5,
    discountedPrice: 808,
    description: "Balanced NPK fertilizer to provide essential nutrients for plants. Ideal for all types of crops.",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1972&auto=format&fit=crop",
    stock: 35,
    weight: "2 kg",
    isNew: false,
    isFeatured: false,
    tags: ["NPK", "fertilizer", "nutrients"],
  },
  {
    id: "fert-003",
    name: "Lawn Feed & Weed Control",
    nameUrdu: "لان فیڈ اور جڑی بوٹی کنٹرول",
    category: "fertilizers",
    price: 1200,
    discount: 0,
    discountedPrice: 1200,
    description: "Dual-action formula that feeds your lawn and controls weeds. Perfect for maintaining a beautiful lawn.",
    image: "https://www.newzealandlawnaddicts.com/wp-content/uploads/2023/08/078A7330.jpg",
    stock: 20,
    weight: "3 kg",
    isNew: false,
    isFeatured: true,
    tags: ["lawn care", "weed control", "fertilizer"],
  },

  // Rice
  {
    id: "rice-001",
    name: "Premium Basmati Rice",
    nameUrdu: "پریمیم باسمتی چاول",
    category: "rice",
    price: 550,
    discount: 0,
    discountedPrice: 550,
    description: "Long-grain aromatic basmati rice from the foothills of Himalayas. Known for its distinctive aroma and taste.",
    image: "https://www.lummi.ai/api/render/image/0d2ff5ef-1e84-4f41-b5a1-131c044cef51?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBkMmZmNWVmLTFlODQtNGY0MS1iNWExLTEzMWMwNDRjZWY1MSIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiSlF1d01sajBWdzhXbm5MQ2pZdzllIiwiaWF0IjoxNzQxNDgzODYzLCJleHAiOjE3NDE0ODM5MjN9.9XxvhedUutK9sjo34_6IQspVGJzZJeX9-hZDINLyZ4g",
    stock: 100,
    weight: "5 kg",
    isNew: false,
    isFeatured: true,
    tags: ["basmati", "rice", "premium"],
  },
  {
    id: "rice-002",
    name: "Brown Rice",
    nameUrdu: "براؤن رائس",
    category: "rice",
    price: 480,
    discount: 10,
    discountedPrice: 432,
    description: "Nutritious whole grain brown rice with natural bran layer. Rich in fiber and essential nutrients.",
    image: "https://www.lummi.ai/api/render/image/b360cfad-2226-4c59-bc15-15855459f955?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIzNjBjZmFkLTIyMjYtNGM1OS1iYzE1LTE1ODU1NDU5Zjk1NSIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoid0gyVjVjWTlBRjZ1X1NPRV9HeldJIiwiaWF0IjoxNzQxNDg0MDM5LCJleHAiOjE3NDE0ODQwOTl9.KkdnaUQvG2NwENbeC9KbwmSJrwq4LPGb0kvsdLHW3ZY",
    stock: 75,
    weight: "5 kg",
    isNew: true,
    isFeatured: false,
    tags: ["brown rice", "whole grain", "nutritious"],
  },
  {
    id: "rice-003",
    name: "Super Kernel Basmati",
    nameUrdu: "سپر کرنل باسمتی",
    category: "rice",
    price: 700,
    discount: 0,
    discountedPrice: 700,
    description: "Extra-long grain premium basmati rice. Perfect for biryanis and special occasions.",
    image: "https://www.lummi.ai/api/render/image/6f5f3e12-39ce-4cec-9587-81baf997bc0a?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZmNWYzZTEyLTM5Y2UtNGNlYy05NTg3LTgxYmFmOTk3YmMwYSIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiaWZKdGdZUkJlM0lEYnZHM3lNdDhWIiwiaWF0IjoxNzQxNDgzODkxLCJleHAiOjE3NDE0ODM5NTF9.bJ6NwYIz54IG_sM9toxA-fTROhY1rKs7vH5I7eQqDlY",
    stock: 40,
    weight: "5 kg",
    isNew: false,
    isFeatured: true,
    tags: ["basmati", "premium", "long grain"],
  },

  // Lentils
  {
    id: "lentil-001",
    name: "Masoor Dal (Red Lentils)",
    nameUrdu: "مسور دال",
    category: "lentils",
    price: 250,
    discount: 0,
    discountedPrice: 250,
    description: "Split red lentils that cook quickly and are perfect for soups and curries. Rich in protein and iron.",
    image: "https://images.unsplash.com/photo-1568720853536-95a025b797e3?q=80&w=2073&auto=format&fit=crop",
    stock: 120,
    weight: "1 kg",
    isNew: false,
    isFeatured: false,
    tags: ["masoor", "red lentils", "dal"],
  },
  {
    id: "lentil-002",
    name: "Chana Dal (Split Chickpeas)",
    nameUrdu: "چنا دال",
    category: "lentils",
    price: 280,
    discount: 5,
    discountedPrice: 266,
    description: "Split chickpeas with a mild, sweet flavor. Great for traditional Pakistani dishes.",
    image: "https://images.unsplash.com/photo-1639789142427-cbf46a66b9eb?q=80&w=2070&auto=format&fit=crop",
    stock: 80,
    weight: "1 kg",
    isNew: false,
    isFeatured: true,
    tags: ["chana", "chickpeas", "dal"],
  },
  {
    id: "lentil-003",
    name: "Moong Dal (Split Mung Beans)",
    nameUrdu: "مونگ دال",
    category: "lentils",
    price: 300,
    discount: 0,
    discountedPrice: 300,
    description: "Split yellow mung beans that are easy to digest and highly nutritious. Used in a variety of dishes.",
    image: "https://www.lummi.ai/api/render/image/f48bae49-ce44-49a8-8cc3-2d671d8c580a?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY0OGJhZTQ5LWNlNDQtNDlhOC04Y2MzLTJkNjcxZDhjNTgwYSIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiS3k3b2dUYkZab2R1MUNqbTg1SEktIiwiaWF0IjoxNzQxNDg0MTEyLCJleHAiOjE3NDE0ODQxNzJ9.MrUa57b0AaQdaQ8OjoOurpUEdICRsJjHlw96d426MFs",
    stock: 90,
    weight: "1 kg",
    isNew: true,
    isFeatured: false,
    tags: ["moong", "mung beans", "dal"],
  },

  // Flour
  {
    id: "flour-001",
    name: "Fine Wheat Flour (Maida)",
    nameUrdu: "میدہ",
    category: "flour",
    price: 220,
    discount: 0,
    discountedPrice: 220,
    description: "Finely milled white flour, perfect for making naan, paratha and pastries.",
    image: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?q=80&w=1974&auto=format&fit=crop",
    stock: 150,
    weight: "5 kg",
    isNew: false,
    isFeatured: false,
    tags: ["maida", "white flour", "refined"],
  },
  {
    id: "flour-002",
    name: "Whole Wheat Flour (Atta)",
    nameUrdu: "آٹا",
    category: "flour",
    price: 260,
    discount: 8,
    discountedPrice: 239,
    description: "Stone-ground whole wheat flour for making healthy rotis and chapatis. Contains all parts of the grain.",
    image: "https://images.unsplash.com/photo-1614119075118-7ffef3a8bf69?q=80&w=1974&auto=format&fit=crop",
    stock: 200,
    weight: "10 kg",
    isNew: false,
    isFeatured: true,
    tags: ["atta", "whole wheat", "stone-ground"],
  },
  {
    id: "flour-003",
    name: "Gram Flour (Besan)",
    nameUrdu: "بیسن",
    category: "flour",
    price: 180,
    discount: 0,
    discountedPrice: 180,
    description: "Flour made from ground chickpeas, used for pakoras, bhajias and other savory dishes.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop",
    stock: 100,
    weight: "1 kg",
    isNew: true,
    isFeatured: false,
    tags: ["besan", "gram flour", "chickpea"],
  },

  // Daily Essentials
  {
    id: "ess-001",
    name: "Pure Sunflower Oil",
    nameUrdu: "پیور سنفلاور آئل",
    category: "essentials",
    price: 650,
    discount: 15,
    discountedPrice: 553,
    description: "Refined sunflower oil, low in saturated fats and high in Vitamin E. Ideal for daily cooking.",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1964&auto=format&fit=crop",
    stock: 60,
    weight: "5 L",
    isNew: false,
    isFeatured: true,
    tags: ["oil", "cooking", "sunflower"],
  },
  {
    id: "ess-002",
    name: "Rock Salt (Himalayan Pink Salt)",
    nameUrdu: "ہمالیہ نمک",
    category: "essentials",
    price: 120,
    discount: 0,
    discountedPrice: 120,
    description: "Natural rock salt from the Himalayan mountains. Contains essential minerals and trace elements.",
    image: "https://images.unsplash.com/photo-1585159858792-de591ca5fcf5?q=80&w=2069&auto=format&fit=crop",
    stock: 180,
    weight: "1 kg",
    isNew: false,
    isFeatured: false,
    tags: ["salt", "himalayan", "rock salt"],
  },
  {
    id: "ess-003",
    name: "Organic Honey",
    nameUrdu: "آرگینک شہد",
    category: "essentials",
    price: 850,
    discount: 5,
    discountedPrice: 808,
    description: "Pure organic honey sourced from the mountains of Northern Pakistan. Raw and unfiltered.",
    image: "https://images.unsplash.com/photo-1602133939991-6fee49812ee0?q=80&w=2070&auto=format&fit=crop",
    stock: 30,
    weight: "500 g",
    isNew: true,
    isFeatured: true,
    tags: ["honey", "organic", "natural"],
  },
];

// Helper functions to get products by category, filter, etc.
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: CategoryType): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.isNew);
};

export const getCategoryById = (id: string) => {
  return categories.find((category) => category.id === id);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  return products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, limit);
};
