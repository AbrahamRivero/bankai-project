import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SecondaryBanner = ({
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
    <section className="mx-auto px-4 py-12 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        <div className="w-1/2 sm:pl-8">
          <h2 className="text-4xl font-bold mb-6">{bannerTitle}</h2>
          <p className="text-gray-600 mb-8">{bannerDescription}</p>
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5",
            })}
            href={bannerLink}
          >
            Explorar más <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="w-1/2 pl-12">
          <Image
            src={imgSrc}
            alt="Room Inspiration"
            width={imgWidth}
            height={imgHeight}
            className={cn("rounded-lg", imgClassName)}
          />
        </div>
      </div>
    </section>
  );
};

export default SecondaryBanner;
