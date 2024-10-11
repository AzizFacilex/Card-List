import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import useResponsiveCardsPerPage from "../../hooks/useResponsiveCardsPerPage";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ fluid = true, className, children, ...props }) => {
  const cardsPerPage = useResponsiveCardsPerPage();

  const cardHeight = 372;
  const paddingHeight = 50;

  const minContainerHeight = cardHeight * Math.ceil(cardsPerPage / 3) + paddingHeight;

  const [containerHeight, setContainerHeight] = useState(minContainerHeight);

  useEffect(() => {
    setContainerHeight(minContainerHeight);
  }, [minContainerHeight]);

  return (
    <div>
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          fluid ? "w-full" : "w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl",
          "bg-white shadow-lg rounded-lg p-6 pb-12",
          className
        )}
        style={{ minHeight: `${containerHeight}px`, height: 'auto' }}
        {...props}
      >
        {children}
      </div>
      <div className={cn(" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", fluid ? "w-full" : "w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl", "md:hidden bg-white shadow-lg rounded-lg p-6", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Container;
