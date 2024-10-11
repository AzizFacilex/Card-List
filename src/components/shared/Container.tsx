import { cn } from "../../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ fluid = true, className, children, ...props }) => {

  return (
    <div>
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          fluid ? "w-full" : "w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl",
          "bg-white shadow-lg rounded-lg p-6 pb-12",
          className
        )}
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
