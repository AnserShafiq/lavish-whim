'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ProductCard from '@/app/ui/components/product-card'
export default function FeaturedProducts() {
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('/content/products.json').then(res => res.json()).then(setProducts);
      }, [])
      return (
            <div className='container flex flex-col gap-3 py-14'>
                  <h1 className='text-3xl font-semibold italic underline underline-offset-4'>Featured Products</h1>
                  <div className='mt-4 grid grid-cols-4 gap-2 w-full'>
                        {
                              products.map((product, index) => <ProductCard product={product} key={index}/>)
                        }
                  </div>
            </div>
      )
}