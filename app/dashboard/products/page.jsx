import { File, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import { fetchProductsPages } from "@/lib/data";
import { CreateProducts } from "./_components/buttons";
import ProductsTable from "./_components/ProductsTable";
import TableFilters from "./_components/TableFilters";
import Pagination from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import SearchInput from "./_components/SearchInput";
import NavigationBreadcrumb from "@/components/common/NavigationBreadcrumb";

const Page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProductsPages(query);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col my-8">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
          <NavigationBreadcrumb />
          <div className="ml-auto mt-2 flex items-center gap-2">
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <SearchInput />
            </div>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Exportar
              </span>
            </Button>
            <CreateProducts />
          </div>

          <ProductsTable
            query={query}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </main>
      </div>
    </div>
  );
};

export default Page;
