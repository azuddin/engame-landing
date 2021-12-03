import { ReactNode, useState } from "react";
import Link from "next/link";
import { Hamburger } from "@engame/components";

export interface NavbarProps {
  children?: ReactNode;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const { children } = props;
  return (
    <div className="flex flex-col">
      <div className="z-20">
        <div className="container mx-auto px-4 lg:px-36 py-2 flex justify-between items-center">
          <Link href="/" passHref>
            <a href="#">LOGO</a>
          </Link>
          <button
            id="burger"
            className="px-2 pt-2 pb-1 md:hidden flex items-center justify-center text-base border-2 border-black rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Hamburger isOpen={showMenu} />
          </button>
          <div id="nav" className="space-x-1 md:flex hidden">
            <Link href="/our-story" passHref>
              <button className="px-2 py-1 text-base">Our Story</button>
            </Link>
            <Link href="/pricing" passHref>
              <button className="px-2 py-1 text-base">Pricing</button>
            </Link>
            <Link href="/blog" passHref>
              <button className="px-2 py-1 text-base">Blog</button>
            </Link>
            <Link href="/faq" passHref>
              <button className="px-2 py-1 text-base">FAQ</button>
            </Link>
            <Link href="/contact-us" passHref>
              <button className="px-2 py-1 text-base">Contact Us</button>
            </Link>
            <button className="px-2 py-1 text-base bg-black text-white rounded">
              Start Free Trial
            </button>
            <button className="px-2 py-1 border-2 border-black rounded">
              Login
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "fixed top-12 p-4 w-full h-full bg-gray-100 z-10 " +
          (showMenu ? "" : "hidden")
        }
      >
        <div className="flex flex-col space-y-4">
          <Link href="/our-story" passHref>
            <button className="text-base text-left">Our Story</button>
          </Link>
          <Link href="/pricing" passHref>
            <button className="text-base text-left">Pricing</button>
          </Link>
          <Link href="/blog" passHref>
            <button className="text-base text-left">Blog</button>
          </Link>
          <Link href="/faq" passHref>
            <button className="text-base text-left">FAQ</button>
          </Link>
          <Link href="/contact-us" passHref>
            <button className="text-base text-left">Contact Us</button>
          </Link>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded bg-gray-400"></div>
          </div>
          <button className="text-base bg-black text-white rounded">
            Start Free Trial
          </button>
          <button className="border-2 border-black rounded">Login</button>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
