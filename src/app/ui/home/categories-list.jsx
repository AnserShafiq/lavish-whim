import { bagsTypes } from "app/lib/product-categories";
import SectionHead1 from "../components/main-heading";
import Image from "next/image";

export default async function CategoriesList(){
      return(
            <div className="container flex flex-col items-center justify-center">
                  <SectionHead1 className='font-extrabold uppercase tracking-wide underline underline-offset-3 decoration-3'>Types Of Bag We Provides</SectionHead1>                  
                  <div className="w-full grid grid-cols-3 gap-10">
                        {
                              bagsTypes.map((bag,index)=> <div className="flex flex-col items-center gap-3 border pb-3" key={index}>
                                    <Image className="w-full h-[22rem] object-center border-b object-cover" src={`${bag.image}`} width={500} height={500} alt="Image" />
                                    <h3 className="text-md lg:text-lg 2xl:text-xl uppercase tracking-wide">{bag.title.replace('-',' ')}</h3>
                              </div>)
                        }
                  </div>
            </div>
      )
}