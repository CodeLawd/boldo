import { motion } from "framer-motion";

const FadeIn = ({ children, duration }) => {
   return (
      <motion.div
         viewport={{ once: true }}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: duration || 1 }}>
         {children}
      </motion.div>
   );
};

export default FadeIn;
