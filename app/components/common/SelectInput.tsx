import React from "react";
import Select from "react-select";

interface SelectInputProps {
  name: string;
  value: { value: string | number; label: string } | null;
  onChange: (selectedOption: { value: string | number; label: string } | null) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  options,
  placeholder,
  className,
}) => {
  return (
    <Select
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      className={`${className}`}
      isSearchable={false}
      instanceId={name}
      styles={{
        control: (base) => ({
          ...base,
          border: "1px solid #ccc",
          boxShadow: "none",
          cursor: "pointer",
          "&:hover": {
            border: "1px solid #aaa",
          },
        }),
        menu: (base) => ({
          ...base,
          zIndex: 9999,
        }),
        option: (base, { isFocused }) => ({
          ...base,
          backgroundColor: isFocused ? "#f0f0f0" : "#fff",
          color: isFocused ? "#333" : "#000",
          cursor: "pointer",
          "&:active": {
            backgroundColor: "#e0e0e0",
          },
        }),
      }}
    />
  );
};

export default SelectInput;