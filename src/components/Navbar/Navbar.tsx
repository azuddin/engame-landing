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
    <div
      id="navbar"
      className="w-full flex justify-between py-4 mb-10 md:pt-12"
    >
      <div className="flex justify-center items-center">
        <Image
          src="/assets/images/logo.png"
          width={180}
          height={32}
          alt="logo"
        />
      </div>
      <div id="navbar-menu">
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Link href="/our-story" passHref>
            <p className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Our Story
            </p>
          </Link>
          <Link href="/pricing" passHref>
            <p className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Pricing
            </p>
          </Link>
          <Link href="/blog" passHref>
            <p className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Blog
            </p>
          </Link>
          <Link href="/faq" passHref>
            <p className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              FAQ
            </p>
          </Link>
          <Link href="/contact-us" passHref>
            <p className="font-montserrat font-semibold text-xs lg:text-lg px-2">
              Contact Us
            </p>
          </Link>
          <button className="border border-gray-700 bg-black px-4 py-2 rounded-lg">
            <p className="font-montserrat font-semibold text-xs lg:text-lg text-white">
              Start Free Trial
            </p>
          </button>
          <button className="border border-gray-700 px-4 py-2 rounded-lg">
            <p className="font-montserrat font-semibold text-xs lg:text-lg">
              Login
            </p>
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
