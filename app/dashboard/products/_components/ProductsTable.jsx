import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchFilteredProducts } from "@/lib/data";
import GenericTableRow from "./GenericTableRow";
import { SearchX } from "lucide-react";
import Pagination from "@/components/Pagination";

const ProductsTable = async ({ query, currentPage, totalPages }) => {
  const products = await fetchFilteredProducts(query, currentPage);

  return (
    <Card>
      {products.length ? (
        <>
          <CardHeader>
            <CardTitle>Productos</CardTitle>
            <CardDescription>
              Administra tus productos y visualiza el rendimiento de ventas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell text-justify">
                    <span className="sr-only">Imagen</span>
                  </TableHead>
                  <TableHead className="text-justify">Nombre</TableHead>
                  <TableHead className="text-justify">Status</TableHead>
                  <TableHead className="hidden md:table-cell text-justify">
                    Precio
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-justify">
                    Stock
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-justify">
                    Creado
                  </TableHead>
                  <TableHead className="text-justify">
                    <span className="sr-only">Acciones</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <GenericTableRow
                    key={product.id}
                    id={product.id}
                    image={product.product_images.at(0).image_url}
                    name={product.name}
                    status={product.status}
                    price={product.price}
                    stock={product.stock}
                    created_at={product.created_at}
                  />
                ))}
              </TableBody>
            </Table>
            <Pagination className="mt-5 w-full justify-center" totalPages={totalPages} />
          </CardContent>
        </>
      ) : (
        <div className="flex flex-col items-center p-24">
          <SearchX className="w-12 h-12" />
          <p className="text-base">No hay productos para mostrar.</p>
        </div>
      )}
    </Card>
  );
};

export default ProductsTable;
