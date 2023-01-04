import Image from "next/image";
import { CartItem } from "../types";

export function CartItem({ item }: { item: CartItem }) {
  return (
    <div className="space-y-2">
      <div className="flex gap-4">
        <Image
          src={item.image || ""}
          width={75}
          height={75}
          alt={item.name}
          objectFit="cover"
        />
        <div className="flex flex-1 items-baseline justify-between gap-2">
          <span className="text-lg">{item.name}</span>
          <span className="text-sm font-light">{item.unitTotal.formatted}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1">
          <div className="flex-1 border border-neutral-700 px-2 py-1 font-light">
            {item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
}
