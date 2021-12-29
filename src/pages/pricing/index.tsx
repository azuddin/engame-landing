import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Layout,
  PartnerContent,
  Section,
  SubscribePlan,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import { FiCheckCircle } from "react-icons/fi";

const Pricing: PageLayoutProps = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>Pricing - Engame</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Image
          src="/assets/images/EG---bg.jpg"
          alt="home-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Section zIndex="z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                Get started now, pick a plan later.
              </p>
              <p className="text-center md:text-left font-lato pb-4 text-2xl">
                Try Engame <span className="font-bold">FREE</span> for 7 days
                and get unrestricted access to all our products and features.
              </p>
              <p className="w-full md:w-72 px-5 py-2 border border-gray-100 bg-gray-100 text-black rounded-full font-montserrat font-bold text-center">
                No credit card required
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                <Image
                  src="/assets/images/08 Pricing/EG---Landing-pricing_top-main(D).png"
                  width={800}
                  height={800}
                  alt="home-1"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="h-20"></div>
      </Section>
      <SubscribePlan
        backgroundImage
        backgroundImageUrl="/assets/images/EG---bg-2.jpg"
      />
      <PartnerContent />
    </>
  );
};

Pricing.layout = Layout;

export default Pricing;
