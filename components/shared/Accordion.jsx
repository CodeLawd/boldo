import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const Accordion = ({ title, open, content, incomplete }) => {
  const [active, setActive] = useState(false);
  const arrowIcon = active ? <ChevronUpIcon className="w-4" /> : <ChevronDownIcon className="w-4" />;

  useEffect(() => {
    if (open) {
      setActive(true);
    }
  }, []);

  return (
    <div
      className={`h-full rounded-xl border-[0.5px] transition-all duration-300 ${
        incomplete ? "border-red-500" : "border-white"
      }`}>
      <div className="mt-2 flex cursor-pointer justify-between text-black" onClick={() => setActive(!active)}>
        <h2 className="text-sm font-semibold capitalize text-black md:text-base">{title}</h2>
        {arrowIcon}
      </div>
      <div className="mt-1 h-[0.5px] w-full bg-primary" />
      <motion.div
        initial={false}
        className="overflow-hidden"
        animate={{ height: active ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}>
        <div className="w-full pt-3 text-left text-black">{content}</div>
    </motion.div>
    </div>
  );
};

export default Accordion;
