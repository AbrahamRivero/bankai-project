"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BreadcrumbBanner = () => {
  const router = usePathname();
  const pathSegments = router.split("/").filter((segment) => segment);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black to-transparent"></div>
      <Image
        src="/IronManImage.jpg"
        alt="Figura de acción de Iron Man"
        className="absolute inset-0 w-full h-full object-cover"
        fill
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <Image
          src="/favicon.svg"
          alt="app logo"
          className="object-cover"
          width={35}
          height={35}
        />
        <h1 className="text-4xl font-semibold text-center my-4 text-white">
          Contáctenos
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-white hover:text-slate-400"
              >
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

              const formattedSegment = segment.replace(/-/g, " ");
              return (
                <div key={index}>
                  {isLast ? (
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize text-slate-400">
                        {formattedSegment}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  ) : (
                    <>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href={href}
                          className="text-white hover:text-slate-400"
                        >
                          {formattedSegment}
                        </BreadcrumbLink>
                      </BreadcrumbItem>

                      <BreadcrumbSeparator />
                    </>
                  )}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default BreadcrumbBanner;
