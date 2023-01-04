import Image from "next/image";
import { HTMLProps } from "react";
import { Product } from "../lib/products";

export function ProductItem({
  product: { price, src, title },
}: HTMLProps<HTMLDivElement> & {
  product: Product;
}) {
  return (
    <div className="group relative flex h-full w-full items-center justify-center overflow-clip p-4">
      <div className="absolute top-0 left-0 z-10">
        <div className="border-b border-black bg-white p-2 text-2xl font-semibold">
          {title}
        </div>
        <div className="z-10 w-fit bg-white p-2 text-sm">
          ${price / 100} USD
        </div>
      </div>
      <Image
        className="h-full w-full transform transition duration-500 motion-safe:group-hover:scale-110 motion-safe:group-focus:scale-110"
        src={src}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
