
import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return <footer className="bg-razaq-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img alt="Al-Razaq Traders" className="h-16 w-auto mb-4 brightness-200" src="/lovable-uploads/f9a3d957-3284-4533-9af8-693d4760f757.png" />
            </Link>
            <p className="text-razaq-cream-300 text-sm leading-relaxed">
              Your trusted source for quality grocery items including fertilizers, rice, lentils, flour and daily essentials.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-razaq-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-razaq-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-razaq-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-medium mb-6 text-razaq-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#featured-products" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-heading font-medium mb-6 text-razaq-gold">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/fertilizers" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link to="/category/rice" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Rice
                </Link>
              </li>
              <li>
                <Link to="/category/lentils" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Lentils
                </Link>
              </li>
              <li>
                <Link to="/category/flour" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Flour
                </Link>
              </li>
              <li>
                <Link to="/category/essentials" className="text-razaq-cream-300 hover:text-white transition-colors text-sm">
                  Daily Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-medium mb-6 text-razaq-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-razaq-gold mt-1 flex-shrink-0" />
                <span className="text-razaq-cream-300 text-sm">6H6M+M4H, Gujranwala Pasrur Rd, Chicharwali Bajwa Pasrūr, 51250</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-razaq-gold flex-shrink-0" />
                <span className="text-razaq-cream-300 text-sm">+92 342 6378084</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-razaq-gold flex-shrink-0" />
                <span className="text-razaq-cream-300 text-sm">info@al-razaq-traders.42web.io</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-razaq-green-700 mt-12 pt-8 text-center text-razaq-cream-400 text-sm">
          <p>© {new Date().getFullYear()} Al-Razaq Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
