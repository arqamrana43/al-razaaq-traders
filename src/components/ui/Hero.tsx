
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Quality Grocery Items",
    subtitle: "For Your Daily Needs",
    description:
      "Find premium quality rice, lentils, flour, and more everyday essentials.",
    image: "/lovable-uploads/e3ff483d-21b7-4180-ac53-90967d609c8d.png",
    fallbackImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070&auto=format&fit=crop",
    cta: "Shop Now",
    link: "/category/essentials",
  },
  {
    id: 2,
    title: "Premium Rice Varieties",
    subtitle: "From Farms to Your Table",
    description:
      "Discover our selection of finest basmati, brown, and specialty rice.",
    image: "/lovable-uploads/e3ff483d-21b7-4180-ac53-90967d609c8d.png",
    fallbackImage: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Rice",
    link: "/category/rice",
  },
  {
    id: 3,
    title: "Organic Fertilizers",
    subtitle: "For Healthier Plants",
    description:
      "Premium quality fertilizers to enhance your garden and farm yields.",
    image: "/lovable-uploads/e3ff483d-21b7-4180-ac53-90967d609c8d.png",
    fallbackImage: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop",
    cta: "View Fertilizers",
    link: "/category/fertilizers",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageError = (slideIndex: number) => {
    setImageErrors(prev => ({
      ...prev,
      [slideIndex]: true
    }));
  };

  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-razaq-green-900">
      {/* Logo overlay */}
      <div className="absolute top-4 left-4 z-30 bg-white/90 p-3 rounded-lg shadow-md">
        <img 
          src="/lovable-uploads/f9f7d793-1d11-44b1-aa06-202e4b0d5287.png" 
          alt="Al-Razaq Traders" 
          className="h-12 w-auto" 
        />
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={imageErrors[index] ? slide.fallbackImage : slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center"
            onError={() => handleImageError(index)}
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-xl animate-fade-in">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-razaq-gold/90 text-white text-sm font-medium">
                  <Leaf size={16} className="mr-2" />
                  <span>{slide.subtitle}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-lg">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <Link to={slide.link}>
                    <Button className="bg-razaq-green hover:bg-razaq-green-600 text-white h-12 px-8">
                      {slide.cta}
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index
                ? "w-8 bg-razaq-gold"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
