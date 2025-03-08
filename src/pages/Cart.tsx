
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShoppingBag, 
  ArrowLeft, 
  Trash2, 
  ShoppingCart,
  CreditCard,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import CartItemComponent from "@/components/ui/CartItem";
import { toast } from "sonner";

const Cart = () => {
  const { cart, clearCart, getTotalItems, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast.success("Your order has been placed successfully!");
      clearCart();
      setIsCheckingOut(false);
      navigate("/");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-razaq-green-200 mb-6" />
          <h1 className="text-3xl font-heading font-medium text-razaq-green-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-razaq-green-600 mb-8 max-w-md mx-auto">
            Looks like you haven't added any products to your cart yet. Browse our categories to find what you need.
          </p>
          <Link to="/">
            <Button className="bg-razaq-green hover:bg-razaq-green-600">
              <ShoppingCart size={18} className="mr-2" /> Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-heading font-medium text-razaq-green-900">
          Your Shopping Cart <span className="text-razaq-green-600">({getTotalItems()} items)</span>
        </h1>
        <Link to="/" className="text-razaq-green-600 hover:text-razaq-green-800 hidden md:flex items-center transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Continue Shopping
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-razaq-green-900">Cart Items</h2>
            <Button 
              variant="ghost"
              size="sm"
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-auto"
            >
              <Trash2 size={16} className="mr-2" /> Clear Cart
            </Button>
          </div>
          <Separator className="mb-4" />
          
          <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
            {cart.map((item) => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}
          </div>
          
          <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-sm text-razaq-green-600">
              * Prices include all applicable taxes
            </span>
            <Link to="/" className="text-razaq-green-600 hover:text-razaq-green-800 flex md:hidden items-center transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-lg font-medium text-razaq-green-900 mb-4">Order Summary</h2>
          <Separator className="mb-4" />
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-razaq-green-600">Subtotal</span>
              <span className="font-medium">Rs {getTotalPrice()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-razaq-green-600">Shipping</span>
              <span className="font-medium">Rs {getTotalPrice() > 2000 ? 0 : 200}</span>
            </div>
            {getTotalPrice() > 2000 && (
              <div className="flex justify-between text-green-600 text-sm">
                <span>Free shipping on orders above Rs 2000</span>
                <span>-Rs 200</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between text-lg font-medium pt-2">
              <span className="text-razaq-green-900">Total</span>
              <span className="text-razaq-green-900">Rs {getTotalPrice() > 2000 ? getTotalPrice() : getTotalPrice() + 200}</span>
            </div>
          </div>
          
          <Button 
            className="w-full mt-6 bg-razaq-green hover:bg-razaq-green-600 text-white"
            onClick={handleCheckout}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" /> Processing...
              </>
            ) : (
              <>
                <CreditCard size={18} className="mr-2" /> Proceed to Checkout
              </>
            )}
          </Button>
          
          <div className="mt-6 text-sm text-razaq-green-600">
            <p className="mb-2">We accept:</p>
            <div className="flex gap-2">
              <div className="bg-gray-100 rounded p-1 px-2">Visa</div>
              <div className="bg-gray-100 rounded p-1 px-2">Mastercard</div>
              <div className="bg-gray-100 rounded p-1 px-2">COD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
