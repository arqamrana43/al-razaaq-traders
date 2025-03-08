
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductsByCategory, getCategoryById, CategoryType } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { toast } = useToast();
  
  const category = categoryId ? getCategoryById(categoryId) : null;
  const products = categoryId ? getProductsByCategory(categoryId as CategoryType) : [];

  useEffect(() => {
    if (!category && categoryId) {
      toast({
        title: "Category not found",
        description: `The category "${categoryId}" does not exist.`,
        variant: "destructive",
      });
    }
  }, [category, categoryId, toast]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading font-medium text-razaq-green-900 mb-4">
          Category Not Found
        </h1>
        <p className="text-razaq-green-600 mb-8">
          The category you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-razaq-cream-50">
      <div className="relative h-64 bg-razaq-green-900 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-razaq-green-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-2">
              {category.name}
              {category.nameUrdu && (
                <span className="block text-xl mt-1 font-normal opacity-90">
                  {category.nameUrdu}
                </span>
              )}
            </h1>
            {category.description && (
              <p className="text-white/90 max-w-xl mx-auto">
                {category.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-xl font-medium text-razaq-green-800 mb-3">
            All {category.name} Products
          </h2>
          <Separator className="bg-razaq-green-200" />
        </div>

        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-razaq-green-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
