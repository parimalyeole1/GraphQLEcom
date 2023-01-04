import { CartFragment } from "../types";
import { CartItem } from "./CartItem";

export function CartDetail({
  cart,
  isReadOnly,
}: {
  cart: CartFragment | null | undefined;
  isReadOnly?: boolean;
}) {
  return (
    <div>
      <div className={`relative space-y-8`}>
        {cart?.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            cartId={cart.id}
            isReadOnly={isReadOnly}
          />
        ))}
      </div>
      <div className="my-4 border-t border-neutral-700 pt-4">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>{cart?.subTotal.formatted}</div>
        </div>
      </div>
      <div className="border-t border-neutral-700 pt-4">
        <div className="flex justify-between font-bold">
          <div>Total</div>
          <div className="">{cart?.subTotal.formatted}</div>
        </div>
      </div>
    </div>
  );
}
