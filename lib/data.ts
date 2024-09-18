import { db } from "@/db";
import { unstable_noStore as noStore } from "next/cache";
import { formatCurrency } from "./utils";

export const fetchProducts = async () => {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    const data = await db.products.findMany({
      include: { product_images: true, product_reviews: true },
    });

    const products = data.map((product) => ({
      ...product,
      price: formatCurrency(product.price),
    }));

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
};

export const fetchOrders = async () => {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    const data = await db.orders.findMany({
      include: { order_items: true, payments: true },
    });

    const orders = data.map((order) => ({
      ...order,
      total_amount: formatCurrency(order.total_amount),
    }));

    return orders;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch orders data.");
  }
};

const ITEMS_PER_PAGE = 8;

export const fetchFilteredOrders = async (
  query: string,
  currentPage: number
) => {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  try {
    const orders = await db.orders.findMany({
      where: {
        OR: [
          { users: { name: { contains: query } } },
          { users: { email: { contains: query } } },
          { status: { equals: query } },
          { order_type: { equals: query } },
          { created_at: { gte: oneWeekAgo } },
          { created_at: { gte: oneMonthAgo } },
          { created_at: { gte: oneYearAgo } },
        ],
      },
      orderBy: { created_at: { sort: "asc", nulls: "last" } },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });

    return orders;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch orders.");
  }
};

export const fetchFilteredProducts = async (
  query: string,
  currentPage: number
) => {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  try {
    const products = await db.products.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { status: { equals: query } },
          { categories: { name: { equals: query } } },
          { created_at: { gte: oneWeekAgo } },
          { created_at: { gte: oneMonthAgo } },
          { created_at: { gte: oneYearAgo } },
        ],
      },
      orderBy: { created_at: { sort: "asc", nulls: "last" } },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
};
