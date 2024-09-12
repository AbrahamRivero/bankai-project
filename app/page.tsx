import Banner from "@/components/Banner";
import LimitedBanner from "@/components/Banner";
import { CategoryCarousel } from "@/components/CategoryCarousel";

export default function Home() {
  return (
    <div>
      <Banner
        imgSrc="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
        imgWidth={600}
        imgHeight={400}
        bannerTitle="Descubre nuestra nueva colección"
        bannerDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis."
        bannerLink="/shop"
      />
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
