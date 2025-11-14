'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import products from '../../../../public/content/products.json';
import ProductCard from './product-card';
import { X } from 'lucide-react';

export default function ProductsTable({ category: propCategory = '' }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (propCategory) {
      setSelectedCategory(propCategory);
    } else {
      setSelectedCategory('');
    }
  }, [propCategory]);

  const displayedProducts = useMemo(() => {
    const lower = selectedCategory.toLowerCase();

    if (lower) {
      return products.filter(p => p.type.toLowerCase() === lower);
    }

    return [...products].sort((a, b) => a.type.localeCompare(b.type));
  }, [selectedCategory]);

  const clearFilter = () => {
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete('category');
    router.push(newUrl.pathname + newUrl.search, { scroll: false });
  };

  const pretty = selectedCategory.replace(/-/g, ' ');

  return (
    <div className="flex flex-col">
      {/* Filter Pill */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          {selectedCategory && (
            <h4 className="flex items-center gap-1 font-semibold text-xs p-2 bg-neutral-200 rounded-full w-fit capitalize">
              <X
                onClick={clearFilter}
                className="cursor-pointer w-4 stroke-[4px] h-auto"
              />
              {pretty}
            </h4>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product, idx) => (
          <ProductCard
            key={product.id ?? idx}
            product={product}
          />
        ))}
      </div>

      {/* Empty State */}
      {displayedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found for “{pretty}”.
        </p>
      )}
    </div>
  );
}