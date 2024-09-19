import { File } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { fetchProductsPages } from "@/lib/data";
import { CreateProducts } from "./_components/buttons";
import ProductsTable from "./_components/ProductsTable";
import TableFilters from "./_components/TableFilters";
import Pagination from "@/components/Pagination";

const Page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProductsPages(query);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col my-8">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
          <div className="ml-auto flex items-center gap-2">
            <TableFilters />
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Exportar
              </span>
            </Button>
            <CreateProducts />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Productos</CardTitle>
              <CardDescription>
                Administra tus productos y visualiza el rendimiento de ventas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProductsTable query={query} currentPage={currentPage} />
            </CardContent>
          </Card>
        </main>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
