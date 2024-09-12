import Image from "next/image";

const ProductCard = ({}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <Image
        src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
        alt={`Product Card`}
        width={300}
        height={300}
        className="rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">Product Name</h3>
      <p className="text-gray-600 mb-2">Short description</p>
      <p className="text-amber-600 font-bold">USD 2.500.000</p>
    </div>
  );
};

export default ProductCard;
