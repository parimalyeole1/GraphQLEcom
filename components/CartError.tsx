import Link from "next/link";
import { removeCookies } from "cookies-next";
import { ExclamationCircle } from "./ExclamationCircle";

export function CartError({ error }: { error: Error | undefined }) {
  if (!error) {
    return null;
  }
  return (
    <div className="rounded bg-red-500 p-4">
      <div className="flex items-center gap-2">
        <ExclamationCircle />
        <div className="flex flex-1 items-center justify-between">
          {error.message}
          {error.message === "Cart is empty" ? (
            <Link href="/">
              <a className="rounded border border-black p-1 px-2 hover:bg-red-300">
                Keep browsing
              </a>
            </Link>
          ) : null}
          {error.message === "Invalid cart" ? (
            <button
              onClick={() => {
                removeCookies("cartId");
                window.location.reload();
              }}
              className="rounded border border-black p-1 px-2 hover:bg-red-300"
            >
              Empty cache and reload
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
