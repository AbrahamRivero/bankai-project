"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";

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
