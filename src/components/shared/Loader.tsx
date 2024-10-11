import { Loader as LucideLoader } from "lucide-react";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LucideLoader className="animate-spin w-16 h-16 text-blue-600" />
    </div>
  );
};

export default Loader;
