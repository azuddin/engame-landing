import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout, Section } from "@engame/components";
import { FiCheckCircle } from "react-icons/fi";
import { PageLayoutProps } from "src/types";

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
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:py-0">
          <div className="flex flex-col justify-center space-y-2">
            <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
              Get started now, pick a plan later.
            </p>
            <p className="text-center md:text-left font-lato pb-4 text-2xl">
              Try Engame <span className="font-bold">FREE</span> for 7 days and
              get unrestricted access to all our products and features.
            </p>
            <p className="w-full md:w-72 px-5 py-2 border border-gray-100 bg-gray-100 text-black rounded-full font-montserrat font-bold text-center">
              No credit card required
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
              <Image
                src="/assets/images/home-1.png"
                width={800}
                height={800}
                alt="home-1"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center py-10">
          <p className="text-center md:text-left font-montserrat font-extrabold text-4xl mb-4">
            Subscribe your plan now!
          </p>
          <p className="text-center max-w-lg font-lato font-medium text-xl capitalize mb-10">
            Interested to find out what Games as a Service can do to your
            business? Subscribe to our basic starter package for FREE today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
            {[
              {
                title: "Basic Starter",
                price: "FREE",
                desc: "Empowering users to manage their electronic health record in a secure & interoperable manner",
                descList: [
                  "Access to GaaS player base",
                  "Voucher distribution",
                  "Fixed game challenges",
                  "Free business package trial",
                ],
              },
              {
                title: "Business",
                price: "RM299",
                desc: "Empowering users to manage their electronic health record in a secure & interoperable manner",
                descList: [
                  "Access to GaaS player base",
                  "Voucher distribution",
                  "Voucher optimization",
                  "Featuring your brand in game",
                  "Featuring your product in game",
                  "Fixed game challenges",
                ],
                isPopular: true,
              },
              {
                title: "Professional",
                price: "RM599",
                desc: "Empowering users to manage their electronic health record in a secure & interoperable manner",
                descList: [
                  "Access to GaaS player base",
                  "Voucher distribution",
                  "Voucher optimization",
                  "Featuring your brand in game",
                  "Featuring your product in game",
                  "Featuring your competition in game",
                  "Custom game challenges",
                ],
              },
            ].map((i, k) => (
              <div
                key={`pricing-${k}`}
                className="bg-white rounded-2xl border shadow-lg p-4 flex flex-col justify-between relative"
              >
                {i?.isPopular && (
                  <div className="w-20 absolute top-0 right-0 overflow-hidden inline-block rounded-tr-2xl">
                    <div className="h-20 bg-black transform rotate-45 origin-bottom-right flex-1 flex items-end -ml-8 px-8">
                      <p className="text-center text-white capitalize font-montserrat font-bold text-xs">
                        popular choice
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col space-y-4">
                  <p className="text-left font-montserrat font-bold text-xl capitalize">
                    {i.title}
                  </p>
                  <p className="text-left font-lato font-thin text-xl">
                    <span className="font-montserrat font-bold text-3xl">
                      {i.price}
                    </span>
                    /annual
                  </p>
                  <p className="text-left font-lato">{i.desc}</p>
                  <ol>
                    {i.descList.map((li, key) => (
                      <li
                        key={`descList-${k}`}
                        className="flex space-x-2 text-left font-lato font-bold"
                      >
                        <span className="text-green-500 text-lg pt-1">
                          <FiCheckCircle />
                        </span>
                        <p>{li}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <button
                  onClick={() => push("/pricing/payment")}
                  className="w-full px-2 py-1 mt-6 text-base bg-black text-white rounded border border-black font-montserrat font-bold"
                >
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center py-10 space-y-8">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Partnered with the world’s best companies
          </p>
          <div className="w-full flex flex-row overflow-auto space-x-4 pb-2">
            {[
              "/assets/images/company-1.png",
              "/assets/images/company-2.png",
              "/assets/images/company-3.png",
              "/assets/images/company-4.png",
              "/assets/images/company-5.png",
            ].map((i, k) => (
              <div
                key={k}
                className="flex flex-col min-w-max cursor-pointer filter grayscale hover:grayscale-0"
              >
                <div className="flex flex-col w-52">
                  <Image
                    src={i}
                    width={320}
                    height={225}
                    alt="home-5"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

Pricing.layout = Layout;

export default Pricing;
