"use client";

import {
  Pagination as PaginationWrapper,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn, generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);
  return (
    <div className="flex flex-col items-center mt-12 gap-2">
      <PaginationWrapper>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1)}
              isDisabled={currentPage <= 1}
            />
          </PaginationItem>
          {allPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                className={cn(
                  currentPage === page
                    ? "border-2 border-shark-600 rounded-lg"
                    : ""
                )}
              >
                <PaginationLink href={createPageURL(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1)}
              isDisabled={currentPage >= totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationWrapper>
    </div>
  );
};

export default Pagination;
