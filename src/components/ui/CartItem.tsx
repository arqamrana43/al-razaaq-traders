
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200 animate-fade-in">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-razaq-green-900">
            <h3>{product.name}</h3>
            <p className="ml-4">Rs {product.discountedPrice * quantity}</p>
          </div>
          <p className="mt-1 text-sm text-razaq-green-600">
            Rs {product.discountedPrice} each
          </p>
        </div>

        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border border-gray-200 rounded">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-none text-razaq-green hover:text-razaq-green-700 hover:bg-razaq-green-50"
              onClick={handleDecrease}
            >
              <Minus size={14} />
            </Button>
            <span className="w-8 text-center text-sm font-medium">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-none text-razaq-green hover:text-razaq-green-700 hover:bg-razaq-green-50"
              onClick={handleIncrease}
            >
              <Plus size={14} />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 h-auto"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
