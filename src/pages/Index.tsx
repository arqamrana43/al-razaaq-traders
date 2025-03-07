
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/ui/Hero";
import FeaturedSection from "@/components/ui/FeaturedSection";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import { categories, getNewProducts } from "@/lib/data";
import { Leaf, Package, Truck } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const newProducts = getNewProducts();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Hero />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-3">Our Product Categories</h2>
            <p className="text-razaq-green-600 max-w-2xl mx-auto">
              Explore our wide range of high-quality products carefully sourced for your daily needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={category.id} className={`animated-element delay-${index}`}>
                <CategoryCard
                  title={category.name}
                  image={category.image}
                  link={`/category/${category.id}`}
                  description={category.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedSection />

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-2">New Arrivals</h2>
              <p className="text-razaq-green-600">Check out our latest products</p>
            </div>
            <Link to="/category/new" className="text-razaq-green font-medium hover:text-razaq-green-700 transition-colors">
              View All <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="product-grid">
            {newProducts.slice(0, 4).map((product, index) => (
              <div key={product.id} className="animated-element">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-razaq-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 glass-card">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-razaq-green-100 text-razaq-green mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-medium text-razaq-green-900 mb-2">Fresh Quality</h3>
              <p className="text-razaq-green-700">
                We ensure all our products are fresh and of the highest quality
              </p>
            </div>
            
            <div className="text-center p-6 glass-card">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-razaq-green-100 text-razaq-green mb-4">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-medium text-razaq-green-900 mb-2">Secure Packaging</h3>
              <p className="text-razaq-green-700">
                Products are carefully packaged to maintain freshness and prevent damage
              </p>
            </div>
            
            <div className="text-center p-6 glass-card">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-razaq-green-100 text-razaq-green mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-medium text-razaq-green-900 mb-2">Fast Delivery</h3>
              <p className="text-razaq-green-700">
                We offer quick delivery services to ensure you get your essentials on time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-razaq-green-100 text-razaq-green text-sm font-medium">
                <Leaf size={16} className="mr-2" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-4">
                Al-Razaq Traders: Your Trusted Grocery Partner
              </h2>
              <p className="text-razaq-green-700 mb-6">
                For over 25 years, Al-Razaq Traders has been serving the community with the highest quality grocery items. Our journey began with a simple mission: to provide essential food items that meet the everyday needs of Pakistani households.
              </p>
              <p className="text-razaq-green-700 mb-6">
                Today, we continue this tradition by carefully sourcing the finest products, from premium basmati rice and nutritious lentils to organic fertilizers and daily essentials. We take pride in supporting local farmers and offering products that represent the rich agricultural heritage of Pakistan.
              </p>
              <Link to="/about">
                <Button className="bg-razaq-green hover:bg-razaq-green-600 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573555657105-77ec4456eeb7?q=80&w=1974&auto=format&fit=crop"
                  alt="Al-Razaq Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-razaq-green-900 font-medium">
                  "We believe quality food is essential for a healthy life"
                </p>
                <Separator className="my-2" />
                <p className="text-razaq-green-600 text-sm">
                  Abdul Razaq, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
