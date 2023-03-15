import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../helpers/data";
import MenuItem from "./MenuItem";
import MobileNavbar from "./MobileNavbar";
import { Bars4Icon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  const pageLink = router.pathname;

  useEffect(() => {
    setPageReady(true);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScroll(window.pageYOffset > 200));
    }
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-[9999] w-full  text-[#0d0630] transition-all duration-300  ${
        scroll ? "bg-[#000000E5] shadow" : ""
      } `}>
      <div
        className={`flex items-center justify-between py-6 transition-all duration-300 ${
          scroll ? "md:py-6" : "md:py-12"
        } bg-container text-black `}>
        {pageReady && (
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Boldo"
              className="max-h-8 transition-all duration-300 hover:scale-105 active:scale-95 md:max-h-24"
            />
          </Link>
        )}

        <div className="flex items-center gap-12">
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {navLinks?.map((item, i) => (
                <li className="" key={i}>
                  <MenuItem item={item} pageLink={pageLink} pageReady={pageReady} />
                </li>
              ))}
              <button className="btn -mt-3 rounded-3xl bg-white px-10 font-bold capitalize text-black hover:bg-secondary">
                Log in
              </button>
            </ul>
          </nav>
        </div>

        {/* mobile menu start */}
        <Bars4Icon className={`w-9 cursor-pointer text-white lg:hidden`} onClick={() => setMenuOpen(true)} />
        <motion.div
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0, scale: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-[99999] h-screen overflow-y-scroll bg-primary bg-opacity-95 text-center lg:hidden"
          onClick={(e) => e.stopPropagation()}>
          <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
        </motion.div>
        {/* mobile menu end */}
      </div>
    </motion.header>
  );
};

export default NavBar;
