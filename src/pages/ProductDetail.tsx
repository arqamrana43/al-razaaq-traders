
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Minus, 
  Plus, 
  ShoppingCart, 
  ArrowLeft, 
  Truck, 
  ShieldCheck, 
  RefreshCw 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/ProductCard";
import { 
  getProductById, 
  getRelatedProducts, 
  Product 
} from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (productId) {
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(getRelatedProducts(foundProduct));
        
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      }
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`Added ${quantity} ${product.name} to cart`);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-razaq-green-600">Loading product...</div>
      </div>
    );
  }

  return (
    <div className={`pt-24 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to={`/category/${product.category}`} 
            className="inline-flex items-center text-razaq-green-600 hover:text-razaq-green-800 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to {product.category}
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="relative aspect-square">
              {product.isNew && (
                <span className="absolute top-4 left-4 badge-new z-10">New</span>
              )}
              {product.discount > 0 && (
                <span className="absolute top-4 right-4 badge-sale z-10">
                  {product.discount}% OFF
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover animate-scale-in"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in">
            <h1 className="text-3xl font-heading font-medium text-razaq-green-900 mb-2">
              {product.name}
            </h1>
            {product.nameUrdu && (
              <h2 className="text-xl text-razaq-green-700 mb-4">{product.nameUrdu}</h2>
            )}
            
            <div className="mb-6">
              <span className="text-sm text-razaq-green-600 bg-razaq-green-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-medium text-razaq-green-900">
                Rs {product.discountedPrice}
              </span>
              {product.discount > 0 && (
                <span className="ml-3 text-lg text-gray-500 line-through">
                  Rs {product.price}
                </span>
              )}
              {product.discount > 0 && (
                <span className="ml-3 text-sm font-medium text-razaq-gold-700">
                  Save {product.discount}%
                </span>
              )}
            </div>
            
            <p className="text-razaq-green-700 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-razaq-green-900 w-24">Weight:</span>
                <span className="text-razaq-green-700">{product.weight}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-razaq-green-900 w-24">Availability:</span>
                <span className={`${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <label htmlFor="quantity" className="text-sm font-medium text-razaq-green-900 block mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <div className="flex items-center border border-gray-200 rounded">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none text-razaq-green hover:text-razaq-green-700 hover:bg-razaq-green-50"
                    onClick={decrementQuantity}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="w-12 text-center text-lg font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none text-razaq-green hover:text-razaq-green-700 hover:bg-razaq-green-50"
                    onClick={incrementQuantity}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
                <Button
                  className="ml-4 bg-razaq-green hover:bg-razaq-green-600 text-white h-10 px-8"
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                >
                  <ShoppingCart size={18} className="mr-2" /> Add to Cart
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Truck size={20} className="text-razaq-green mr-2" />
                <span className="text-sm text-razaq-green-700">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck size={20} className="text-razaq-green mr-2" />
                <span className="text-sm text-razaq-green-700">Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <RefreshCw size={20} className="text-razaq-green mr-2" />
                <span className="text-sm text-razaq-green-700">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full border-b border-gray-200 bg-transparent mb-6">
              <TabsTrigger value="description" className="text-base">Description</TabsTrigger>
              <TabsTrigger value="details" className="text-base">Details</TabsTrigger>
              <TabsTrigger value="reviews" className="text-base">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="animate-fade-in">
              <div className="prose max-w-none text-razaq-green-700">
                <p className="mb-4">{product.description}</p>
                <p>
                  Our {product.name} is carefully sourced to ensure you get the best quality. 
                  We take pride in providing products that meet the highest standards of quality and freshness.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-razaq-green-900 mb-4">Product Specifications</h3>
                  <ul className="space-y-2 text-razaq-green-700">
                    <li className="flex justify-between">
                      <span className="font-medium">Category:</span>
                      <span>{product.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Weight:</span>
                      <span>{product.weight}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Origin:</span>
                      <span>Pakistan</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Stock:</span>
                      <span>{product.stock} units</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-razaq-green-900 mb-4">Shipping Information</h3>
                  <ul className="space-y-2 text-razaq-green-700">
                    <li className="flex justify-between">
                      <span className="font-medium">Delivery Time:</span>
                      <span>1-3 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Shipping Fee:</span>
                      <span>Free on orders above Rs 2000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Packaging:</span>
                      <span>Secure & Eco-friendly</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Return Policy:</span>
                      <span>7 days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="animate-fade-in">
              <div className="text-center py-8">
                <h3 className="text-xl font-medium text-razaq-green-900 mb-2">
                  Customer Reviews Coming Soon
                </h3>
                <p className="text-razaq-green-700 mb-6">
                  We're working on collecting reviews for this product. Check back soon!
                </p>
                <Button className="bg-razaq-green hover:bg-razaq-green-600 text-white">
                  Be the First to Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-medium text-razaq-green-900 mb-8">
              Related Products
            </h2>
            <div className="product-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
