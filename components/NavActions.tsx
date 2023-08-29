"use client";

import { ShoppingBagIcon } from "lucide-react";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
const NavActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center justify-center rounded-full bg-black px-4  py-2">
        <ShoppingBagIcon size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavActions;