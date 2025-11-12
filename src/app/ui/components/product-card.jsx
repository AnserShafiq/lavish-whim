'use client'
import Image from "next/image";
import { useState } from "react";
import ProductDetailsPopUp from './product-details-popup'
function formatPKR(num) {
  return new Intl.NumberFormat('en-PK', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(num);
}
export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasHoverImg = product.images[1] !== undefined;

  const defaultImg = `${product.images[0]}`;
  const hoverImg = `${product.images[1]}` ?? defaultImg; // fallback

  return (
    <div className="border rounded-sm shadow-sm flex flex-col overflow-hidden">
      <div
        className="relative h-[21rem] max-h-[21rem] overflow-hidden border-b border-neutral-200 w-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered && hasHoverImg ? hoverImg : defaultImg}
          alt={product.title}
          fill
          className="object-cover object-center rounded-t-sm hover:scale-[1.05] transition-all ease-in-out duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {product.onSale === 'true' && (
          <h5 className="absolute bottom-5 left-4 py-1 px-2 rounded-xl bg-neutral-700 text-white text-xs font-extrabold uppercase tracking-wide">
            Sale
          </h5>
        )}
      </div>

      <div className="flex flex-col gap-2 p-6">
            <h3 className="text-lg font-bold hover:underline cursor-pointer tracking-wide capitalize">
            {product.title}
            </h3>

            {product.onSale === 'true' ? (
            <div className="inline-flex items-end gap-3">
                  <h3 className="text-sm mb-[2px] line-through">
                  Rs. {formatPKR(product.price)} PKR
                  </h3>
                  <h3 className="text-lg font-semibold">
                  Rs. {formatPKR(product.salePrice)} PKR
                  </h3>
            </div>
            ) : (
            <h3 className="text-lg font-semibold">
                  Rs. {formatPKR(product.price)} PKR
            </h3>
            )}
            <ProductDetailsPopUp product={product}/>
      </div>
    </div>
  );
}