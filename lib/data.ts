import { db } from "@/db";
import { unstable_noStore as noStore } from "next/cache";
import { formatCurrency } from "./utils";
import { categories } from "@prisma/client";

export const fetchProducts = async () => {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    const data = await db.products.findMany({
      include: {
        product_images: true,
        product_reviews: true,
        categories: true,
      },
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

export const fetchCategories = async () => {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    const categories = await db.categories.findMany({
      include: {
        other_categories: true,
      },
    });

    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
};

const ITEMS_PER_PAGE = 8;
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

const oneMonthAgo = new Date();
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

export const fetchFilteredOrders = async (
  query: string,
  currentPage: number
) => {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

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

/* OR: [
  { name: { contains: query } },
  { status: { equals: query } },
  { status: { equals: 'active' } },
  { categories: { name: { equals: query } } },
  { created_at: { gte: oneWeekAgo } },
  { created_at: { gte: oneMonthAgo } },
  { created_at: { gte: oneYearAgo } },
], */

export const fetchFilteredProducts = async (
  query: string,
  currentPage: number
) => {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await db.products.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { status: { contains: query, mode: "insensitive" } },
          { categories: { name: { contains: query, mode: "insensitive" } } },
        ],
      },
      include: {
        product_images: true,
        product_reviews: true,
        categories: true,
      },
      orderBy: { created_at: { sort: "asc", nulls: "last" } },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
};

export const fetchProductsPages = async (query: string) => {
  noStore();

  try {
    const count = await db.products.count({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { status: { contains: query, mode: "insensitive" } },
          { categories: { name: { contains: query, mode: "insensitive" } } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of products.");
  }
};
