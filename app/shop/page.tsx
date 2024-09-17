import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { exampleProducts } from "@/lib/constants";

import NavigationBreadcrumb from "@/components/common/NavigationBreadcrumb";
import Pagination from "@/components/Pagination";
import Product from "@/components/shop/Product";
import FilterAccordion from "@/components/shop/FilterAccordion";
import { db } from "@/db";

export default async function Shop() {
  /*   const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("Novedades");
  const [fetchedProducts, setFetchedProducts] = useState<products[]>(); */

  const products = await db.products.findMany({
    include: { product_images: true },
  });

  console.log("🚀 ~ Shop ~ products:", products);

  const orderProductsByCriteria = (criteria: string) => {
    /* if (criteria === "Precio: Ascendente") {
      const orderedProducts = fetchedProducts.sort((a, b) => {
        if (a.price < b.price) return -1;
      });

      setFetchedProducts(orderedProducts);
    }
    if (criteria === "Precio: Descendente") {
      const orderedProducts = fetchedProducts.sort((a, b) => {
        if (a.price > b.price) return -1;
      });

      setFetchedProducts(orderedProducts);
    }
    if (criteria === "Novedades") {
      const orderedProducts = fetchedProducts.sort((a, b) => {
        if (a.price > b.price) return -1;
      });

      setFetchedProducts(orderedProducts);
    } */
  };

  return (
    <div className="min-h-screen bg-white px-5">
      <NavigationBreadcrumb />
      <div className="flex pt-5">
        <aside className="flex-2 h-[394px] w-2/12 sticky top-0 hidden lg:block">
          <FilterAccordion />
        </aside>
        <main className="w-full lg:w-10/12 lg:pl-4">
          <div className="flex justify-between items-center mb-8 gap-2 pl-[10px]">
            <div className="flex items-center space-x-4 sm:hidden">
              <Button className="flex items-center space-x-2 px-4 py-2 border rounded">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline-flex">Filtro</span>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="Recomendados">
                <SelectTrigger className="w-full sm:w-fit bg-white shadow-md">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recomendados">Descuentos</SelectItem>
                  <SelectItem value="Novedades">Novedades</SelectItem>
                  <SelectItem value="Precio: Ascendente">
                    Precio: Ascendente
                  </SelectItem>
                  <SelectItem value="Precio: Descendente">
                    Precio: Descendente
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-shop gap-4">
            {exampleProducts.map((product) => (
              <Product
                key={product.id}
                image={product.image}
                name={product.name}
                discount={product.discount_percentage}
                novel={product.new}
                price={product.price}
                type={product.type}
              />
            ))}
          </div>

          <Pagination />
        </main>
      </div>
    </div>
  );
}
