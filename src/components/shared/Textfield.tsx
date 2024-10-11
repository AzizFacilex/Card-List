interface TextFieldProps {
  value: string;
  placeholder: string;
}
export const TextField: React.FC<TextFieldProps> = ({ value, placeholder }) => {
  return (
    <div
      className="w-full"
    >
      <label
        className="block w-fit text-sm font-medium text-gray-700 mb-1 cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {placeholder}
      </label>
      <div
        className="border rounded-lg px-3 py-2 bg-gray-100 text-center cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-gray-900">{value}</span>
      </div>
    </div>
  );
};
