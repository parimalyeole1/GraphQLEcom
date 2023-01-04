import Image from "next/image";
import {
  CartItem,
  GetCartDocument,
  useDecreaseCartItemMutation,
  useIncreaseCartItemMutation,
} from "../types";
import { MinusIcon } from "./MinusIcon";
import { PlusIcon } from "./PlusIcon";

export function CartItem({ item, cartId }: { item: CartItem; cartId: string }) {
  const [increaseCartItem, { loading: increasingCartItem }] =
    useIncreaseCartItemMutation({
      refetchQueries: [GetCartDocument],
    });
  const [decreaseCartItem, { loading: decreasingCartItem }] =
    useDecreaseCartItemMutation({
      refetchQueries: [GetCartDocument],
    });
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
          <button
            onClick={() =>
              decreaseCartItem({
                variables: { input: { id: item.id, cartId } },
              })
            }
            disabled={decreasingCartItem}
            className="border border-neutral-700 p-1 font-light  hover:bg-black hover:text-white"
          >
            <MinusIcon />
          </button>
          <button
            onClick={() =>
              increaseCartItem({
                variables: { input: { id: item.id, cartId } },
              })
            }
            disabled={increasingCartItem}
            className="border border-neutral-700 p-1 font-light  hover:bg-black hover:text-white"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
