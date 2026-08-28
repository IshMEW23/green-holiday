import { InputHTMLAttributes } from "react";

// Reusable input component for forms
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {/* Input label */}
      <label className="mb-2 block text-sm font-semibold text-[#17251b]">
        {label}
      </label>

      {/* Input field */}
      <input
        className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#439646] ${className}`}
        {...props}
      />
    </div>
  );
}