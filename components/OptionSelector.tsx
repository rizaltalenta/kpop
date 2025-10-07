
import React from 'react';
import { Option } from '../types';

interface OptionSelectorProps<T> {
  label: string;
  options: Option<T>[];
  selectedValue: T;
  onChange: (value: T) => void;
}

const OptionSelector = <T extends string | number,>({
  label,
  options,
  selectedValue,
  onChange,
}: OptionSelectorProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (opt) => String(opt.value) === e.target.value
    );
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
      <select
        value={String(selectedValue)}
        onChange={handleChange}
        className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionSelector;
