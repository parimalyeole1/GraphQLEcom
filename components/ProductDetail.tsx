import { Product } from "../lib/products";
import { ProductItem } from "./ProductItem";

export function ProductDetail({ product }: { product: Product | null }) {
  if (!product) {
    return null;
  }
  return (
    <main className="grid h-[700px] grid-cols-4">
      <div className="col-span-3 flex items-center justify-center">
        <ProductItem product={product} />
      </div>
      <div className="space-y-4 p-8">
        <div dangerouslySetInnerHTML={{ __html: product.body }} />
      </div>
    </main>
  );
}
