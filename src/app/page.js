import AddProduct from "./ui/home/add-product";
import SlideShow from "./ui/home/slide-show";
import FeaturedProducts from '@/app/ui/home/featured-products'
export default function HomePage() {
  return (
    <>
      <SlideShow />
      <FeaturedProducts />
      <AddProduct />
    </>
  );
}