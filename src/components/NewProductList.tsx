import { BASE_URL } from "@/constants/api";
import { Product } from "@/type/product";
import Image from "next/image";
import Link from "next/link";

const NewProductList = async () => {
  const res = await fetch(`${BASE_URL}/products`,{ cache : "no-store"}) ;

  const data: Product[] = await res.json();

  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-lg font-bold">New Arrival!</h2>
      <div className="w-full overflow-auto">
        <div className="flex gap-4 w-max">
          {data.map((product) => (
            <Link
              key={product.id}
              className="w-[120px] flex flex-col border gap-4 rounded-md"
              href={`/product/${product.id}/view`}
            >
            <Image
              className="rounded-sm object-cover w-[120px] h-[120px]"
              width={120}
              height={120}
              src={product.images}
              alt={product.title}
            /> 
             
              <div className="flex flex-col p-4 justify-between">
                <div>
                  <h2 className="text-md font-medium line-clamp-1">
                    {product.title}
                  </h2>
                  <p className="mt-4 font-thin">{product.price?.amount}$</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProductList;
