import React from "react";
import { TechCategory, techStackData } from "../../data/techStack"; // Adjust path if needed

// We'll define a generic category item renderer here or in TechCategory.tsx
interface TechItemProps {
  item: {
    name: string;
    icon: React.ElementType;
  };
}

const TechItem: React.FC<TechItemProps> = ({ item }) => (
  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200 mr-2 mb-2">
    <item.icon className="mr-1 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
    {item.name}
  </span>
);

interface TechCategoryCardProps {
  category: TechCategory;
}

const TechCategoryCard: React.FC<TechCategoryCardProps> = ({ category }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <category.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {category.title}
      </h3>
    </div>
    <div className="flex flex-wrap">
      {category.items.map((item, index) => (
        <TechItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const TechCategories: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {techStackData.map((category, index) => (
        <TechCategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default TechCategories;
