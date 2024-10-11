"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string; 
  alt?: string; 
  fallback?: string; 
}

const Avatar: React.FC<AvatarProps> = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-300 bg-gray-200 shadow-md",
          className
        )}
        {...props}
      >
        {src ? (
          <AvatarImage src={src} alt={alt} />
        ) : (
          <AvatarFallback fallback={fallback} />
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; 
  alt?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover rounded-full transition-transform duration-200 transform hover:scale-105"
    />
  );
};

interface AvatarFallbackProps {
  fallback?: string;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ fallback }) => {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-300 text-gray-700 font-semibold rounded-full">
        {fallback ? fallback.charAt(0).toUpperCase() : "U"}
      </div>
    );
  };

export default Avatar;
export { AvatarFallback, AvatarImage };

