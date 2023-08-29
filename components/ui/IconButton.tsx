import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}
const IconButton: React.FC<IconButtonProps> = ({ className, onClick , icon}) => {
  return (
    <button
      className={cn(
        "rounded-full flex-center items-center justify-center bg-white border shadow-md hover:scale-110 p-2 transition",
        className
      )}
      onClick={onClick}
    >
        {icon}
    </button>
  );
};

export default IconButton;
