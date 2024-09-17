import Image from "next/image";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Products = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nuestros Productos
      </h2>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-6">
        {[...Array(8)].map((_, index) => (
          <Link key={index} href="/shop/productId">
            <ProductCard key={index} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
            variant: "outline",
          })}
          href="/shop"
        >
          Mostrar más
        </Link>
      </div>
    </section>
  );
};

export default Products;
