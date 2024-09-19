"use client";

import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TableFilters = () => {
  const [defaultValue, setDefaultValue] = useState("active");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const currentValue = params.get("query");
    if (!currentValue) setDefaultValue("active");
    setDefaultValue(currentValue);
  }, [searchParams]);

  const onDropdownChange = (term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
      setDefaultValue(term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Filtros
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={defaultValue}
          onValueChange={onDropdownChange}
        >
          <DropdownMenuRadioItem value="active">Activo</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="archived">
            Archivado
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="draft">Borrador</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableFilters;
