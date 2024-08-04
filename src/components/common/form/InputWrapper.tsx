import React, { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

interface IInputWrapperProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  label: string;
  isRequired: boolean;
  type: string;
}

const InputWrapper: React.FC<IInputWrapperProps> = ({
  onChange,
  name,
  value,
  placeholder,
  label,
  type,
  isRequired = false,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="space-y-2 relative">
      <label htmlFor="" className="font-medium text-gray-200 text-sm">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          className="w-full border-none outline-none rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-600
        bg-gray-800 text-white focus:border-transparent
        "
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
          required={isRequired}
        />
        {type === "password" && (
          <span className="absolute z-50 right-3 cursor-pointer ">
            {passwordVisible ? (
              <VscEye
                onClick={() => setPasswordVisible(false)}
                className="text-gray-300 w-5 h-5"
              />
            ) : (
              <VscEyeClosed
                onClick={() => setPasswordVisible(true)}
                className="text-gray-300 w-5 h-5"
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputWrapper;
