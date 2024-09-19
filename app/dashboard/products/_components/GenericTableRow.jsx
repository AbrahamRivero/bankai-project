import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { formatDateToLocal } from "@/lib/utils";
import { DeleteProduct, EditProduct } from "./buttons";
import Image from "next/image";

const GenericTableRow = async ({
  id,
  image,
  name,
  status,
  price,
  stock,
  created_at,
}) => {
  const setProductStatus = (status) => {
    return status === "draft"
      ? "Borrador"
      : status === "archived"
      ? "Archivado"
      : "Activo";
  };
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt={name}
          className="aspect-square rounded-md object-cover"
          height="64"
          src={image}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant="outline">{setProductStatus(status)}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`USD ${price}`}</TableCell>
      <TableCell className="hidden md:table-cell">{stock}</TableCell>
      <TableCell className="hidden md:table-cell">
        {formatDateToLocal(created_at)}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Desplegar menú</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <EditProduct id={id} />
            <DeleteProduct id={id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default GenericTableRow;
