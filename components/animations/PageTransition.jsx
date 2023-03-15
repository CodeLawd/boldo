import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const router = useRouter();
  return (
    <AnimatePresence key={router.pathname} mode="wait" initial={true}>
      <motion.div
        key={router.pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
