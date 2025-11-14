'use client'
import SectionHead1 from "app/ui/components/main-heading";
import ProductsTable from "app/ui/components/products-table";
import { useSearchParams } from "next/navigation";

export default function Page(){
      const searchParams  = useSearchParams()
      const category = searchParams.get('category');
      
      return (
            <div className="container py-20">
                  <SectionHead1 className={'font-semibold italic underline underline-offset-4'}>Bags Collections by Us</SectionHead1>
                  <ProductsTable category={category}/>
            </div>
      )
}