import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const Banner = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black to-transparent"></div>
      <Image
        src="/IronManImage.jpg"
        alt="Figura de acción de Iron Man"
        className="absolute inset-0 w-full h-full object-cover"
        fill
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600 animate-pulse">
          Edición Limitada: Iron Man Mark LXXXV
        </h1>
        <p className="text-xl mb-8 max-w-2xl text-white">
          Lleva a casa al héroe más icónico del Universo Marvel con esta figura
          de acción de edición limitada. ¡Sé parte de la leyenda!
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 w-fit",
          })}
          href="/shop"
        >
          Explorar Colección Marvel <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
