import { getCookie } from "cookies-next";
import { Product } from "../lib/products";
import { GetCartDocument, useAddToCartMutation } from "../types";
import { ProductItem } from "./ProductItem";

export function ProductDetail({ product }: { product: Product | null }) {
  const cartId = String(getCookie("cartId"));
  const [addToCart, { loading }] = useAddToCartMutation({
    refetchQueries: [GetCartDocument],
  });
  if (!product) {
    return null;
  }
  return (
    <main className="grid h-[700px] grid-cols-4">
      <div className="col-span-3 flex items-center justify-center">
        <ProductItem product={product} />
      </div>
      <form
        className="space-y-4 p-8"
        onSubmit={(e) => {
          e.preventDefault();
          addToCart({
            variables: {
              input: {
                cartId,
                id: product.id,
                name: product.title,
                description: product.body,
                price: product.price,
                image: product.src,
              },
            },
          });
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: product.body }} />
        <button
          className="w-full rounded border border-black bg-black px-6 py-4 uppercase text-white hover:bg-white hover:text-black"
          type="submit"
        >
          {loading ? "Adding to cart..." : "Add to cart"}
        </button>
      </form>
    </main>
  );
}
