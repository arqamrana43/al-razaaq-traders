
import { Separator } from "@/components/ui/separator";
import { Leaf, PackageCheck, Truck, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="bg-razaq-cream-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-razaq-green-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532347922424-c84d04bbd136?q=80&w=2070&auto=format&fit=crop"
          alt="Al-Razaq Store"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-razaq-green-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-2">
              About Us
            </h1>
            <p className="text-white/90 max-w-xl mx-auto">
              Quality Grocery Items for Your Daily Needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-4">
              Our Story
            </h2>
            <Separator className="bg-razaq-green-200 mb-6 w-24" />
            <p className="text-razaq-green-700 mb-4">
              Al-Razaq Traders was established with a simple mission: to provide high-quality grocery 
              items at fair prices to our community. What started as a small family shop has grown 
              into a trusted name in grocery retail.
            </p>
            <p className="text-razaq-green-700 mb-4">
              For over two decades, we have been serving our customers with the finest selection of 
              rice, lentils, flour, fertilizers, and daily essentials. We take pride in sourcing our 
              products directly from farmers and trusted suppliers to ensure the best quality.
            </p>
            <p className="text-razaq-green-700">
              Today, Al-Razaq Traders continues to uphold its commitment to quality, value, and 
              customer satisfaction as we expand our reach through our online platform.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/f9f7d793-1d11-44b1-aa06-202e4b0d5287.png" 
              alt="Al-Razaq Traders Logo" 
              className="mx-auto mb-8 max-w-[200px]" 
            />
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-razaq-green-800 mb-4">Our Promise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-razaq-green-50 p-2 rounded-full mr-3">
                    <Leaf className="h-5 w-5 text-razaq-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-razaq-green-800">Quality Assurance</h4>
                    <p className="text-sm text-razaq-green-600">We carefully select every product that goes on our shelves</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-razaq-green-50 p-2 rounded-full mr-3">
                    <PackageCheck className="h-5 w-5 text-razaq-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-razaq-green-800">Fresh Products</h4>
                    <p className="text-sm text-razaq-green-600">We ensure all our products are fresh and well-maintained</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-razaq-green-50 p-2 rounded-full mr-3">
                    <Truck className="h-5 w-5 text-razaq-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-razaq-green-800">Timely Delivery</h4>
                    <p className="text-sm text-razaq-green-600">We deliver your orders promptly to your doorstep</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-razaq-green-50 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-razaq-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-razaq-green-800">Customer First</h4>
                    <p className="text-sm text-razaq-green-600">Your satisfaction is our top priority</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-razaq-green-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-heading font-medium text-razaq-green-900 mb-4">
            Contact Us
          </h2>
          <p className="text-razaq-green-700 mb-6 max-w-xl mx-auto">
            Have questions or need assistance with your order? We're here to help!
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link to="/contact">
              <Button className="bg-razaq-green hover:bg-razaq-green-600 text-white">
                <Phone className="mr-2 h-4 w-4" /> Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
