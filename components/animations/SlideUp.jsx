import { motion } from "framer-motion";

const SlideUp = ({ children, duration, startY }) => {
   return (
      <motion.div
         viewport={{ once: true }}
         initial={{ opacity: 0, y: startY || 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: duration || 0.8 }}>
         {children}
      </motion.div>
   );
};

export default SlideUp;
