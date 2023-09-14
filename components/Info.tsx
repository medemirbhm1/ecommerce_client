"use client";
import { Product } from "@/types";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { DollarSign, ShoppingCartIcon } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Taille:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Couleur:</h3>
          <div
            className="h-6 w-6  rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center flex-wrap gap-3">
        <Button
          onClick={() => {
            cart.addItem(data, "BUY_NOW");
            router.push("/cart");
          }}
          className="flex items-center gap-x-2"
        >
          Acheter maintenant
          <DollarSign />
        </Button>
        <Button
          onClick={() => {
            cart.addItem(data);
          }}
          className="flex items-center gap-x-2 bg-transparent text-black border border-black"
        >
          Ajouter au panier
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};

export default Info;
