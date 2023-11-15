"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { InputFieldProps } from "@/types/propTypes";

const SearchBar = ({ label, type, onValidityChange }: InputFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (onValidityChange) {
      onValidityChange(inputValue !== "");
    }
  }, [inputValue, onValidityChange]);

  return (
    <div className="w-full flex justify-center items-center">
      <input
        type={type}
        required={true}
        value={inputValue}
        onChange={handleInputChange}
        className="peer w-full p-4 shadow-lg outline-transparent border-transparent ring-transparent opacity-80 color-indigo-400 rounded-lg focus:opacity-100 focus:border-2"
      ></input>
      <span className="absolute left-0 pl-4 text-gray-400 opacity-80 pointer-events-none duration-500 peer-focus:text-pink-600 peer-focus:-translate-y-10 peer-focus:text-sm peer-focus:font-bold peer-valid:text-pink-600 peer-valid:-translate-y-10 peer-valid:text-sm peer-valid:font-bold">
        {" "}
        {label}{" "}
      </span>
    </div>
  );
};

export default SearchBar;
