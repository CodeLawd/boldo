import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { navLinks, siteLinks } from "../../helpers/data";
import { Footer, Meta } from "../index";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();

  const getPageTitle = () => {
    const page = navLinks.find((p) => p.path == router.pathname);
    const otherPage = siteLinks.find((p) => p.path == router.pathname);
    page
      ? setPageTitle(`${page?.mainHeading} ${page?.mainHeading2}`)
      : otherPage
      ? setPageTitle(otherPage?.mainHeading)
      : "";
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined" && window.pageYOffset > 200) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    getPageTitle();
  }, [router.pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setShowScroll(window.pageYOffset > 400));
    }
    return () => window.removeEventListener("scroll", () => setShowScroll(window.pageYOffset > 400));
  }, []);

  return (
    <>
      <Meta title={pageTitle} />
      <div className="bg-[url('/tech-bg.webp') mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between bg-fixed">
        <div>
          {/* <NavBar /> */}
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      {showScroll && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-5 right-7 hidden rounded bg-primary p-3 text-sm text-white transition-all duration-300 hover:bg-secondary active:scale-90 dark:bg-primary md:block"
          onClick={scrollToTop}>
          <ArrowUpIcon className="w-4" />
        </motion.button>
      )}
    </>
  );
};

export default PageLayout;
