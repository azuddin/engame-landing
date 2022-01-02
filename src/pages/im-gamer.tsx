import Head from "next/head";
import Image from "next/image";
import { Layout, Section, TrendingGame } from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import "react-multi-carousel/lib/styles.css";

const ImGamer: PageLayoutProps = () => {
  return (
    <>
      <Head>
        <title>I&apos;m Gamer - Engame</title>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-0">
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                You can do that now with tap master
              </p>
              <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                Play game Now
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                <Image
                  src="/assets/images/04 Gamer/EG---Landing-gamer_top-main(D).png"
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
        <div className="flex flex-col items-center space-y-10 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Remember exchanging prizes with tickets in arcade
          </p>
          <p className="text-center font-montserrat font-semibold text-2xl capitalize">
            An online arcade game center where you can redeem and win real
            rewards from our vendors. It&apos;s totally{" "}
            <span className="font-extrabold">free to play and win</span>! Come
            join us today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
            {[
              {
                title: "30+ games for maximum excitement!",
                imageUrl:
                  "/assets/images/04 Gamer/EG---Landing-gamer_icon-1(D).png",
              },
              {
                title: "Endless fun with multiplayer!",
                imageUrl:
                  "/assets/images/04 Gamer/EG---Landing-gamer_icon-2(D).png",
              },
              {
                title: "Free to play and win voucher!",
                imageUrl:
                  "/assets/images/04 Gamer/EG---Landing-gamer_icon-3(D).png",
              },
            ].map((i, k) => (
              <div
                key={`why-${k}`}
                className="flex flex-col justify-start items-center border-2 border-yellow-400 rounded-2xl px-8 py-6"
              >
                <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4">
                  <Image
                    src={i.imageUrl}
                    width={800}
                    height={800}
                    alt="home-2"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center font-montserrat font-bold text-3xl md:text-xl capitalize">
                  {i.title}
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
                src="/assets/images/01 Home/EG---Landing-home_info(D).png"
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
            <button className="absolute bottom-8 w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
              Play game Now
            </button>
          </div>
        </div>
      </Section>
      <TrendingGame />
      <div className="relative bg-white">
        <div className="absolute bottom-0 top-auto h-5/6 md:h-2/3 w-full">
          <Image
            src="/assets/images/EG---bg.jpg"
            alt="home-4"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <Section zIndex="z-10">
          <div className="flex flex-col items-center py-10 space-y-8">
            <p className="text-center font-montserrat font-extrabold text-4xl">
              Hot Vouchers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {[
                {
                  image: "/assets/images/home-2.png",
                  title: "Buy 100g for RM2 Deal",
                  desc: "Twinbow",
                  point: "200",
                  progress: "w-1/2",
                  redeemed: "10",
                },
                {
                  image: "/assets/images/home-2.png",
                  title: "15% off Voucher",
                  desc: "Call me baby",
                  point: "200",
                  progress: "w-1/2",
                  redeemed: "10",
                },
                {
                  image: "/assets/images/home-2.png",
                  title: "50% off Voucher",
                  desc: "Call me baby",
                  point: "200",
                  progress: "w-1/4",
                  redeemed: "10",
                },
              ].map((i, k) => (
                <div
                  key={`voucher-${k}`}
                  className="flex flex-col border overflow-hidden bg-white rounded-xl shadow-lg md:rounded"
                >
                  <div className="flex justify-center">
                    <div className="flex-grow flex justify-center items-center relative h-56">
                      <Image
                        src={i.image}
                        alt="home-4"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                  </div>
                  <div className="flex-1 font-montserrat px-4 py-6 flex flex-col justify-between">
                    <div>
                      <p className="font-bold text-xl">{i.title}</p>
                      <p className="text-xl mb-4">{i.desc}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-xl">
                        <span className="text-yellow-400 font-bold">
                          {i.point}
                        </span>{" "}
                        points
                      </p>
                      <div className="relative pt-1 mb-4">
                        <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-200">
                          <div
                            className={
                              "rounded-full shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 " +
                              i.progress
                            }
                          ></div>
                        </div>
                      </div>
                      <p className="text-sm">{i.redeemed} redeemed</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section zIndex="z-10">
          <div className="bg-white rounded-xl p-10 shadow-lg my-10">
            <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-8">
              <div className="flex flex-col space-y-2">
                <p className="text-center md:text-left font-montserrat font-bold text-3xl capitalize">
                  Are you interested to win more voucher? Let&apos;s play now!
                </p>
                <p className="text-center md:text-left font-lato text-xl">
                  <span className="font-bold">FREE</span> to enjoy the multi fun
                  game now.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

ImGamer.layout = Layout;

export default ImGamer;
