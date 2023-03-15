import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FooterLink = ({ item: { path, title, badge } }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Link
        href={path}
        className="mt-2 w-fit cursor-pointer text-sm font-light text-[#777777] md:mt-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {title}{" "}
        {badge && (
          <span className="ml-3 rounded-full bg-secondary px-2 py-1 text-[0.6rem] font-bold text-black"> {badge} </span>
        )}
      </Link>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: hover ? 24 : 0 }}
        transition={{ duration: 0.5 }}
        className="h-0.5 bg-secondary"
      />
    </>
  );
};

export default FooterLink;
