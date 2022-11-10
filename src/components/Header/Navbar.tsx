import Link from "next/link";
import { useRouter } from "next/router";
import { Hamburger } from "@engame/components";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  isOpen: boolean;
  onToggleShowMenu: () => void;
  onClickLogin: () => void;
  onClickStartFreeTrial: () => void;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const { onClickLogin, onClickStartFreeTrial, onToggleShowMenu, isOpen } =
    props;

  const handleToggleMenu = () => {
    onToggleShowMenu();
  };

  return (
    <div className="flex flex-col">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "100vh" }}
            exit={{ height: "0px" }}
            transition={{ duration: 0.3 }}
            className="fixed pt-14 w-full h-full bg-white z-20 overflow-auto"
          >
            <div className="container mx-auto p-4 lg:px-36 flex flex-col space-y-4 overflow-auto">
              <Link scroll={true} href="/pricing" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  Pricing
                </button>
              </Link>
              <Link scroll={true} href="/im-brand-owner" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  Brand Owner
                </button>
              </Link>
              <Link scroll={true} href="/im-gamer" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  Gamer
                </button>
              </Link>
              <Link scroll={true} href="/blog" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  Blog
                </button>
              </Link>
              <Link scroll={true} href="/our-story" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  Our Story
                </button>
              </Link>
              <Link scroll={true} href="/faq" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  FAQ
                </button>
              </Link>
              <Link scroll={true} href="/contact-us" passHref>
                <button className="text-montserrat font-bold text-left text-lg">
                  Contact Us
                </button>
              </Link>
              <button
                onClick={onClickLogin}
                className="text-montserrat font-bold text-lg border-2 border-black rounded-lg py-2 hover:opacity-90 hover:shadow-lg"
              >
                Login
              </button>
              <button
                onClick={onClickStartFreeTrial}
                className="text-montserrat font-bold text-lg bg-black text-white border-2 border-black rounded-lg py-2 hover:opacity-90 hover:shadow-lg"
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="z-20 h-14 flex justify-center bg-white">
        <div className="container mx-auto px-4 lg:px-36 py-3 md:py-2 flex justify-between items-center">
          <Link scroll={true} href="/" passHref>
            <div className="flex flex-col justify-center w-36 md:w-28 cursor-pointer">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={180}
                height={34}
              />
            </div>
          </Link>
          <button
            id="burger"
            className="p-2 md:hidden flex items-center justify-center text-montserrat font-bold border border-black rounded-lg"
            onClick={handleToggleMenu}
          >
            <Hamburger isOpen={isOpen} />
          </button>
          <div id="nav" className="space-x-1 md:flex hidden">
            <Link scroll={true} href="/pricing" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Pricing
              </button>
            </Link>
            <Link scroll={true} href="/im-brand-owner" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Brand Owner
              </button>
            </Link>
            <Link scroll={true} href="/im-gamer" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Gamer
              </button>
            </Link>
            <Link scroll={true} href="/blog" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Blog
              </button>
            </Link>
            <Link scroll={true} href="/our-story" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Our Story
              </button>
            </Link>
            <Link scroll={true} href="/faq" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                FAQ
              </button>
            </Link>
            <Link scroll={true} href="/contact-us" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Contact Us
              </button>
            </Link>
            <button
              onClick={onClickLogin}
              className="px-2 py-1 text-montserrat font-bold md:text-base border-2 border-black rounded hover:opacity-90 hover:shadow-lg"
            >
              Login
            </button>
            <button
              onClick={onClickStartFreeTrial}
              className="px-2 py-1 text-montserrat font-bold md:text-base bg-black text-white rounded hover:opacity-90 hover:shadow-lg"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
