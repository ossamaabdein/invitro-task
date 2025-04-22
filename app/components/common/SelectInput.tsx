import React from "react";
import Select from "react-select";

interface SelectInputProps {
  name: string;
  id: string;
  value: { value: string; label: string } | null;
  onChange: (selectedOption: { value: string; label: string } | null) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  label?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  id,
  value,
  onChange,
  options,
  placeholder,
  className,
  label,
}) => {
  return (
    <div className="select-input">
      {label && (
        <label htmlFor={id} className="hidden">
          {label}
        </label>
      )}
      <Select
        name={name}
        inputId={id}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        className={className}
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
    </div>
  );
};

export default SelectInput;