
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FloatingCartButton = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalItems = getTotalItems();

  // Show button when items are in cart
  useEffect(() => {
    if (totalItems > 0) {
      setIsVisible(true);
      // Animate when item is added
      if (totalItems > 0) {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 600);
        return () => clearTimeout(timer);
      }
    } else {
      setIsVisible(false);
    }
  }, [totalItems]);

  const handleClick = () => {
    navigate("/cart");
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 bg-razaq-green text-white rounded-full p-3 shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:bg-razaq-green-600",
        isAnimating && "animate-bounce"
      )}
      aria-label="Cart"
    >
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-razaq-gold text-razaq-green-900 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
