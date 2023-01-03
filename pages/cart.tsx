import type { GetServerSideProps, NextPage } from "next";
import { getCartId } from "../lib/cart.client";
import { useClient } from "../lib/client";
import { useGetCartQuery } from "../types";

const Cart: NextPage<IProps> = ({ cartId }) => {
  const client = useClient();
  const { data } = useGetCartQuery({ variables: { id: cartId }, client });
  return (
    <div className="flex min-h-screen flex-col">
      <main className="min-h-screen p-8">
        <div className="mx-auto max-w-xl space-y-8">
          <h1 className="text-4xl">Cart</h1>
          <div>Items: {data?.cart?.totalItems}</div>
          <div className="flex justify-between border-t pt-4">
            <div>Subtotal</div>
            <div>{data?.cart?.subTotal.formatted}</div>
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
