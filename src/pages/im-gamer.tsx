import Head from "next/head";
import { Layout, Section, TrendingGame } from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-0">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                  Tap Master, Play the Games, Enjoy the Rewards!
                </p>
                <Link href="https://tapmaster.engame.asia" passHref>
                <button className="w-full md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                Play Tap Master Now!
                </button>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
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
              Tired of games that earn you nothing? Join Tap Master Now!
            </p>
            <p className="text-center font-montserrat font-semibold text-2xl capitalize">
            Tap Master is more than just fun. We are an {" "}<span className="font-extrabold">FREE</span> online arcade centre where allows you to earn real-life rewards while enjoying arcade-type casual games! Join Us Now!               
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
              {[
                {
                  title: "30 FREE Arcade Games to Play!",
                  imageUrl:
                    "/assets/images/04 Gamer/EG---Landing-gamer_icon-1(D).png",
                },
                {
                  title: "Challenge others in Multiplayer Mode!",
                  imageUrl:
                    "/assets/images/04 Gamer/EG---Landing-gamer_icon-2(D).png",
                },
                {
                  title: "Play Games and Earn Exciting Vouchers!",
                  imageUrl:
                    "/assets/images/04 Gamer/EG---Landing-gamer_icon-3(D).png",
                },
              ].map((i, k) => (
                <div
                  key={`why-${k}`}
                  className="flex flex-col justify-start items-center border-2 border-yellow-400 rounded-2xl px-8 py-6"
                >
                  <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4 rounded-lg overflow-hidden">
                    <img
                      src={i.imageUrl}
                      width={800}
                      height={800}
                      alt="home-2"
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
              <div className="max-w-xs md:h-32 md:w-32 flex justify-center rounded-lg overflow-hidden">
                <img
                  src="/assets/images/01 Home/EG---Landing-home_info(D).png"
                  width={800}
                  height={800}
                  alt="home-2"
                />
              </div>
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                How to join the fun?
              </p>
              <ul className="w-full text-left font-lato text-lg space-y-2">
                {[
                  "Sign up with Google",
                  "Start playing & earning points!",
                  "Redeem vouchers!",
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
            <div
              style={{
                backgroundImage: "url('/assets/images/home-2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="flex-grow flex justify-center items-center relative h-96 rounded-3xl"
            >
              <button className="absolute bottom-8 w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                Play game Now
              </button>
            </div>
          </div>
        </Section>
        <TrendingGame />
        <div className="relative bg-white">
          <div
            style={{
              backgroundImage: "url('/assets/images/EG---bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute bottom-0 top-auto h-5/6 md:h-2/3 w-full"
          ></div>
          <Section zIndex="z-10">
            <div className="flex flex-col items-center py-10 space-y-8">
              <p className="text-center font-montserrat font-extrabold text-4xl">
                Hot Vouchers
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                {[
                  {
                    image: "/assets/images/voucher-twinbow.jpg",
                    title: "Buy 100g for RM2 Deal",
                    desc: "Twinbow",
                    point: "88",
                    progress: "w-1/3",
                    redeemed: "11",
                  },
                  {
                    image: "/assets/images/voucher-cmb15.jpeg",
                    title: "15% off Voucher",
                    desc: "Call me baby",
                    point: "88",
                    progress: "w-1/2",
                    redeemed: "18",
                  },
                  {
                    image: "/assets/images/voucher-cmb50.jpeg",
                    title: "50% off Voucher",
                    desc: "Call me baby",
                    point: "188",
                    progress: "w-1/4",
                    redeemed: "8",
                  },
                ].map((i, k) => (
                  <div
                    key={`voucher-${k}`}
                    className="flex flex-col border overflow-hidden bg-white rounded-xl shadow-lg md:rounded"
                  >
                    <div className="flex justify-center">
                      <div
                        style={{
                          backgroundImage: `url('${i.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="flex-grow flex justify-center items-center relative h-56"
                      ></div>
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
                    Games, Fun, Rewards!  Let&apos;s Play Now!
                  </p>
                  <p className="text-center md:text-left font-lato text-xl">
                    <span className="font-bold">START</span> tapping and winning now!
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                <Link href="https://tapmaster.engame.asia" passHref>
                  <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                    Play Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

ImGamer.layout = Layout;

export default ImGamer;
