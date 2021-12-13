import { Children, cloneElement, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface SlideshowProps {
  children?: ReactNode;
  activeKey: number | 0;
  direction: any;
  page?: number;
  duration?: number;
}

const Slideshow = (props: SlideshowProps): JSX.Element => {
  const { children, activeKey, direction, page, duration = 0.3 } = props;
  const arrayChildren = Children.toArray(children);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { duration, delay: 0.3 },
        opacity: { duration },
      },
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="flex flex-row overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration },
            opacity: { duration },
          }}
          className="w-full overflow-hidden"
        >
          {cloneElement(arrayChildren[activeKey] as any)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { Slideshow };
