import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const ImBrandOwner: NextPage = () => {
  return (
    <>
      <Head>
        <title>I'm Brand Owner - Engame</title>
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
              Unlock your business potential and grow up together with us!
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
        <div className="flex flex-col items-center space-y-10 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Why choose us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
            {[
              {
                title: "Increase sales & Leads",
                desc: "Having your own games on your platform that funnels in new customers and retaining them",
              },
              {
                title: "Improved customer experience",
                desc: "Engaging and understanding customers is easier than ever before with games and data",
              },
              {
                title: "increase brand stickiness",
                desc: "With your brand and products featured in games, your brand will be all over their heads",
              },
            ].map((i, k) => (
              <div
                key={`why-${k}`}
                className="flex flex-col justify-start items-center border rounded-2xl px-8 py-6"
              >
                <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4">
                  <Image
                    src="/assets/images/home-2.png"
                    width={800}
                    height={800}
                    alt="home-2"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center font-montserrat font-bold text-3xl md:text-xl capitalize mb-6">
                  {i.title}
                </p>
                <p className="text-center max-w-xs font-lato font-medium text-xl md:text-base capitalize">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
          <div className="flex flex-col md:w-1/3 items-center justify-center md:items-start space-y-6 md:space-y-2">
            <div className="max-w-xs md:h-32 md:w-32 flex justify-center">
              <Image
                src="/assets/images/home-2.png"
                width={800}
                height={800}
                alt="home-2"
                className="rounded-lg"
              />
            </div>
            <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
              How it work easier?
            </p>
            <p className="text-center md:text-left font-lato text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              netus et ut imperdiet et quisque donec
            </p>
          </div>
          <div className="flex-grow flex justify-center items-center relative h-96">
            <Image
              src="/assets/images/home-4.png"
              alt="home-4"
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10 md:gap-6 xl:gap-20">
          {[
            "Send your vouchers to us on our website",
            "Vouchers will be listed on our gaaS as challenges",
            "player will go through challenges to win vouchers",
            "Send your vouchers to us on our website",
            "Vouchers will be listed on our gaaS as challenges",
            "player will go through challenges to win vouchers",
          ].map((i, k) => (
            <div
              key={`brand-${k}`}
              className="flex flex-col items-center space-y-4"
            >
              <div className="max-w-xs flex justify-center">
                <Image
                  src="/assets/images/home-2.png"
                  width={800}
                  height={800}
                  alt="home-2"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center md:text-left font-montserrat font-bold text-3xl md:text-xl capitalize">
                {i}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="flex justify-center items-center py-10">
          <div className="h-96 w-full relative">
            <Image
              src="/assets/images/home-4.png"
              alt="home-4"
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
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
                <button className="w-full px-2 py-1 mt-6 text-base bg-black text-white rounded border border-black font-montserrat font-bold">
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
          <div className="w-full flex flex-row xl:justify-center overflow-auto space-x-2 pb-2">
            {/* `justify-center` will break if company more than 5 */}
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

export default ImBrandOwner;
