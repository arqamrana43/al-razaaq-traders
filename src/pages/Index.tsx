import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/ui/Hero";
import FeaturedSection from "@/components/ui/FeaturedSection";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import { categories, getNewProducts } from "@/lib/data";
import { Leaf, Package, Truck, Star, Users, ShieldCheck } from "lucide-react";
const testimonials = [{
  id: 1,
  name: "Ahmed Khan",
  role: "Regular Customer",
  content: "Al-Razaq Traders has been my go-to for daily groceries for years. Their rice quality is unmatched in the area!",
  rating: 5
}, {
  id: 2,
  name: "Fatima Aziz",
  role: "Home Chef",
  content: "As someone who cooks daily, I appreciate the quality and freshness of their lentils and flour. Great customer service too!",
  rating: 5
}, {
  id: 3,
  name: "Mohammad Ali",
  role: "Small Business Owner",
  content: "Their wholesale options have helped my small restaurant maintain consistent quality. The delivery is always on time.",
  rating: 4
}];
const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const newProducts = getNewProducts();
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
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
            {categories.map((category, index) => <div key={category.id} className="animated-element" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CategoryCard title={category.name} image={category.image} link={`/category/${category.id}`} description={category.description} />
              </div>)}
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
            <Link to="/category/new" className="text-razaq-green font-medium hover:text-razaq-green-700 transition-colors inline-flex items-center group">
              View All <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="product-grid">
            {newProducts.slice(0, 4).map((product, index) => <div key={product.id} className="animated-element" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <ProductCard product={product} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-razaq-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-3">What Our Customers Say</h2>
            <p className="text-razaq-green-600 max-w-2xl mx-auto">
              Trusted by families and businesses across the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className="glass-card p-6 animated-element" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex mb-2">
                  {Array.from({
                length: testimonial.rating
              }).map((_, i) => <Star key={i} size={16} className="fill-razaq-gold text-razaq-gold" />)}
                </div>
                <p className="text-razaq-green-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-razaq-green-200 flex items-center justify-center text-razaq-green-700 font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-razaq-green-900">{testimonial.name}</h4>
                    <p className="text-sm text-razaq-green-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>)}
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

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-3">Why Choose Al-Razaq Traders</h2>
            <p className="text-razaq-green-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality products with exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-14 w-14 rounded-full bg-razaq-green-100 flex items-center justify-center text-razaq-green mb-4">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-medium text-razaq-green-900 mb-2">Quality Assurance</h3>
              <p className="text-razaq-green-700">
                Every product goes through strict quality checks before reaching our shelves
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-14 w-14 rounded-full bg-razaq-green-100 flex items-center justify-center text-razaq-green mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-medium text-razaq-green-900 mb-2">Customer First</h3>
              <p className="text-razaq-green-700">
                Our friendly team is always ready to assist and provide personalized service
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-14 w-14 rounded-full bg-razaq-green-100 flex items-center justify-center text-razaq-green mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-medium text-razaq-green-900 mb-2">Trust & Reliability</h3>
              <p className="text-razaq-green-700">
                Built on 25+ years of trust and commitment to our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 bg-razaq-cream-100">
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
                <img alt="Al-Razaq Store" className="w-full h-full object-cover" src="/lovable-uploads/2cab3b55-5584-4cba-9013-d24740df5c58.png" />
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

      {/* Call to Action */}
      <section className="py-20 bg-razaq-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-medium mb-4">Ready to Experience Premium Quality?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Start shopping with Al-Razaq Traders today and discover why we're trusted by families across the community.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/category/featured">
              <Button className="bg-razaq-gold hover:bg-razaq-gold-600 text-white h-12 px-8">
                Shop Featured Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;