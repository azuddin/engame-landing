import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Navbar } from "@engame/components";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      {children}
      <footer className=" border-t-2 border-gray-300 pt-10 mt-20">
        <div className="container mx-auto px-5 ">
          <div className="space-y-20 md:py-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-20 lg:gap-14 md:space-y-0">
            <div className="flex flex-col justify-center space-y-10 md:justify-start">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/assets/images/logo.png"
                  width={374}
                  height={72}
                  alt="logo"
                />
              </div>
              <p className="font-montserrat font-normal text-2xl text-center md:text-left">
                © 2021 <span className="font-bold">Engame</span> all rights
                reserved.
              </p>
            </div>
            <div className="flex flex-col pt-20 space-y-20 border-t-2 border-gray-300 md:p-0 md:border-0 md:space-y-20 lg:space-y-14">
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <p className="text-7xl">✉️</p>
                <p className="font-montserrat text-2xl font-bold">
                  contact@engame.asia
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <p className="text-7xl">☎</p>
                <p className="font-montserrat text-2xl font-bold">
                  (+60) 012-277 4439
                </p>
              </div>
            </div>
            <div className="flex flex-col md:col-end-3 md:col-span-1 lg:col-end-4">
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <p className="text-7xl">📍</p>
                <p className="font-montserrat text-2xl font-bold text-center md:text-left">
                  Enidea Sdn Bhd C-20-02, Metropolitan Square, Jalan PJU 8/1,
                  Damansara Perdana, Petaling Jaya, 47820 Selangor, Malaysia
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-20 my-20 md:pt-10 md:my-10 items-center space-y-10 border-t-2 border-gray-300 md:flex-row md:justify-between md:space-y-0">
            <div className="flex space-x-4">
              <div className="flex">
                <Image
                  src="/assets/images/ig-icon.png"
                  width={48}
                  height={48}
                  alt="instagram"
                />
              </div>
              <div className="flex">
                <Image
                  src="/assets/images/fb-icon.png"
                  width={48}
                  height={48}
                  alt="facebook"
                />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-4">
              <Link href="/our-story" passHref>
                <p className="font-lato font-bold text-3xl">Our Story</p>
              </Link>
              <Link href="/pricing" passHref>
                <p className="font-lato font-bold text-3xl">Pricing</p>
              </Link>
              <Link href="/blog" passHref>
                <p className="font-lato font-bold text-3xl md:hidden">Blog</p>
              </Link>
              <Link href="/faq" passHref>
                <p className="font-lato font-bold text-3xl">FAQ</p>
              </Link>
              <Link href="/contact-us" passHref>
                <p className="font-lato font-bold text-3xl">Contact Us</p>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-4">
              <Link href="/privacy" passHref>
                <p className="font-lato font-bold text-3xl">Privacy</p>
              </Link>
              <Link href="/conditions" passHref>
                <p className="font-lato font-bold text-3xl">Conditions</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Layout };
