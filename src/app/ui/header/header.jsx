'use client'
import Image from 'next/image'
import React from 'react'
import SearchSection from './search-section';
import CartButton from './cart-button';
import { Menu } from '@/app/lib/menu-items';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
      const router = useRouter()
      return (
            <div className={`flex flex-col relative w-full border-b shadow-sm shadow-neutral-100`}>
                  
                  <div className='flex items-center justify-center bg-black w-full'>
                        <div className='container grid items-center grid-cols-3 text-white py-1 text-xs lg:text-sm'>
                              <h3 className='capitalize text-left'>Pakistan's best online jewelry store, offering premium quality</h3>
                              <h3 className='font-bold tracking-wider font-poppins text-center'>Welcome to Lavish Whim</h3>
                              <h3 className='capitalize text-right'>🔔Minimum Order Required of Rs.499</h3>
                        </div>
                  </div>
                  <div className={`relative flex flex-col container`}>
                        <div className='grid grid-cols-3 items-center w-full'>
                              <SearchSection />
                              <Image onClick={() => router.replace('/')} src='/images/logo.png' priority className='h-[6rem] w-auto mx-auto' height={500} width={500} alt='Lavish Whim - Logo'/>
                              <CartButton />
                        </div>
                        <div className='flex items-center justify-center gap-12 w-full my-2'>
                              {
                                    Menu.map((item, index) => <Link className='capitalize tracking-wide font-bold px-1' href={item.link} key={index}>{item.title}</Link>)
                              }
                        </div>
                  </div>
            </div>
      )
}

export default Header