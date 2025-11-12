'use client';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ProductDetailsPopUp({ product }) {
      const [showPop, setShowPop] = useState(false); 
      const [activeImgIndex, setActiveImgIndex] = useState(0); 
      const modalRef = useRef(null);
      useEffect(() => { 
            const handleEsc = (e) => { 
                  if (e.key === 'Escape') 
                        setShowPop(false); 
                  }; 
            if (showPop) { 
                  window.addEventListener('keydown', handleEsc); 
                  document.body.style.overflow = 'hidden'; 
            } 
            return () => { window.removeEventListener('keydown', handleEsc); document.body.style.overflow = 'unset'; }; 
      }, [showPop]);
      const handleBackdropClick = (e) => { 
            if (modalRef.current && !modalRef.current.contains(e.target)) 
                  setShowPop(false); 
      };
      const openModal = () => { 
            setShowPop(true); setActiveImgIndex(0); 
      };

      const parseDescription = (html) => ({ __html: html?.replace(/<p><br><\/p>/g, '').replace(/&nbsp;/g, ' ') || '' });

      return (
      <>
      <button onClick={openModal} className="w-full border border-black text-black font-semibold capitalize p-2 rounded-sm transition-all duration-300 hover:scale-[1.03] hover:bg-black hover:text-white">Let's Order It</button>
      {showPop && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300" onClick={handleBackdropClick}>
                  <div ref={modalRef} className="relative w-full max-w-5xl h-[41em] max-h-[41em] bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
                        <button onClick={() => setShowPop(false)} className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 backdrop-blur-sm transition hover:bg-white hover:scale-110" aria-label="Close modal">
                              <X className="h-5 w-5" />
                        </button>
                        <div className="grid grid-cols-1 h-full max-h-[41em] md:grid-cols-2">
                              <div className="flex flex-col h-full">
                                    <div className="relative h-96 lg:h-[80%] bg-gray-50">
                                          <Image src={product.images[activeImgIndex]} alt={`${product.title} - view ${activeImgIndex + 1}`} height={500} width={500} className="w-full h-full object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" priority={activeImgIndex === 0} />
                                    </div>
                                    <div className="flex gap-2 p-4 lg:h-[20%] overflow-x-auto bg-gray-50">
                                          {product.images.map((image, index) => (
                                                <button key={index} onClick={() => setActiveImgIndex(index)} className={`relative flex-none w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImgIndex === index ? 'border-black scale-105 shadow-md' : 'border-transparent hover:border-gray-400'}`}>
                                                      <Image src={image} alt={`Thumbnail ${index + 1}`} width={80} height={80} className="object-cover w-full h-full" />
                                                </button>
                                          ))}
                                    </div>
                              </div>
                              <div className="flex flex-col gap-6 p-6 md:p-8 overflow-y-scroll h-full max-h-[41em]">
                                    <div>
                                          <h1 id="product-modal-title" className="text-2xl md:text-3xl font-bold capitalize">{product.title}</h1>
                                          <div className="mt-3 flex items-end gap-3">
                                                {product.onSale === 'true' ? (<><span className="text-lg line-through text-gray-500">Rs. {formatPKR(product.price)} PKR</span><span className="text-2xl font-bold text-red-600">Rs. {formatPKR(product.salePrice)} PKR</span></>) : (<span className="text-2xl font-bold">Rs. {formatPKR(product.price)} PKR</span>)}
                                          </div>
                                    </div>
                                    <div className={`h-[70%] overflow-auto`}>
                                          {product.description && <div className=" prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={parseDescription(product.description)} />}
                                    </div>
                                    <div className="mt-6 flex flex-col gap-3">
                                          <button className="w-full bg-black text-white font-semibold py-3 rounded-md transition hover:bg-gray-800">Add to Cart</button>
                                          <button className="w-full border border-black text-black font-semibold py-3 rounded-md transition hover:bg-black hover:text-white">Buy Now</button>
                                    </div>
                                    {product.onSale === 'true' && <div className="absolute mt-4 inline-block px-4 py-1 bg-red-600 text-white text-sm font-bold uppercase rounded-full">Sale</div>}
                              </div>
                        </div>
                  </div>
            </div>
      )}
      </>
      );
}

function formatPKR(num) { return new Intl.NumberFormat('en-PK', { style: 'decimal', minimumFractionDigits: 0 }).format(num); }