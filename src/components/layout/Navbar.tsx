
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const categories = [
    { name: "Fertilizers", path: "/category/fertilizers" },
    { name: "Rice", path: "/category/rice" },
    { name: "Lentils", path: "/category/lentils" },
    { name: "Flour", path: "/category/flour" },
    { name: "Daily Essentials", path: "/category/essentials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "py-3 bg-white/80 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <img
            src="/lovable-uploads/e3ff483d-21b7-4180-ac53-90967d609c8d.png"
            alt="Al-Razaq Traders"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={cn(
                "text-razaq-green-800 hover:text-razaq-green-600 font-medium text-sm relative",
                location.pathname === category.path &&
                  "text-razaq-green after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-razaq-green"
              )}
            >
              {category.name}
            </Link>
          ))}
          <Link
            to="/about"
            className={cn(
              "text-razaq-green-800 hover:text-razaq-green-600 font-medium text-sm relative",
              location.pathname === "/about" &&
                "text-razaq-green after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-razaq-green"
            )}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-razaq-green-800 hover:text-razaq-green-600 font-medium text-sm relative",
              location.pathname === "/contact" &&
                "text-razaq-green after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-razaq-green"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-razaq-green-700 hover:text-razaq-green hover:bg-razaq-green-50"
            >
              <Search size={20} />
            </Button>
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg p-3 w-72 animate-fade-in">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Search products..." 
                    className="border-razaq-green-200 focus-visible:ring-razaq-green-400" 
                    autoFocus
                  />
                  <Button 
                    size="sm" 
                    className="bg-razaq-green hover:bg-razaq-green-600"
                  >
                    <Search size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-razaq-green-700 hover:text-razaq-green hover:bg-razaq-green-50"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-razaq-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-razaq-green-700 hover:text-razaq-green hover:bg-razaq-green-50"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white/95 backdrop-blur-lg border-l border-razaq-green-100"
            >
              <div className="flex flex-col h-full">
                <Link
                  to="/"
                  className="flex items-center gap-2 py-4 transition-transform hover:scale-105"
                >
                  <img
                    src="/lovable-uploads/e3ff483d-21b7-4180-ac53-90967d609c8d.png"
                    alt="Al-Razaq Traders"
                    className="h-10 w-auto"
                  />
                </Link>
                <nav className="flex flex-col space-y-4 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="text-razaq-green-800 hover:text-razaq-green-600 font-medium py-2 border-b border-razaq-green-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link
                    to="/about"
                    className="text-razaq-green-800 hover:text-razaq-green-600 font-medium py-2 border-b border-razaq-green-100"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-razaq-green-800 hover:text-razaq-green-600 font-medium py-2 border-b border-razaq-green-100"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mt-auto pt-4 pb-8">
                  <p className="text-sm text-razaq-green-600 mb-2">Need help?</p>
                  <p className="text-razaq-green-800 font-medium">+92 300 1234567</p>
                  <p className="text-razaq-green-800 text-sm">info@alrazaqtraders.com</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
