import AddProduct from "./ui/home/add-product";
import FeaturedProducts from "./ui/home/featured-products";
import SlideShow from "./ui/home/slide-show";
import BlackVideo from "./ui/home/black-video";
import CategoriesList from './ui/home/categories-list'
export default function HomePage() {
  return (
    <>
      <SlideShow />
      <FeaturedProducts />
      <BlackVideo />
      <CategoriesList />
      <AddProduct />
    </>
  );
}