"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";
import { stat } from "fs/promises";
import { useSearchParams } from "next/navigation";

const Summary = () => {
  const { items, removeAll } = useCart();
  const totaPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  return (
    <div className="mt-16 roudned-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totaPrice} />
        </div>
      </div>
      <Button className="w-full mt-6">Order</Button>
    </div>
  );
};

export default Summary;
