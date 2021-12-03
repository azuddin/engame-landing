import Image from "next/image";
import Link from "next/link";
import { Section } from "..";

const Footer = (): JSX.Element => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-b-2 pb-4 md:p-0 md:border-0">
          <p>LOGO</p>
          <p>© 2021 Engame all rights reserved.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <p>✉️</p>
            <p>contact@engame.asia</p>
          </div>
          <div>
            <p>☎</p>
            <p>(+60) 012-277 4439</p>
          </div>
        </div>
        <div className="">
          <p>📍</p>
          <p>
            Enidea Sdn Bhd C-20-02, Metropolitan Square, Jalan PJU 8/1,
            Damansara Perdana, Petaling Jaya, 47820 Selangor, Malaysia
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 mt-4 pt-2">
        <div className="social space-x-2 md:space-x-4">
          <button>IG</button>
          <button>FB</button>
        </div>
        <div className="menu md:space-x-4 flex flex-col md:flex-row">
          <Link href="/our-story" passHref>
            <button>Our Story</button>
          </Link>
          <Link href="/pricing" passHref>
            <button>Pricing</button>
          </Link>

          <Link href="/faq" passHref>
            <button>FAQ</button>
          </Link>
          <Link href="/contact-us" passHref>
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="term md:space-x-4 flex flex-col md:flex-row">
          <Link href="/privacy" passHref>
            <button>Privacy</button>
          </Link>
          <Link href="/conditions" passHref>
            <button>Conditions</button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export { Footer };
