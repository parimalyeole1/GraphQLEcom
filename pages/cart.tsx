import type { GetServerSideProps, NextPage } from "next";
import { getCartId } from "../lib/cart.client";
import { useCreateCheckoutSessionMutation, useGetCartQuery } from "../types";
import { Header } from "../components/Header";
import { CartDetail } from "../components/CartDetail";
import { useRouter } from "next/router";
import { CartError } from "../components/CartError";

const Cart: NextPage<IProps> = ({ cartId }) => {
  const { data } = useGetCartQuery({ variables: { id: cartId } });
  const router = useRouter();
  const [createCheckoutSession, { loading: creatingCheckoutSession, error }] =
    useCreateCheckoutSessionMutation({
      variables: {
        input: {
          cartId,
        },
      },
      onCompleted: (data) => {
        if (data?.createCheckoutSession?.url) {
          router.push(data.createCheckoutSession?.url);
        }
      },
    });
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-h-screen p-8">
        <div className="mx-auto max-w-xl space-y-8">
          <h1 className="text-4xl">Cart</h1>
          <CartError error={error} />
          <CartDetail cart={data?.cart} />
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                createCheckoutSession();
              }}
              disabled={creatingCheckoutSession}
              className="w-full border border-neutral-700 p-1 font-light hover:bg-black hover:text-white"
            >
              {creatingCheckoutSession
                ? "Redirecting to Checkout"
                : "Go to Checkout"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

interface IProps {
  cartId: string;
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({
  req,
  res,
}) => {
  const cartId = getCartId({ req, res });
  return { props: { cartId } };
};

export default Cart;
