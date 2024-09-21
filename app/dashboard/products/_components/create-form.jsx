"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { createProduct } from "@/lib/actions";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

export const FormSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Este campo es requerido." }).min(2).max(50),
  slug: z.string({ required_error: "Este campo es requerido." }),
  description: z
    .string({ required_error: "Este campo es requerido." })
    .min(2)
    .max(500),
  price: z.coerce
    .number()
    .gt(0, { message: "Introduzca un precio superior a USD 0." }),
  stock: z.coerce
    .number()
    .gt(0, { message: "Introduzca un cantidad superior a 0 unidades." }),
  sizes: z.array(z.string()).optional(),
  category: z.string({ required_error: "Este campo es requerido." }),
  subcategory: z.string().optional(),
  status: z.enum(["active", "draft", "archived"], {
    invalid_type_error: "Seleccione el status del producto.",
  }),
  product_images: z.any().optional(),
  discount_percentage: z.coerce.number().optional(),
});

export default function CreateProductForm({ categories }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createProduct, initialState);
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sizes: [],
      category_id: "",
      status: "",
      product_images: [],
      discount_percentage: 0,
    },
  });

  useEffect(() => {
    const subcategories = categories
      .filter((element) => element.name.toLowerCase() === selectedCategory)
      .map((element) => element.other_categories)
      .flat();
    setFilteredSubcategories(subcategories);
  }, [categories, selectedCategory]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(createProduct)}>
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Descartar
              </Button>
              <Button type="submit" size="sm">
                Guardar Producto
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Detalles del Producto</CardTitle>
                  <CardDescription>
                    Introduzca los datos correspondientes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                              <Input
                                className="w-full"
                                placeholder="Nombre del Producto..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                              <Input
                                className="w-full"
                                placeholder="Slug del Producto..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Precio</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  className="w-full"
                                  defaultValue={0}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="stock"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Stock</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  className="w-full"
                                  defaultValue={0}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="discount_percentage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Descuento</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  className="w-full"
                                  defaultValue={0}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="sizes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tallas (opcional)</FormLabel>
                              <FormControl>
                                <ToggleGroup
                                  type="multiple"
                                  defaultValue="s"
                                  variant="outline"
                                  className="justify-start"
                                  {...field}
                                >
                                  <ToggleGroupItem
                                    value="s"
                                    className="w-8 h-8 text-sm"
                                  >
                                    S
                                  </ToggleGroupItem>
                                  <ToggleGroupItem
                                    value="m"
                                    className="w-8 h-8 text-sm"
                                  >
                                    M
                                  </ToggleGroupItem>
                                  <ToggleGroupItem
                                    value="l"
                                    className="w-8 h-8 text-sm"
                                  >
                                    L
                                  </ToggleGroupItem>
                                  <ToggleGroupItem
                                    value="xl"
                                    className="w-8 h-8 text-sm"
                                  >
                                    XL
                                  </ToggleGroupItem>
                                </ToggleGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Categoría del Producto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Categoría</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={setSelectedCategory}
                                {...field}
                              >
                                <SelectTrigger
                                  id="category"
                                  aria-label="Selecciona categoría"
                                >
                                  <SelectValue placeholder="Selecciona categoría" />
                                </SelectTrigger>
                                <SelectContent>
                                  {categories.map((element) => (
                                    <SelectItem
                                      key={element.id}
                                      value={element.name.toLowerCase()}
                                    >
                                      {element.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {filteredSubcategories.length > 0 && (
                      <div className="grid gap-3">
                        <FormField
                          control={form.control}
                          name="subcategory"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subcategoría (opcional)</FormLabel>
                              <FormControl>
                                <Select name="subcategory">
                                  <SelectTrigger
                                    id="subcategory"
                                    aria-label="Selecciona subcategoría"
                                  >
                                    <SelectValue placeholder="Selecciona subcategoría" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {filteredSubcategories.map((element) => (
                                      <SelectItem
                                        key={element.id}
                                        value={element.name.toLowerCase()}
                                      >
                                        {element.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Status del Producto </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="status">Status</Label>
                      <Select name="status">
                        <SelectTrigger
                          id="status"
                          aria-label="Seleccione status"
                        >
                          <SelectValue placeholder="Seleccione status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Borrador</SelectItem>
                          <SelectItem value="active">Activo</SelectItem>
                          <SelectItem value="archived">Archivado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Imágenes del Producto</CardTitle>
                  <CardDescription>
                    Introduzca las Imágenes del producto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="300"
                      width="300"
                      src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <button>
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          width="84"
                          src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                        />
                      </button>
                      <button>
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          width="84"
                          src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                        />
                      </button>
                      <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                        <Upload className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Subir</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Descartar
            </Button>
            <Button type="submit" size="sm">
              Guardar Producto
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
