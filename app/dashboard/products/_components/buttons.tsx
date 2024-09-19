import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteProduct } from "@/lib/actions";
import { PencilIcon, PlusCircle, TrashIcon } from "lucide-react";
import Link from "next/link";

export function CreateProducts() {
  return (
    <Link
      href="/dashboard/products/create"
      className={buttonVariants({
        variant: "default",
        size: "sm",
        className: "h-8 gap-1",
      })}
    >
      <PlusCircle className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Añadir Producto
      </span>
    </Link>
  );
}

export function EditProduct({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/products/${id}/edit`}>
      <Button variant="ghost" className="w-full">
        <PencilIcon className="w-4 mr-2" />
        Modificar
      </Button>
    </Link>
  );
}

export function DeleteProduct({ id }: { id: string }) {
  const deleteProductWithId = deleteProduct.bind(null, id);

  return (
    <form action={deleteProductWithId}>
      <Button variant="ghost" className="w-full justify-start">
        <TrashIcon className="w-4 mr-2" />
        Eliminar
      </Button>
    </form>
  );
}
