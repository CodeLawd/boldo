import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const AccordionItem = ({ item: { title, content, primary }, index, activeIndex, setActiveIndex, numbered }) => {
  const isOpen = activeIndex == index;
  const arrowIcon =
    activeIndex == index ? (
      <MinusIcon className={`${isOpen ? "text-white " : "text-[#0d0630] "} w-4 md:w-5 `} />
    ) : (
      <PlusIcon className="w-4 text-[#0d0630]  md:w-5" />
    );

  const handleSetIndex = (index) => {
    if (!isOpen) {
      setActiveIndex(index);
    }
    if (isOpen) {
      setActiveIndex(0);
    }
  };

  return (
    <div className="h-full rounded-xl">
      <div
        className={`${
          isOpen ? "bg-opacity-100" : "rounded-b-lg bg-opacity-5 dark:bg-opacity-10"
        }  flex cursor-pointer items-center justify-between rounded-t-lg bg-primary px-4 py-4 transition-all duration-300 md:px-6`}
        onClick={() => handleSetIndex(index)}>
        {/* title */}
        <h2 className={`${isOpen ? "text-white" : ""} text-sm font-semibold md:text-base`}>
          {numbered ? `${index}.` : ""} {title}
        </h2>

        {/* rotate icon */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: { type: "tween", duration: 0.15, ease: "circOut" },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: { type: "tween", duration: 0.15, ease: "circIn" },
            }}>
            {arrowIcon}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* content */}
      <motion.div
        initial={false}
        className="overflow-hidden"
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}>
        <div className="w-full space-y-2 rounded-b-lg border border-[#f2f1f1] bg-white px-4 py-4 text-sm dark:border-primary dark:bg-primary dark:bg-opacity-10 md:px-6 md:text-base">
          <p className={primary ? "text-primary" : ""}>{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
