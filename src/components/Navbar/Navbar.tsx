import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export interface NavbarProps {
  children?: ReactNode;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const { children } = props;
  return (
    <div id="navbar" className="w-full flex justify-between py-6 mb-10">
      <Link href="/" passHref>
        <a className="flex justify-center items-center">
          <Image
            src="/assets/images/logo.png"
            width={180}
            height={32}
            alt="logo"
          />
        </a>
      </Link>
      <div id="navbar-menu">
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Link href="/our-story" passHref>
            <a className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Our Story
            </a>
          </Link>
          <Link href="/pricing" passHref>
            <a className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Pricing
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Blog
            </a>
          </Link>
          <Link href="/faq" passHref>
            <a className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              FAQ
            </a>
          </Link>
          <Link href="/contact-us" passHref>
            <a className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Contact Us
            </a>
          </Link>
          <button className="border border-gray-700 bg-black px-4 py-1 lg:py-2 rounded-lg">
            <a className="font-montserrat font-semibold text-xs lg:text-lg text-white">
              Start Free Trial
            </a>
          </button>
          <button className="border border-gray-700 px-4 py-1 lg:py-2 rounded-lg">
            <a className="font-montserrat font-semibold text-xs lg:text-lg">
              Login
            </a>
          </button>
        </div>
        <button className="border border-gray-700 p-2 rounded-lg md:hidden">
          <FiMenu size={16} />
        </button>
      </div>
    </div>
  );
};

export { Navbar };
