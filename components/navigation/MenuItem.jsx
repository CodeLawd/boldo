import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { blackNav } from "../../helpers/data";

const MenuItem = ({ item: { path, title }, pageLink, pageReady }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Link
        href={path}
        className={`${
          pageLink.includes(path) ? "font-[500] text-white" : "text-[#d5d5d5]"
        } relative flex items-center gap-1 font-light`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {title}
      </Link>

      <motion.div
        initial={{ y: 10, width: "100%", opacity: 0 }}
        animate={{
          y: hover || pageLink.includes(path) ? 0 : 10,
          width: "100%",
          opacity: hover || pageLink.includes(path) ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="mt-2 h-1 w-full bg-secondary"
      />
    </>
  );
};

export default MenuItem;
