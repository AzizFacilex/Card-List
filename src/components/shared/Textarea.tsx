interface TextareaProps {
  value: string;
  placeholder: string;
}
export const Textarea: React.FC<TextareaProps> = ({ value, placeholder }) => {
  return (
    <div className="w-full">
      <label
        className="block text-sm font-medium text-gray-700 mb-1 w-fit cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {placeholder}
      </label>
      <div
        className="w-full cursor-auto border rounded-lg px-3 py-2 bg-gray-100 text-gray-900 text-justify resize-none max-h-24 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 break-words"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-gray-900">{value}</p>
      </div>
    </div>
  );
};
