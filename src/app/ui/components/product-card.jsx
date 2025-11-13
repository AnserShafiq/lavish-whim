'use client';
import Image from 'next/image';
import { useState } from 'react';
import ProductDetailsPopUp from './product-details-popup';

function formatPKR(num) {
  return new Intl.NumberFormat('en-PK', { style: 'decimal', minimumFractionDigits: 0 }).format(num);
}

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasHoverImg = product.images[1] !== undefined;
  const defaultImg = product.images[0];
  const hoverImg = product.images[1] ?? defaultImg;

  return (
    <div className="flex flex-col border rounded-sm shadow-sm overflow-hidden h-full">
      {/* ---------- IMAGE ---------- */}
      <div
        className="relative h-[21rem] w-full cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered && hasHoverImg ? hoverImg : defaultImg}
          alt={product.title}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.onSale === 'true' && (
          <span className="absolute bottom-4 left-4 bg-neutral-700 text-white text-xs font-extrabold uppercase tracking-wide rounded-xl px-2 py-1">
            Sale
          </span>
        )}
      </div>

      {/* ---------- CONTENT (flex-grow + button at bottom) ---------- */}
      <div className="flex flex-col justify-between flex-grow p-4 gap-3">
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-bold capitalize tracking-wide hover:underline cursor-pointer">
          {product.title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-end gap-2">
            {product.onSale === 'true' ? (
              <>
                <span className="text-sm line-through text-gray-500">
                  Rs. {formatPKR(product.price)} PKR
                </span>
                <span className="text-lg font-semibold text-red-600">
                  Rs. {formatPKR(product.salePrice)} PKR
                </span>
              </>
            ) : (
              <span className="text-lg font-semibold">
                Rs. {formatPKR(product.price)} PKR
              </span>
            )}
          </div>
          <ProductDetailsPopUp product={product} />
        </div>
      </div>
    </div>
  );
}