import Banner from "@/components/Banner";
import { CategoryCarousel } from "@/components/CategoryCarousel";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 gap-4 justify-items-center p-6">
        <h3 className="text-xl font-bold">Categorías</h3>
        <CategoryCarousel carouselStyles="md:max-w-xl" />
      </div>
      <div className="grid grid-cols-1 gap-4 justify-items-center p-6">
        <h3 className="text-2xl font-bold">Nuestros productos</h3>
        <div></div>
      </div>
    </div>
  );
}
