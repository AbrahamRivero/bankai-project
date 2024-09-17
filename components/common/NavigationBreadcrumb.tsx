"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";

const NavigationBreadcrumb = () => {
  const router = usePathname();
  const pathSegments = router.split("/").filter((segment) => segment);

  return (
    <Breadcrumb className="mx-auto w-full">
      <BreadcrumbList className="py-4 pr-4">
        <BreadcrumbItem>
          <Link href="/" className="text-shark hover:text-slate-400 text-base">
            Inicio
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-shark" />
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          const formattedSegment = segment.replace(/-/g, " ");

          const translatedSegment =
            formattedSegment === "contact us"
              ? "Contáctenos"
              : formattedSegment === "events"
              ? "Eventos"
              : formattedSegment === "about us"
              ? "Sobre Nosotros"
              : formattedSegment === "shop"
              ? "Tienda"
              : formattedSegment.replace("-", " ");
          return (
            <Fragment key={index}>
              {isLast ? (
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize text-slate-400 text-base">
                    {translatedSegment}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <Fragment>
                  <BreadcrumbItem>
                    <Link
                      href={href}
                      className="text-shark hover:text-slate-400 text-base"
                    >
                      {translatedSegment}
                    </Link>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />
                </Fragment>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavigationBreadcrumb;
