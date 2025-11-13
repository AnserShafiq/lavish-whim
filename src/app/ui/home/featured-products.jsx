'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/product-card';
import Link from 'next/link';

export default function FeaturedProducts() {
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('/content/products.json').then(res => res.json()).then(setProducts);
      }, [])
      return (
            <div className='container flex flex-col gap-3 py-20'>
                  <h1 className='text-3xl font-semibold italic underline underline-offset-4'>Featured Products</h1>
                  <div className='mt-4 grid grid-cols-4 gap-2 w-full border-b border-neutral-100 pb-10 mb-6'>
                        {
                              products.slice(0,8).map((product, index) => <ProductCard product={product} key={index}/>)
                        }
                  </div>
                  <Link href={'/'} className='border border-black text-lg py-2 px-5 rounded-sm w-fit mx-auto hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Explore More Products</Link>
            </div>
      )
}