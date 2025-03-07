
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/lib/data";

const FeaturedSection = () => {
  const featuredProducts = getFeaturedProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentProducts = featuredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <section className="py-16 bg-razaq-cream-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-heading font-medium text-razaq-green-900 mb-2">Featured Products</h2>
            <p className="text-razaq-green-600">Discover our selection of premium quality products</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevPage}
              className="border-razaq-green-200 text-razaq-green hover:bg-razaq-green-50 hover:text-razaq-green-700"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextPage}
              className="border-razaq-green-200 text-razaq-green hover:bg-razaq-green-50 hover:text-razaq-green-700"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div key={product.id} className="animated-element">
              <ProductCard product={product} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
