"use client";

import { ShoppingBagIcon } from "lucide-react";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
const NavActions = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center justify-center rounded-full bg-black px-4  py-2"
      >
        <ShoppingBagIcon size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavActions;
