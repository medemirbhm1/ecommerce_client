"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-hot-toast";

const url = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const OrderSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  phone: z.string().min(8).max(13),
  address: z.string().min(2).max(40),
  wilaya: z.string(),
  commune: z.string(),
  note: z.string(),
});

type OrderSchemaType = z.infer<typeof OrderSchema>;

const Summary = () => {
  const { items, removeAll } = useCart();
  const [selectedDeliveryType, setSelectedDeliveryType] = useState<{
    value: number | undefined;
    label: string | undefined;
  }>({ value: undefined, label: undefined });
  const totaPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderSchemaType>({ resolver: zodResolver(OrderSchema) });

  const onSubmit: SubmitHandler<OrderSchemaType> = async (data) => {
    try {
      await axios.post(url, {
        ...data,
        deliveryType: selectedDeliveryType.value,
        itemsIds: items.map((item) => item.id),
      });
      removeAll();
      reset();
      setSelectedDeliveryType({ value: undefined, label: undefined });
      toast.success("Commande Envoyée");
    } catch (err) {
      toast.error("Erreur !");
    }
  };
  return (
    <div className="mt-16 roudned-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totaPrice} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="mb-4">
            <input
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              required
              placeholder="Nom"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              required
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              required
              placeholder="Téléphone"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              required
              placeholder="Wilaya"
              {...register("wilaya")}
            />
            {errors.wilaya && (
              <span className="text-red-500 text-sm">
                {errors.wilaya.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              required
              placeholder="Commune"
              {...register("commune")}
            />
            {errors.commune && (
              <span className="text-red-500 text-sm">
                {errors.commune.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              required
              placeholder="Adresse"
              {...register("address")}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-500 mb-1 block">
              Type du livraison
            </label>
            <Select
              required
              onChange={(data) => {
                setSelectedDeliveryType({
                  value: data?.value,
                  label: data?.label,
                });
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  boxShadow: "none",
                  borderColor: state.menuIsOpen ? "#4b5563" : "#f0f0f0",
                  "&:hover": {
                    borderColor: "#4b5563",
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused ? "black" : "white",
                  color: state.isFocused ? "white" : "black",
                }),
              }}
              options={[
                { value: 1, label: "A domicile" },
                { value: 2, label: "Stop desk" },
              ]}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="focus:outline-none focus:border-gray-600 py-2 px-2 border rounded w-full"
              placeholder="Note"
              {...register("note")}
            ></textarea>
            {errors.note && (
              <span className="text-red-500 text-sm">
                {errors.note.message}
              </span>
            )}
          </div>
          <Button
            className="w-full"
            disabled={isSubmitting || items?.length === 0}
            type="submit"
          >
            Commander
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Summary;
