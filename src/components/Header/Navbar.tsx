import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Hamburger } from "@engame/components";

interface NavbarProps {
  isOpen: boolean;
  onToggleShowMenu: () => void;
  onClickLogin: () => void;
  onClickStartFreeTrial: () => void;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const { push } = useRouter();

  const { onClickLogin, onClickStartFreeTrial, onToggleShowMenu, isOpen } =
    props;

  const handleToggleMenu = () => {
    onToggleShowMenu();
  };

  return (
    <div className="flex flex-col">
      <div
        className={
          "fixed pt-14 w-full h-full bg-white z-20 overflow-auto" +
          (isOpen ? "" : " hidden")
        }
      >
        <div className="container mx-auto p-4 lg:px-36 flex flex-col space-y-4 overflow-auto">
          <Link href="/our-story" passHref>
            <button className="text-montserrat font-bold text-left text-lg">
              Our Story
            </button>
          </Link>
          <Link href="/pricing" passHref>
            <button className="text-montserrat font-bold text-left text-lg">
              Pricing
            </button>
          </Link>
          <Link href="/blog" passHref>
            <button className="text-montserrat font-bold text-left text-lg">
              Blog
            </button>
          </Link>
          <Link href="/faq" passHref>
            <button className="text-montserrat font-bold text-left text-lg">
              FAQ
            </button>
          </Link>
          <Link href="/contact-us" passHref>
            <button className="text-montserrat font-bold text-left text-lg">
              Contact Us
            </button>
          </Link>
          <div className="flex flex-col justify-center items-center py-4">
            <Image
              src="/assets/images/home-2.png"
              alt="menu image"
              width={300}
              height={300}
              layout="fixed"
            />
          </div>
          <button
            onClick={onClickStartFreeTrial}
            className="text-montserrat font-bold text-lg bg-black text-white border-2 border-black rounded-lg py-2"
          >
            Start Free Trial
          </button>
          <button
            onClick={onClickLogin}
            className="text-montserrat font-bold text-lg border-2 border-black rounded-lg py-2"
          >
            Login
          </button>
        </div>
      </div>
      <div className="z-20 h-14 flex justify-center bg-white">
        <div className="container mx-auto px-4 lg:px-36 py-3 md:py-2 flex justify-between items-center">
          <Link href="/" passHref>
            <div className="flex flex-col justify-center w-36 md:w-28 cursor-pointer">
              <Image
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
            <Link href="/our-story" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Our Story
              </button>
            </Link>
            <Link href="/pricing" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Pricing
              </button>
            </Link>
            <Link href="/blog" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Blog
              </button>
            </Link>
            <Link href="/faq" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                FAQ
              </button>
            </Link>
            <Link href="/contact-us" passHref>
              <button className="px-2 py-1 text-montserrat font-bold md:text-base">
                Contact Us
              </button>
            </Link>
            <button
              onClick={onClickStartFreeTrial}
              className="px-2 py-1 text-montserrat font-bold md:text-base bg-black text-white rounded"
            >
              Start Free Trial
            </button>
            <button
              onClick={onClickLogin}
              className="px-2 py-1 text-montserrat font-bold md:text-base border-2 border-black rounded"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
