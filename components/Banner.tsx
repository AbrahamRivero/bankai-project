import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Banner = ({
  imgSrc,
  imgWidth = 600,
  imgHeight = 400,
  imgClassName,
  bannerTitle,
  bannerDescription,
  bannerLink,
}: {
  imgSrc: string;
  imgWidth?: number;
  imgHeight?: number;
  imgClassName?: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerLink: string;
}) => {
  return (
    <section className="container mx-auto px-4 py-12 flex items-center">
      <div className="w-1/2 hidden sm:inline-flex">
        <Image
          src={imgSrc}
          alt="Banner Image"
          width={imgWidth}
          height={imgHeight}
          className={cn("rounded-lg", imgClassName)}
        />
      </div>
      <div className="w-full sm:w-1/2 pl-0 sm:pl-12">
        <h2 className="text-4xl font-bold mb-4">Nuevo Producto</h2>
        <h1 className="text-5xl font-bold text-red-600 mb-6">{bannerTitle}</h1>
        <p className="text-gray-600 mb-8">{bannerDescription}</p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href={bannerLink}
        >
          Echa un vistazo! <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
