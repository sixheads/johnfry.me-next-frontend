import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.4,
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        // delay: 0.25,
      },
    },
  };

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        key={asPath}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
