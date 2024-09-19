import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchFilteredProducts } from "@/lib/data";
import GenericTableRow from "./GenericTableRow";

const ProductsTable = async ({ query, currentPage }) => {
  const products = await fetchFilteredProducts(query, currentPage);

  return (
    <div>
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
    </div>
  );
};

export default ProductsTable;
