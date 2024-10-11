import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import React, { Children, ReactNode, useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter } from "../../lib/utils";

interface SelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number>(0);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: string) => {
    onValueChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  useEffect(() => {
    if (isOpen && dropdownRef.current && selectRef.current) {
      const dropdownWidth = dropdownRef.current.offsetWidth;
      const selectWidth = selectRef.current.offsetWidth;
      setDropdownLeft((selectWidth - dropdownWidth) / 2);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={selectRef}>
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-between w-full h-12 px-4 rounded-lg transition-all
        ${isOpen ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg' : 'bg-blue-100 text-gray-700 hover:shadow-md'}
      `}
    >
      <span>{value ? `Sorted by ${capitalizeFirstLetter(value)}` : 'Sort by...'}</span>
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-white' : 'text-gray-500'}`} />
    </motion.button>

    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute z-50 mt-2 bg-white border rounded-lg shadow-lg"
        ref={dropdownRef}
        style={{ left: `${dropdownLeft}px` }} 
      >
        <div className="p-1">
          {Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === SelectItem) {
              return React.cloneElement(child, {
                ...child.props,
                onSelect: handleSelect,
                isSelected: value === child.props.value,
              });
            }
            return null;
          })}
        </div>
      </motion.div>
    )}
  </div>
  );
};

interface SelectItemProps {
  value: string;
  children: ReactNode;
  onSelect?: (value: string) => void;
  isSelected?: boolean;
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  children,
  onSelect,
  isSelected,
}) => (
  <motion.div
    onClick={() => onSelect && onSelect(value)}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`relative w-full items-center p-3 my-1 text-sm cursor-pointer rounded-lg transition-all 
      ${
        isSelected
          ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
          : "bg-white hover:bg-gradient-to-r from-blue-400 to-blue-600 "
      }`}
  >
    {isSelected && (
      <motion.div
        className="absolute left-2 w-4 h-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Check className="w-4 h-4 text-white" />
      </motion.div>
    )}
    <span className={` ${isSelected ? "ml-6 font-semibold" : ""}`}>
      {children}
    </span>
  </motion.div>
);

export { Select, SelectItem };
