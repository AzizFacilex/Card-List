import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "danger" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "xsmall" | "small" | "large" | "icon";
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses = " inline-flex items-center justify-center rounded text-base font-bold transition-all duration-200 ease-in-out";

  // Variant styles
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-500",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    secondary: "bg-gray-300 text-black hover:bg-gray-200",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
    link: "text-blue-600 underline hover:text-blue-500",
  };

  // Size styles
  const sizeStyles = {
    default: "px-5 py-2",
    xsmall: "text-xs",
    small: "px-3 py-1 text-sm",
    large: "px-6 py-3 text-lg",
    icon: "p-2 rounded-full",
  };

  return (
    <button
      className={cn(baseClasses, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  );
};

export default Button;
