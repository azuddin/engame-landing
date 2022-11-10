import Link from "next/link";
import { Section } from "@engame/components";

const Footer = (): JSX.Element => {
  return (
    <div className="bg-stone-300 pt-8">
      <Section bgColor="bg-stone-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-10 py-6">
          <div className="border-b-2 pt-10 pb-16 md:py-0 md:border-0 flex flex-col items-center md:items-start space-y-2">
            <div className="flex flex-col justify-center h-auto md:w-36">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={374}
                height={72}
              />
            </div>
            <p className="font-montserrat text-lg md:text-base">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">Engame (Enidea Sdn Bhd)</span> all
              rights reserved.
            </p>
          </div>
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <div>
              <p className="text-6xl md:text-lg">✉️</p>
              <Link href="mailto:enquiry@engame.tech" passHref>
                <a className="font-montserrat font-bold text-lg md:text-base">
                  enquiry@engame.tech
                </a>
              </Link>
            </div>
            <div>
              <p className="text-6xl md:text-lg">☎</p>
              <Link href="tel:+60012999786" passHref>
                <a className="font-montserrat font-bold text-lg md:text-base">
                  (+60) 012-299 9786
                </a>
              </Link>
              <br />
              <Link href="tel:+600122774439" passHref>
                <a className="font-montserrat font-bold text-lg md:text-base">
                  (+60) 012-277 4439
                </a>
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-6xl md:text-lg">📍</p>
            <p className="font-montserrat font-bold text-lg md:text-base">
              Enidea Sdn Bhd, C-20-02, Metropolitan Square, Jalan PJU 8/1,
              Damansara Perdana, Petaling Jaya, 47820 Selangor, Malaysia
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t py-8 md:py-4 space-y-4 md:space-y-0">
          <div className="social space-x-4 flex flex-row">
            <a
              href="https://www.instagram.com/tapmaster.engame/"
              className="flex flex-col justify-center w-9 md:w-6"
            >
              <img
                src="/assets/images/ig-icon.png"
                alt="logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.facebook.com/TapMaster.voucher.arcade"
              className="flex flex-col justify-center w-9 md:w-6"
            >
              <img
                src="/assets/images/fb-icon.png"
                alt="logo"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="menu md:space-x-6 flex flex-col md:flex-row space-y-4 md:space-y-0">
            <Link scroll={true} href="/pricing" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Pricing
              </button>
            </Link>
            <Link scroll={true} href="/im-brand-owner" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Brand Owner
              </button>
            </Link>
            <Link scroll={true} href="/im-gamer" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Gamer
              </button>
            </Link>
            <Link scroll={true} href="/blog" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Blog
              </button>
            </Link>
            <Link scroll={true} href="/our-story" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Our Story
              </button>
            </Link>
            <Link scroll={true} href="/faq" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                FAQ
              </button>
            </Link>
            <Link scroll={true} href="/contact-us" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="term md:space-x-6 flex flex-col md:flex-row space-y-4 md:space-y-0">
            <Link scroll={true} href="/privacy" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Privacy
              </button>
            </Link>
            <Link scroll={true} href="/conditions" passHref>
              <button className="font-lato font-bold text-lg md:text-base">
                Conditions
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Footer };
