import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Image from "next/image";

const ImGamer: NextPage = () => {
  return (
    <>
      <Head>
        <title>I'm Gamer - Engame</title>
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
              You can do that now with tap master
            </p>
            <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
              Play game Now
            </button>
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
            Remember exchanging prizes with tickets in arcade
          </p>
          <p className="text-center font-montserrat font-semibold text-2xl capitalize">
            An online arcade game center where you can redeem and win real
            rewards from our vendors. It's totally{" "}
            <span className="font-extrabold">free to play and win</span>! Come
            join us today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
            {[
              "30+ games for maximum excitement!",
              "Endless fun with multiplayer!",
              "Free to play and win voucher!",
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
                <p className="text-center font-montserrat font-bold text-3xl md:text-xl capitalize">
                  {i}
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
              How to join the fun?
            </p>
            <ul className="w-full text-left font-lato text-lg space-y-2">
              {[
                "Fill up your details",
                "Start playing game & earn points",
                "Redeem rewards",
              ].map((i, k) => {
                const isOdd = k % 2 === 0;
                return (
                  <li
                    key={`fun-list-${k}`}
                    className={
                      " px-4 py-2 rounded-lg" + (isOdd ? " " : " bg-gray-200")
                    }
                  >
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-grow flex justify-center items-center relative h-96">
            <Image
              src="/assets/images/home-2.png"
              alt="home-4"
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <button className="absolute bottom-8 w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
              Play game Now
            </button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center space-y-5 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Trending Games
          </p>
          <div className="w-full flex flex-row overflow-auto space-x-4 pb-2">
            {[
              { name: "Legendary moai", image: "/assets/images/home-5.png" },
              { name: "The largest one", image: "/assets/images/game-2.png" },
              { name: "Deep blue sea", image: "/assets/images/game-3.png" },
              {
                name: "Scissors rock paper",
                image: "/assets/images/game-4.png",
              },
              { name: "Super fast food", image: "/assets/images/home-5.png" },
              { name: "Legendary moai", image: "/assets/images/home-5.png" },
              { name: "The largest one", image: "/assets/images/game-2.png" },
              { name: "Deep blue sea", image: "/assets/images/game-3.png" },
              {
                name: "Scissors rock paper",
                image: "/assets/images/game-4.png",
              },
              { name: "Super fast food", image: "/assets/images/home-5.png" },
            ].map((i, k) => (
              <div key={k} className="flex flex-col min-w-max">
                <div className="flex flex-col w-52">
                  <Image
                    src={i.image}
                    width={320}
                    height={225}
                    alt="home-5"
                    className="rounded-lg"
                  />
                </div>
                <p className="w-44 font-montserrat font-bold text-lg md:text-lg truncate">
                  {i.name}
                </p>
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
      <Section>
        <div className="bg-white rounded-xl p-10 shadow-lg my-10">
          <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-2">
              <p className="text-center md:text-left font-montserrat font-bold text-3xl capitalize">
                Are you interested to win more voucher? Let’s play now!
              </p>
              <p className="text-center md:text-left font-lato text-xl">
                <span className="font-bold">FREE</span> to enjoy the multi fun
                game now.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ImGamer;
