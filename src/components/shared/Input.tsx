import React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline" | "filled";
  inputSize?: "default" | "small" | "large";
}

const Input: React.FC<InputProps> = ({
  className,
  variant = "default",
  inputSize = "default",
  ...props
}) => {
  const baseClasses = "border rounded-md transition-colors focus:outline-none p-2";

  const variantClasses = {
    default: "bg-white border-gray-300",
    outline: "bg-transparent border-gray-400 focus:border-blue-500",
    filled: "bg-gray-200 border-gray-300",
  };

  const sizeClasses = {
    default: "h-10",
    small: "h-8",
    large: "h-12",
  };

  return (
    <input
      className={cn(baseClasses, variantClasses[variant], sizeClasses[inputSize], className)}
      {...props}
    />
  );
};

export default Input;
