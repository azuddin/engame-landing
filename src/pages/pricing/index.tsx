import Head from "next/head";
import { useRouter } from "next/router";
import {
  Layout,
  PartnerContent,
  Section,
  SubscribePlan,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";

const Pricing: PageLayoutProps = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>Pricing - Engame</title>
        <meta
          name="Sell More With Tap Master"
          content="Sell More With Tap Master"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: `url("/assets/images/EG---bg.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          perspective: "5px",
        }}
      >
        <div className="relative">
          <Section bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-1 text-4xl">
                  Start Your Free Trial Today!
                </p>
                <p className="text-center md:text-left font-montserrat font pb-4 text-xl">
                  Enjoy Unlimited Access to All Premium Features for up to{" "}
                  <span className="font-bold">30 days!</span> Revolutionise your
                  Business today with Tap Master!
                </p>
                <p className="w-full md:w-72 px-5 py-2 border border-gray-100 bg-gray-100 text-black rounded-full font-montserrat font-bold text-center">
                  Subscribe your plan now!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
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
      </div>
    </>
  );
};

Pricing.layout = Layout;

export default Pricing;
