import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Link from "next/link";

const ImGamer: NextPage = () => {
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
          <div className="flex flex-col justify-start space-y-2">
            <p className="text-center md:text-left">
              You can do that now with tap master
            </p>
            <button className="w-full md:w-40 border border-black bg-black text-white rounded">
              Play game Now
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 bg-gray-400 rounded"></div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center">
            Remember exchanging prizes with tickets in arcade
          </p>
          <p className="text-center">
            An online arcade game center where you can redeem and win real
            rewards from our vendors. It's totally free to play and win! Come
            join us today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
            <div className="flex flex-col justify-start items-center border rounded p-4">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
              <p className="text-center max-w-xs">
                30+ games for maximum excitement!
              </p>
            </div>
            <div className="flex flex-col justify-start items-center border rounded p-4">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
              <p className="text-center max-w-xs">
                Endless fun with multiplayer!
              </p>
            </div>
            <div className="flex flex-col justify-start items-center border rounded p-4">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
              <p className="text-center max-w-xs">
                Free to play and win voucher!
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-200">
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
          <div className="flex flex-col md:w-1/3 items-center md:items-start">
            <div className="h-20 w-20 rounded bg-gray-400 mb-2 md:mt-2 md:mb-0"></div>
            <p className="text-center md:text-left">How to join the fun?</p>
            <p className="text-center md:text-left">Fill up your details</p>
            <p className="text-center md:text-left">
              Start playing game & earn points
            </p>
            <p className="text-center md:text-left">Redeem rewards</p>
          </div>
          <div className="flex-grow flex justify-center items-center bg-white rounded relative">
            <div className="h-20 w-20 rounded bg-gray-400"></div>
            <button className="absolute bottom-4 px-2 py-1 text-base bg-black text-white rounded">
              Play game Now
            </button>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col items-center">
          <p>Trending Games</p>
          <div className="w-full flex flex-row overflow-auto space-x-2 pb-2">
            {[...Array(8)].map((i, k) => (
              <div key={k} className="flex flex-col">
                <div className="h-28 w-28 rounded bg-gray-400"></div>
                <p>Legendary moai</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-100">
        <div className="flex flex-col items-center">
          <p>Hot Vouchers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded flex flex-col border pb-4 overflow-hidden">
              <div className="flex justify-center">
                <div className="h-28 w-full bg-gray-400"></div>
              </div>
              <div className="px-4 ">
                <p>Buy 100g for RM2 Deal</p>
                <p>Twinbow</p>
                <p>200 points</p>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                    <div className="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded flex flex-col border pb-4 overflow-hidden">
              <div className="flex justify-center">
                <div className="h-28 w-full bg-gray-400"></div>
              </div>
              <div className="px-4 ">
                <p>Buy 100g for RM2 Deal</p>
                <p>Twinbow</p>
                <p>200 points</p>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                    <div className="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded flex flex-col border pb-4 overflow-hidden">
              <div className="flex justify-center">
                <div className="h-28 w-full bg-gray-400"></div>
              </div>
              <div className="px-4 ">
                <p>Buy 100g for RM2 Deal</p>
                <p>Twinbow</p>
                <p>200 points</p>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                    <div className="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="bg-white rounded p-4 shadow">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p>Are you interested to join us? Let’s grow together!</p>
              <p>Come and join us to grow your business together</p>
            </div>
            <div className="flex flex-col justify-center">
              <button className="px-2 py-1 text-base bg-black text-white rounded">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ImGamer;
