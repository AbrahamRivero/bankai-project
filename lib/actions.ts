"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { products } from "@prisma/client";
import { FormSchema } from "@/app/dashboard/products/_components/create-form";
import { z } from "zod";

export const createProduct = async (values: z.infer<typeof FormSchema>) => {
  console.log("🚀 ~ createProduct ~ values:", values)
  try {
    /* await db.products.create({
      data: {
        name: name,
        description: description,
        price: price,
        stock: stock,
        sizes: sizes,
        category_id: category,
        status: status,
        product_images: product_images,
      },
    }); */
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Product.",
    };
  }
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export async function deleteProduct(id: string) {
  try {
    await db.products.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/products");
    return { message: "Deleted Product." };
  } catch (error) {
    throw new Error("Database Error: Failed to Delete Product.");
  }
}

export async function deleteOrder(id: string) {
  try {
    await db.orders.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/orders");
    return { message: "Deleted Order." };
  } catch (error) {
    throw new Error("Database Error: Failed to Delete Order.");
  }
}
