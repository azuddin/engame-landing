import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Image from "next/image";

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
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center md:text-left">Why choose us</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
            <div className="flex flex-col justify-start items-center border rounded p-4">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
              <p className="text-center">Increase sales & Leads</p>
              <p className="text-center max-w-xs">
                Having your own games on your platform that funnels in new
                customers and retaining them
              </p>
            </div>
            <div className="flex flex-col justify-start items-center border rounded p-4">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
              <p className="text-center">Improved customer experience</p>
              <p className="text-center max-w-xs">
                Engaging and understanding customers is easier than ever before
                with games and data
              </p>
            </div>
            <div className="flex flex-col justify-start items-center border rounded p-4">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
              <p className="text-center">increase brand stickiness</p>
              <p className="text-center max-w-xs">
                With your brand and products featured in games, your brand will
                be all over their heads
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-2 md:space-y-0 py-10">
          <div className="flex flex-col md:w-3/4 items-center justify-center md:items-start space-y-6 md:space-y-2">
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
          <div className="flex-grow flex justify-center items-center">
            <Image
              src="/assets/images/home-4.png"
              width={1022}
              height={766}
              alt="home-4"
              className="rounded-3xl"
            />
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex-grow flex justify-center items-center bg-black rounded">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
            </div>
            <p>Send your vouchers to us on our website</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-grow flex justify-center items-center bg-black rounded">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
            </div>
            <p>Send your vouchers to us on our website</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-grow flex justify-center items-center bg-black rounded">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
            </div>
            <p>Send your vouchers to us on our website</p>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-200">
        <div className="flex-grow flex justify-center items-center bg-black rounded">
          <div className="h-20 w-20 rounded bg-gray-400"></div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col items-center">
          <p>Subscribe your plan now!</p>
          <p>
            Interested to find out what Games as a Service can do to your
            business? Subscribe to our basic starter package for FREE today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="bg-white rounded border shadow p-4 flex flex-col justify-between">
            <div className="flex flex-col">
              <p>Basic Starter</p>
              <p>
                <span>FREE</span>/annual
              </p>
              <p>
                Empowering users to manage their electronic health record in a
                secure & interoperable manner
              </p>
              <ol className="list-decimal pl-4">
                <li>Access to GaaS player base</li>
                <li>Voucher distribution</li>
                <li>Fixed game challenges</li>
                <li>Free business package trial</li>
              </ol>
            </div>
            <button className="w-full px-2 py-1 text-base bg-black text-white rounded">
              Choose plan
            </button>
          </div>
          <div className="bg-white rounded border shadow p-4 flex flex-col justify-between">
            <div className="flex flex-col">
              <p>Business</p>
              <p>
                <span>RM299</span>/annual
              </p>
              <p>
                Empowering users to manage their electronic health record in a
                secure & interoperable manner
              </p>
              <ol className="list-decimal pl-4">
                <li>Access to GaaS player base</li>
                <li>Voucher distribution</li>
                <li>Voucher optimization</li>
                <li>Featuring your brand in game</li>
                <li>Featuring your product in game</li>
                <li>Fixed game challenges</li>
              </ol>
            </div>
            <button className="w-full px-2 py-1 text-base bg-black text-white rounded">
              Choose plan
            </button>
          </div>
          <div className="bg-white rounded border shadow p-4 flex flex-col justify-between">
            <div className="flex flex-col">
              <p>Professional</p>
              <p>
                <span>RM599</span>/annual
              </p>
              <p>
                Empowering users to manage their electronic health record in a
                secure & interoperable manner
              </p>
              <ol className="list-decimal pl-4">
                <li>Access to GaaS player base</li>
                <li>Voucher distribution</li>
                <li>Voucher optimization</li>
                <li>Featuring your brand in game</li>
                <li>Featuring your product in game</li>
                <li>Featuring your competition in game</li>
                <li>Custom game challenges</li>
              </ol>
            </div>
            <button className="w-full px-2 py-1 text-base bg-black text-white rounded">
              Choose plan
            </button>
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
