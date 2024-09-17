"use client";
import Image from "next/image";
import { Facebook, Linkedin, Minus, Plus, Twitter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import NavigationBreadcrumb from "@/components/common/NavigationBreadcrumb";
import ProductTabs from "@/components/shop/ProductTabs";
import Product from "@/components/shop/Product";
import { Input } from "@/components/ui/input";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("XL");
  const [selectedColor, setSelectedColor] = useState("purple");

  return (
    <div className="min-h-screen px-5">
      <NavigationBreadcrumb />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex gap-4">
              <div className="w-1/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                    alt={`Thumbnail ${i}`}
                    width={80}
                    height={80}
                    className="mb-4 cursor-pointer"
                  />
                ))}
              </div>
              <div className="w-4/5">
                <Image
                  src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                  alt="Asgaard sofa"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Asgaard sofa</h1>
            <p className="text-2xl text-gray-600 mb-4">Rs. 250,000.00</p>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg
                  className="w-5 h-5 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="ml-2 text-gray-600">5 Customer Review</span>
            </div>
            <p className="text-gray-600 mb-6">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <Button
                    key={size}
                    className={`w-9 h-9 text-sm rounded-full hover:text-white ${
                      selectedSize === size
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800 border"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-4">
                {["purple", "black", "gold"].map((color) => (
                  <Button
                    key={color}
                    className={cn(
                      "w-8 h-8 rounded-full",
                      color === "purple"
                        ? "bg-purple-500 hover:bg-purple-500"
                        : color === "black"
                        ? "bg-black hover:bg-black"
                        : "bg-yellow-500 hover:bg-yellow-500",
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : ""
                    )}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex max-w-sm items-center space-x-1.5">
                <Button
                  className={buttonVariants({
                    className:
                      "px-4 py-2 bg-gray-100 text-shark hover:text-white",
                  })}
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-6 h-6" />
                </Button>
                <Input
                  type="number"
                  className="w-14 text-center selection:border-red-100"
                  value={quantity}
                  readOnly
                />
                <Button
                  className={buttonVariants({
                    className:
                      "px-4 py-2 bg-gray-100 text-shark hover:text-white",
                  })}
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-6 h-6" />
                </Button>
              </div>
              <Button>Añadir al carrito</Button>
            </div>
            <div className="border-t pt-6">
              <p className="mb-2">
                <span className="font-semibold">SKU:</span> SS001
              </p>
              <p className="mb-2">
                <span className="font-semibold">Category:</span> Sofas
              </p>
              <p className="mb-2">
                <span className="font-semibold">Tags:</span> Sofa, Chair, Home,
                Shop
              </p>
              <p className="mb-2">
                <span className="font-semibold">Share:</span>
                <Facebook className="inline-block w-5 h-5 ml-2" />
                <Linkedin className="inline-block w-5 h-5 ml-2" />
                <Twitter className="inline-block w-5 h-5 ml-2" />
              </p>
            </div>
          </div>
        </div>

        <ProductTabs />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid lg:grid-cols-relatedProducts gap-4">
            {[
              {
                name: "Syltherine",
                type: "Stylish cafe chair",
                price: 2500,
                image: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
                discount: "30%",
              },
              {
                name: "Leviosa",
                type: "Stylish cafe chair",
                price: 500,
                image: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
              },
              {
                name: "Lolito",
                type: "Luxury big sofa",
                price: 700,
                image: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
                discount: "50%",
              },
              {
                name: "Respira",
                type: "Outdoor bar table and stool",
                price: 300,
                image: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
                new: true,
              },
            ].map((product, index) => (
              <Product
                key={index}
                image={product.image}
                name={product.name}
                discount={product.discount}
                novel={product.new}
                price={product.price}
                type={product.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
