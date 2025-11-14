import { ArrowRightCircle } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { PiEnvelopeDuotone, PiEnvelopeSimpleFill, PiPhoneCallDuotone } from "react-icons/pi";
import { TbMapPin } from 'react-icons/tb';

const Footer = () => {
  const products = [
    {
      title: 'Handbags',
      link: '/bags-by-lavish-whim?category=handbag'
    },{
      title: 'Canvas bags',
      link: '/bags-by-lavish-whim?category=canvas-bag'
    },{
      title: 'Crossbody bags',
      link: '/bags-by-lavish-whim?category=crossbody-bag'
    },{
      title: 'Tote bags',
      link: '/bags-by-lavish-whim?category=tote-bag'
    },{
      title: 'Shoulder bags',
      link: '/bags-by-lavish-whim?category=shoulder-bag'
    },
  ]
  const quickLinks = [
    {
      title: 'About us',
      link: '/about-lavish-whim'
    },{
      title: 'Contact us',
      link: '/contact-lavish-whim'
    },{
      title: 'Term & condition',
      link: '/'
    },{
      title: 'Shipping policy',
      link: '/'
    },{
      title: 'Refund policy',
      link: '/'
    },{
      title: 'Privacy policy',
      link: '/'
    },
  ]
  return (
    <div className='border-t border-neutral-200 pt-10 mt-20' >
      <div className='container flex flex-col'>
        <div className='grid grid-cols-[35%_20%_20%_20%] gap-8 w-full pb-10'>
          <div className='flex flex-col p-4 gap-5'>
            <div className='flex flex-col'>
              <h3 className='text-lg capitalize font-bold tracking-wide leading-tight '>Let's get in touch</h3>
              <div className='w-10 border rounded-full border-red-600'/>
            </div>  
            <h4 className='text-md tracking-wide'>{`Discover Timeless Elegance in Handcrafted Jewellery & Luxury Bags – Exclusively Designed for the Modern Woman. Yours Forever.`}</h4>
            <form>
              <div className='relative flex items-center gap-2 py-2 px-4 border rounded-xl border-neutral-400'>
                <PiEnvelopeSimpleFill className='h-6 w-auto'/>
                <input type='email' name='customerEmail' className='w-[80%] px-1' placeholder='To receive promotions...' id='customerEmail' required/>
                <button className='absolute right-2 hover:bg-black hover:text-white rounded-full'>
                  <ArrowRightCircle />
                </button>
              </div>
            </form>
          </div>  
          <div className='flex flex-col p-4 gap-5'>
            <div className='flex flex-col'>
              <h3 className='text-lg capitalize font-bold tracking-wide leading-tight '>Best selling</h3>
              <div className='w-10 border rounded-full border-red-600'/>
            </div>  
            <div className='flex flex-col gap-4'>
              {
                products.map((item,index) => <Link key={index} className='text-sm font-normal uppercase tracking-wide tranistion-all ease-in-out duration-400 hover:font-bold hover:translate-x-1 hover:scale-[1.05] hover:underline decoration-2 decoration-red-700 underline-offset-4' href={item.link}>{item.title}</Link>)
              }
            </div>
          </div>  
          <div className='flex flex-col p-4 gap-5'>
            <div className='flex flex-col'>
              <h3 className='text-lg capitalize font-bold tracking-wide leading-tight '>Quick links</h3>
              <div className='w-10 border rounded-full border-red-600'/>
            </div>
            <div className='flex flex-col gap-4'>
              {
                quickLinks.map((item,index) => <Link key={index} className='text-sm font-normal uppercase tracking-wide tranistion-all ease-in-out duration-400 hover:font-bold hover:translate-x-1 hover:scale-[1.05] hover:underline decoration-2 decoration-red-700 underline-offset-4' href={item.link}>{item.title}</Link>)
              }
            </div>  
          </div>  
          <div className='flex flex-col p-4 gap-5'>
            <div className='flex flex-col'>
              <h3 className='text-lg capitalize font-bold tracking-wide leading-tight '>Customer Support</h3>
              <div className='w-10 border rounded-full border-red-600'/>
            </div>  
            <div className='flex flex-col gap-4'>
              <div className='grid grid-cols-[15%_85%] gap-3 hover:scale-[1.03]'>
                <PiPhoneCallDuotone className='p-1 border-[3px] rounded-full bg-black text-white border-neutral-400 w-full h-full border hover:scale-[1.04] cursor-pointer'/>
                <div className='flex flex-col'>
                  <h5 className='text-xs font-extrabold uppercase text-red-700'>Call us at</h5>
                  <h4 className='text-sm hover:underline cursor-pointer'>(+92) 327 4952566</h4>
                </div>
              </div>
              <div className='grid grid-cols-[15%_85%] gap-3 hover:scale-[1.03]'>
                <PiEnvelopeDuotone className='p-1 border-[3px] rounded-full bg-black text-white border-neutral-400 w-full h-full border hover:scale-[1.04] cursor-pointer'/>
                <div className='flex flex-col'>
                  <h5 className='text-xs font-extrabold uppercase text-red-700'>E-Mail us at</h5>
                  <h4 className='text-sm hover:underline cursor-pointer'>lavishwhim@gmail.com</h4>
                </div>
              </div>
              <div className='grid grid-cols-[15%_85%] gap-3 hover:scale-[1.03]'>
                <TbMapPin className='p-1 border-[3px] rounded-full bg-black text-white border-neutral-400 w-full h-full border hover:scale-[1.04] cursor-pointer'/>
                <div className='flex flex-col'>
                  <h5 className='text-xs font-extrabold uppercase text-red-700'>Located at</h5>
                  <h4 className='text-sm hover:underline cursor-pointer'>Lahore, Punjab, PK - 54000</h4>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-2'>
              <h4 className='font-bold italic tracking-wide underline underline-offset-4 capitalize'>Follow us at</h4>
              <div className='flex gap-4'>
                <FaFacebook className='h-9 w-9 text-white rounded-full bg-black p-2 hover:bg-red-700 cursor-pointer transition-all ease-in-out duration-400 cursor-pointer hover:scale-[1.05]' />
                <FaInstagram className='h-9 w-9 text-white rounded-full bg-black p-2 hover:bg-red-700 cursor-pointer transition-all ease-in-out duration-400 cursor-pointer hover:scale-[1.05]' />
                <FaTiktok className='h-9 w-9 text-white rounded-full bg-black p-2 hover:bg-red-700 cursor-pointer transition-all ease-in-out duration-400 cursor-pointer hover:scale-[1.05]' />
              </div>
            </div>
          </div>  
        </div>
        <div className='flex border-t border-neutral-500 justify-between items-center py-2'>
          <h5 className='text-sm'>© 2025 Lavish Whim. All rights reserved. - Developed by <a href='https://off-desks.com' target='_black' rel='noopener noreferrer' className='font-bold hover:underline cursor-pointer'>Off Desks</a></h5>
        </div>
      </div>
    </div>
  )
}

export default Footer