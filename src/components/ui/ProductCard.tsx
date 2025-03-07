
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group glass-card overflow-hidden flex flex-col animate-scale-in",
        featured ? "aspect-square" : "h-full"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-razaq-cream-100">
        {product.isNew && (
          <span className="absolute top-2 left-2 badge-new z-10">New</span>
        )}
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 badge-sale z-10">
            {product.discount}% OFF
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
        />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="mb-2">
          <span className="text-xs text-razaq-green-600">
            {product.category}
          </span>
          <h3 className="font-medium text-razaq-green-900 group-hover:text-razaq-green transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-baseline mt-1 mb-2">
            <span className="text-lg font-medium text-razaq-green-800">
              Rs {product.discountedPrice}
            </span>
            {product.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                Rs {product.price}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-3 flex items-center gap-2">
          <div className="flex items-center border border-razaq-green-200 rounded">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none text-razaq-green hover:text-razaq-green-700 hover:bg-razaq-green-50"
              onClick={decrementQuantity}
            >
              <Minus size={14} />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none text-razaq-green hover:text-razaq-green-700 hover:bg-razaq-green-50"
              onClick={incrementQuantity}
            >
              <Plus size={14} />
            </Button>
          </div>
          <Button
            className="bg-razaq-green hover:bg-razaq-green-600 text-white rounded-md flex-grow h-8"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={14} className="mr-1" /> Add
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
