"use client";
import { motion } from "framer-motion";
// @ts-ignore
import SearchBar from "./SearchBar.tsx";
import { useState } from "react";

const SearchForm = () => {
  const [destinationHasValue, setDestinationHasValue] = useState(false);
  const handleDestinationHasValue = (hasValue: boolean) => {
    setDestinationHasValue(hasValue);
  };

  return (
    <motion.form
      className="absolute bottom-10 right-5 lg:right-10 z-20 duration-500 w-3/5 lg:w-2/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col-reverse justify-evenly gap-y-6">
        <div className="peer z-30">
          <SearchBar
            type="text"
            onValidityChange={handleDestinationHasValue}
            label={"Destination"}
          />
        </div>
        <div
          className={`duration-500 ${
            destinationHasValue
              ? "translate-y-0"
              : "translate-y-20 opacity-0 focus-within:translate-y-0 focus-within:opacity-100 peer-focus-within:translate-y-0 peer-focus-within:opacity-100"
          }`}
        >
          <button className="absolute right-4 -top-8 text-pink-400 opacity-80 font-semibold text-lg">
            Search {">>>"}
          </button>
          <SearchBar type="text" label={"From"} />
        </div>
      </div>
    </motion.form>
  );
};

export default SearchForm;
