import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 px-6 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Únete a la familia de Bankai Project!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Dale un toque <span className="text-blue-600">diferente</span> a tu
          vida con nuestros productos.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 text-lg sm:text-base">
          Somos más que una tienda; somos un santuario para los amantes del
          coleccionismo y la cultura friki. Nos{" "}
          <span className="font-semibold">especializamos</span> en ofrecer una
          amplia gama de figuras de anime, manga, películas, series y
          videojuegos de importación. Nuestro{" "}
          <span className="font-semibold">objetivo</span> es proporcionar a
          nuestros clientes artículos únicos y exclusivos.
        </p>

        <p className="mt-5 max-w-prose text-zinc-700 text-lg sm:text-base">
          Además de figuras de colección, contamos con una extensa variedad de
          merchandising y regalos, perfectos para cualquier fanático. Desde
          camisetas y tazas hasta pósters y accesorios, tenemos todo lo que
          necesitas para mostrar tu pasión por tus personajes y franquicias
          favoritas.
        </p>

        <p className="mt-5 max-w-prose text-zinc-700 text-lg sm:text-base">
          Nos enorgullece ser un lugar donde los coleccionistas pueden descubrir
          tesoros y compartir su amor por el coleccionismo. En
          <span className="font-semibold"> Bankai Project</span>, creemos en la
          importancia de la comunidad y nos esforzamos por crear un espacio
          acogedor y amigable para todos nuestros clientes. ¡Ven y descubre por
          qué somos el destino favorito de los frikis y coleccionistas!
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/shop"
        >
          Echa un vistazo! <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}
