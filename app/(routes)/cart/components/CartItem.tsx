"use client";

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import useCart from "@/hooks/useCart";
import { OrderItem } from "@/types";
import { MinusCircle, PlusCircle, X } from "lucide-react";
import Image from "next/image";

interface CarItemProps {
  data: OrderItem;
}
const CartItem: React.FC<CarItemProps> = ({ data }) => {
  const cart = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => {
              cart.removeItem(data.id);
            }}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between ">
            <p className="tetx-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <div className="">
            <p className="text-sm text-gray-500">Quantité</p>
            <div className="flex items-center space-x-2">
              <button
                className="disabled:opacity-50"
                disabled={data.quantity === 1}
                onClick={() => {
                  cart.decreaseQunatity(data.id);
                }}
              >
                <MinusCircle size={20} />
              </button>
              <p className="text-lg font-semibold">{data.quantity}</p>
              <button
                onClick={() => {
                  cart.increaseQunatity(data.id);
                }}
              >
                <PlusCircle size={20} />
              </button>
            </div>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
