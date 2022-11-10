import { motion } from "framer-motion";
import { MotionProps } from "framer-motion";
type PathProps = MotionProps & { d?: string };

const HamburgerPath = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    className="stroke-current text-black"
    strokeLinecap="round"
    {...props}
  />
);

const Hamburger = (props: { isOpen: boolean }): JSX.Element => {
  const { isOpen } = props;
  return (
    <>
      <svg viewBox="0 0 20 20" className="h-4 w-4">
        <HamburgerPath
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 0 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <HamburgerPath
          d="M 0 9.423 L 20 9.423"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <HamburgerPath
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 0 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </>
  );
};

export { Hamburger };
