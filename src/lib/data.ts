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
    image: "https://images.unsplash.com/photo-1621956838481-f8f616950454?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Various types of nutritious lentils for your daily cooking needs.",
  },
  {
    id: "flour",
    name: "Flour",
    nameUrdu: "آٹا",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvdXJ8ZW58MHx8MHx8fDA%3D",
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
    image: "https://organicplantmagic.com/cdn/shop/products/product-soluble-plant-food-half-lb.jpg?v=1660088047",
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
    image: "https://plus.unsplash.com/premium_photo-1678652879155-bd82999aac9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZlcnRpbGl6ZXJ8ZW58MHx8MHx8fDA%3D",
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
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByZW1pdW0lMjBCYXNtYXRpJTIwUmljZXxlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJvd24lMjBSaWNlfGVufDB8fDB8fHww",
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
    image: "https://images.unsplash.com/photo-1612708074992-c7936e82c99b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhc21hdGl8ZW58MHx8MHx8fDA%3D",
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
    image: "https://images.unsplash.com/photo-1614373532201-c40b993f0013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwbGVudGlsc3xlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlFMN9t_NzgD1Y7BgmkT__us_Sn_ZAdCrTg&s",
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
    image: "https://nutsandtwigs.com/wp-content/uploads/2023/07/mung-beans.jpg",
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
    image: "https://plus.unsplash.com/premium_photo-1722606754350-48e8208c2c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluZSUyMFdoZWF0JTIwRmxvdXJ8ZW58MHx8MHx8fDA%3D",
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
    image: "https://plus.unsplash.com/premium_photo-1663841165466-5caea686cf49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdob2xlJTIwV2hlYXQlMjBGbG91cnxlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdLDPcN6yAHf_fshTkwKeMM_N9umPlNzPJw&s",
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
    image: "https://plus.unsplash.com/premium_photo-1726079119122-eea1b0741c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9jayUyMHNhbHR8ZW58MHx8MHx8fDA%3D",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0pCS7B5XcFIx2jH_q5UJjiVmdVYLITXJ5Q&s",
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
