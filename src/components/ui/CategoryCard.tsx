
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="glass-card overflow-hidden group relative h-64 block"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-razaq-green-900/70 via-razaq-green-900/30 to-transparent transition-opacity duration-300"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
        <h3 className="text-xl font-heading font-medium mb-1 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-white/90 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
        <span className="inline-flex items-center text-sm text-razaq-gold group-hover:translate-x-1 transition-transform duration-300">
          Browse Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
