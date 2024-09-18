import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import SecondaryBanner from "@/components/SecondaryBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Banner
          imgSrc="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
          bannerTitle="Descubre nuestra nueva colección"
          bannerDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis."
          bannerLink="/shop"
        />

        <Categories />

        <Products />

        <SecondaryBanner
          imgSrc="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
          bannerTitle="50+ Figuras de acción"
          bannerDescription="Poseemos una amplia variedad de figuras de acción que te encantarán. ¡Ven y descubre tu favorita!"
          bannerLink="/shop"
        />
      </main>
    </div>
  );
}
