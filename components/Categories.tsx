import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Categorías</h2>
      <p className="text-gray-600 text-center mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {["Dining", "Living", "Bedroom", "Kitchen", "Bathroom", "Porch"].map(
          (category) => (
            <Link href="/shop">
              <div
                key={category}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src="/c80b76ea-a46c-415a-aa84-b491f07683b7.webp"
                  alt={category}
                  width={250}
                  height={150}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Categories;
