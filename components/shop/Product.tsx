import { Heart, Search, ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

const Product = ({
  image,
  name,
  discount,
  type,
  price,
  novel,
}: {
  image: string;
  name: string;
  discount?: any;
  type?: string;
  price: string;
  novel?: boolean;
}) => {
  return (
    <div className="p-[10px] lg:py-0">
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex lg:block">
        <div className="relative lg:w-full w-2/5">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-64 object-cover"
          />
          {discount && discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded hidden sm:inline-flex">
              {`Ahorra ${discount}%`}
            </span>
          )}
          {novel && (
            <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded hidden sm:inline-flex">
              Nuevo
            </span>
          )}
          <div className="absolute bottom-4 left-4 right-4 hidden sm:flex justify-between">
            <Button
              className={buttonVariants({
                className:
                  "bg-white text-gray-800 px-2 py-1 rounded hover:text-shark-50",
              })}
              size="icon"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <div className="flex space-x-2">
              <Button
                className={buttonVariants({
                  className:
                    "bg-white text-gray-800 px-2 py-1 rounded hover:text-shark-50",
                })}
                size="icon"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                className={buttonVariants({
                  className:
                    "bg-white text-gray-800 px-2 py-1 rounded hover:text-shark-50",
                })}
                size="icon"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-full w-3/5 relative">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-gray-600 mb-2">{type}</p>
          <p className="font-bold">{`USD ${price}`}</p>
          {discount && (
            <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded inline-flex sm:hidden">
              {`Ahorra ${discount}`}
            </span>
          )}
          {novel && (
            <span className="bg-green-500 text-white text-sm px-2 py-0.5 rounded inline-flex sm:hidden">
              Nuevo
            </span>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex sm:hidden justify-between">
            <Button
              className={buttonVariants({
                className:
                  "bg-white text-gray-800 px-2 py-1 rounded hover:text-shark-50",
              })}
              size="icon"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <div className="flex space-x-2">
              <Button
                className={buttonVariants({
                  className:
                    "bg-white text-gray-800 px-2 py-1 rounded hover:text-shark-50",
                })}
                size="icon"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                className={buttonVariants({
                  className:
                    "bg-white text-gray-800 px-2 py-1 rounded hover:text-shark-50",
                })}
                size="icon"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
