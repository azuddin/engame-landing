import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Link from "next/link";

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Engame Landing</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section bgColor="bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start items-center md:items-start space-y-2">
            <p className="text-center md:text-left">
              Get started now, pick a plan later.
            </p>
            <p className="text-center md:text-left">
              Try Engame FREE for 7 days and get unrestricted access to all our
              products and features.
            </p>
            <div className="flex flex-col items-start">
              <p className="text-center md:text-left bg-white text-xs font-bold px-8 py-1 rounded-full">
                No credit card required
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 bg-gray-400 rounded"></div>
          </div>
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
      <Section bgColor="bg-gray-200">
        <div className="flex flex-col items-center">
          <p>Partnered with the world’s best companies</p>
          <div className="w-full flex flex-row overflow-auto space-x-2 pb-2">
            {[...Array(10)].map((i, k) => (
              <div key={k} className="flex flex-col">
                <div className="h-20 w-20 rounded bg-gray-400"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Pricing;
