import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function CategoryCarousel({
  carouselStyles,
  contentStyles,
}: {
  carouselStyles?: string;
  contentStyles?: string;
}) {
  return (
    <Carousel className={cn("w-full max-w-sm", carouselStyles)}>
      <CarouselContent className={cn("-ml-1", contentStyles)}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 select-none"
          >
            <Link href="/shop">
              <div className="p-1">
                <Card className="w-full text-center">
                  <CardContent className="relative flex aspect-square items-center justify-center p-6">
                    <Image
                      src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                      alt="categoryItem"
                      fill
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />

                    <p className="absolute bottom-0 text-sm text-slate-100 backdrop-brightness-50 w-full py-2 rounded-b-lg">
                      Category Name
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  );
}
