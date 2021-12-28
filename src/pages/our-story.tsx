import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Layout,
  PartnerContent,
  Section,
  Slideshow,
  SlideshowItem,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";

const OurStory: PageLayoutProps = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (pageNum: number) => {
    const newDirection = page > pageNum ? -1 : 1;
    setPage([pageNum, newDirection]);
  };

  return (
    <>
      <Head>
        <title>Our Story - Engame</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="flex flex-col pt-10 items-center">
          <p className="text-center font-montserrat font-extrabold text-5xl md:text-6xl z-10">
            Our Story
          </p>
        </div>
      </Section>
      <div className="relative mb-10 hidden md:block">
        <Image
          src="/assets/images/02 Our story/EG---Landing-ourstory_top(D).jpg"
          alt="home-4"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
        <div className="h-60 lg:h-96"></div>
      </div>
      <div className="mb-10 block md:hidden">
        <Image
          src="/assets/images/02 Our story/EG---Landing-ourstory_top2(M).jpg"
          width={800}
          height={400}
          alt="home-1"
        />
      </div>
      <Section>
        <div className="flex flex-col items-center space-y-6 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Gaming Is One Of Those Things That&apos;s Pretty Amazing Because
            When You Think About It, Everybody wants to game.
          </p>
          <p className="text-center font-montserrat font-semibold text-2xl">
            The story of <span className="font-extrabold">Engame</span>{" "}
            originally started in 2015 with the merger of two passionate game
            making studios.
          </p>
        </div>
      </Section>
      <Section>
        {[
          {
            title: "Dec 2015",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pulvinar sit aenean nunc nunc gravida elit.",
          },
          {
            title: "Mar 2016",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pulvinar sit aenean nunc nunc gravida elit.",
          },
          {
            title: "May 2017",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pulvinar sit aenean nunc nunc gravida elit.",
          },
        ].map((i: { title: string; desc: string }, k) => {
          const even = k % 2 === 0;
          return (
            <div
              key={k}
              className={
                "flex flex-row md:space-x-6" +
                (even ? "" : " md:flex-row-reverse space-x md:space-x-reverse")
              }
            >
              <div className="flex-1 hidden md:block" />
              <div className="flex flex-col items-center mr-8 md:mr-0">
                <div
                  className={
                    "h-5 w-5 rounded-full border-4" +
                    (even ? " border-yellow-300" : " border-yellow-500")
                  }
                />
                <div
                  className={
                    "flex-1 h-20 w-1 border-2" +
                    (even ? " border-yellow-300" : " border-yellow-500")
                  }
                />
              </div>
              <div className="flex-1 flex flex-col mb-8">
                <p
                  className={
                    "font-montserrat font-extrabold text-4xl" +
                    (even ? "" : " md:text-right")
                  }
                >
                  {i.title}
                </p>
                <p
                  className={
                    "font-lato font-bold text-lg" +
                    (even ? "" : " md:text-right")
                  }
                >
                  {i.desc}
                </p>
              </div>
            </div>
          );
        })}
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 overflow-hidden border-yellow-400 rounded-2xl mb-10">
          <div className="flex flex-col space-y-8 p-8">
            <p className="font-montserrat font-extrabold text-4xl text-center md:text-left">
              Studio That Gamifies Consumer Engagement
            </p>
            <ol className="list-decimal pl-4 font-montserrat font-semibold text-sm xl:text-base">
              <li>
                Pioneer in offering Games as a Service - Tap Master to brands &
                businesses such as Tealive, Fave, Mydin and Herbalife
              </li>
              <li>Commercial Ready Game Winner of MDEC DiCE</li>
              <li>
                The only game studio selected by Maxis as one of the Top 100
                startups in Maxis Market Access Day
              </li>
              <li>
                Also developing on our own game “Rogue Planet”, scheduled to be
                launch in 5 years
              </li>
            </ol>
          </div>
          <div className="order-first md:order-none relative h-60 md:h-full">
            <Image
              src="/assets/images/02 Our story/EG---Landing-ourstory_milestone-1(M).jpg"
              alt="home-4"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </Section>
      <div className="relative">
        <Image
          src="/assets/images/EG---bg-2.jpg"
          alt="home-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Section zIndex="z-30">
          <p className="py-10 font-montserrat font-extrabold text-4xl text-center capitalize">
            <span className="underline underline-yellow">strategic plan</span>{" "}
            that defines a goal or desired outcome and includes the major steps
            or milestones needed to reach it.
          </p>
        </Section>
        <Section>
          <div className="flex flex-col space-y-10">
            <div className="w-full flex flex-row overflow-auto space-x-2 justify-center z-10">
              <button
                onClick={() => paginate(0)}
                className={
                  "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                  (page === 0 ? " bg-gray-300" : " hover:bg-gray-300")
                }
              >
                2021
              </button>
              <button
                onClick={() => paginate(1)}
                className={
                  "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                  (page === 1 ? " bg-gray-300" : " hover:bg-gray-300")
                }
              >
                2022
              </button>
              <button
                onClick={() => paginate(2)}
                className={
                  "px-4 py-1 rounded font-montserrat font-bold text-2xl" +
                  (page === 2 ? " bg-gray-300" : " hover:bg-gray-300")
                }
              >
                2023
              </button>
            </div>
            <div className="flex flex-col border-b">
              <Slideshow activeKey={page} direction={direction} page={page}>
                <SlideshowItem key={`1-slideshowitem`}>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/images/02 Our story/EG---Landing-ourstory_milestone-2(D).png"
                        width={800}
                        height={800}
                        alt="our-story-2"
                      />
                    </div>
                    <div>
                      {[
                        {
                          title: "Q1",
                          desc: (
                            <div>
                              <p className="text-xl">
                                New Merchant&apos;s Features
                              </p>
                              <ol className="pl-4 list-decimal font-normal">
                                <li>
                                  Enhancement Merchants&apos; template voucher –
                                  self-serve customizable feature
                                </li>
                                <li>
                                  Complete merchants&apos; enablement for
                                  self-serve competition-leaderboard setup
                                </li>
                                <li>Social media integration</li>
                              </ol>
                            </div>
                          ),
                        },
                        {
                          title: "Q2",
                          desc: (
                            <div className="space-y-4">
                              <div>
                                <p className="text-xl">
                                  New Merchant&apos;s Features
                                </p>
                                <ol className="pl-4 list-decimal font-normal">
                                  <li>In game advertising bidding system</li>
                                  <li>In built geo-location capabilities</li>
                                </ol>
                              </div>
                              <div>
                                <p className="text-xl">New Game Features</p>
                                <ol className="pl-4 list-decimal font-normal">
                                  <li>iOS Release</li>
                                </ol>
                              </div>
                            </div>
                          ),
                        },
                      ].map((i: { title: string; desc: JSX.Element }, k) => {
                        const even = k % 2 === 0;
                        return (
                          <div key={k} className={"flex flex-row md:space-x-6"}>
                            <div className="flex flex-col items-center mr-8 md:mr-0">
                              <div
                                className={
                                  "h-5 w-5 rounded-full border-4 border-yellow-300" +
                                  (even
                                    ? " border-yellow-300"
                                    : " border-yellow-500")
                                }
                              />
                              <div
                                className={
                                  "flex-1 h-20 w-1 border-2 border-yellow-300" +
                                  (even
                                    ? " border-yellow-300"
                                    : " border-yellow-500")
                                }
                              />
                            </div>
                            <div className="flex-1 flex flex-col mb-8">
                              <p
                                className={
                                  "font-montserrat font-extrabold text-4xl"
                                }
                              >
                                {i.title}
                              </p>
                              <div className={"font-lato font-bold text-lg"}>
                                {i.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SlideshowItem>
                <SlideshowItem key={`1-slideshowitem`}>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/images/02 Our story/EG---Landing-ourstory_milestone-2(D).png"
                        width={800}
                        height={800}
                        alt="our-story-2"
                      />
                    </div>
                    <div>
                      {[
                        {
                          title: "Q1",
                          desc: (
                            <div>
                              <p className="text-xl">
                                New Merchant&apos;s Features
                              </p>
                              <ol className="pl-4 list-decimal font-normal">
                                <li>
                                  Enhancement Merchants&apos; template voucher –
                                  self-serve customizable feature
                                </li>
                                <li>
                                  Complete merchants&apos; enablement for
                                  self-serve competition-leaderboard setup
                                </li>
                                <li>Social media integration</li>
                              </ol>
                            </div>
                          ),
                        },
                      ].map((i: { title: string; desc: JSX.Element }, k) => {
                        const even = k % 2 === 0;
                        return (
                          <div key={k} className={"flex flex-row md:space-x-6"}>
                            <div className="flex flex-col items-center mr-8 md:mr-0">
                              <div
                                className={
                                  "h-5 w-5 rounded-full border-4 border-yellow-300" +
                                  (even
                                    ? " border-yellow-300"
                                    : " border-yellow-500")
                                }
                              />
                              <div
                                className={
                                  "flex-1 h-20 w-1 border-2 border-yellow-300" +
                                  (even
                                    ? " border-yellow-300"
                                    : " border-yellow-500")
                                }
                              />
                            </div>
                            <div className="flex-1 flex flex-col mb-8">
                              <p
                                className={
                                  "font-montserrat font-extrabold text-4xl"
                                }
                              >
                                {i.title}
                              </p>
                              <div className={"font-lato font-bold text-lg"}>
                                {i.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SlideshowItem>
                <SlideshowItem key={`1-slideshowitem`}>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/images/02 Our story/EG---Landing-ourstory_milestone-2(D).png"
                        width={800}
                        height={800}
                        alt="our-story-2"
                      />
                    </div>
                    <div>
                      {[
                        {
                          title: "Q2",
                          desc: (
                            <div className="space-y-4">
                              <div>
                                <p className="text-xl">
                                  New Merchant&apos;s Features
                                </p>
                                <ol className="pl-4 list-decimal font-normal">
                                  <li>In game advertising bidding system</li>
                                  <li>In built geo-location capabilities</li>
                                </ol>
                              </div>
                              <div>
                                <p className="text-xl">New Game Features</p>
                                <ol className="pl-4 list-decimal font-normal">
                                  <li>iOS Release</li>
                                </ol>
                              </div>
                            </div>
                          ),
                        },
                      ].map((i: { title: string; desc: JSX.Element }, k) => {
                        const even = k % 2 === 0;
                        return (
                          <div key={k} className={"flex flex-row md:space-x-6"}>
                            <div className="flex flex-col items-center mr-8 md:mr-0">
                              <div
                                className={
                                  "h-5 w-5 rounded-full border-4 border-yellow-300" +
                                  (even
                                    ? " border-yellow-300"
                                    : " border-yellow-500")
                                }
                              />
                              <div
                                className={
                                  "flex-1 h-20 w-1 border-2 border-yellow-300" +
                                  (even
                                    ? " border-yellow-300"
                                    : " border-yellow-500")
                                }
                              />
                            </div>
                            <div className="flex-1 flex flex-col mb-8">
                              <p
                                className={
                                  "font-montserrat font-extrabold text-4xl"
                                }
                              >
                                {i.title}
                              </p>
                              <div className={"font-lato font-bold text-lg"}>
                                {i.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SlideshowItem>
              </Slideshow>
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="py-10 space-y-10">
          <div className="flex flex-col items-center">
            <p className="text-center font-montserrat font-extrabold text-4xl">
              Core Team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                image: "/assets/images/home-2.png",
                quote:
                  "“grow this studio to a place where creative game person from all around the world can gather.”",
                name: "Vincent Chong",
                title: "The Mastermind CEO",
              },
              {
                image: "/assets/images/home-2.png",
                quote:
                  "“games and engagement thru entertainment will bring about the next paradigm shift in technological evolution for new business.”",
                name: "Jasmine Ng",
                title: "Business Leader Co-founder",
              },
              {
                image: "/assets/images/home-2.png",
                quote:
                  "“Whether you&apos;re A casual gamer, OR you&apos;re an enthusiast, there&apos;s a large market for us.”",
                name: "Cham Lee",
                title: "The Archbishop CTO",
              },
            ].map(
              (
                i: {
                  title: string;
                  image: string;
                  quote: string;
                  name: string;
                },
                k
              ) => (
                <div
                  key={`team-${k}`}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="flex justify-center items-center mb-10">
                    <div className="max-w-xs flex justify-center">
                      <Image
                        src={i.image}
                        width={800}
                        height={800}
                        alt="home-2"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="flex-1 text-center md:text-left max-w-xs font-montserrat font-bold capitalize text-xl mb-4">
                    {i.quote}
                  </p>
                  <p className="text-center md:text-left max-w-xs font-montserrat font-bold capitalize text-2xl text-yellow-500 mb-4">
                    {i.name}
                  </p>
                  <p className="text-center md:text-left max-w-xs font-montserrat font-semibold capitalize text-xl">
                    {i.title}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </Section>
      <PartnerContent />
      <div className="relative">
        <Image
          src="/assets/images/EG---bg.jpg"
          alt="home-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Section zIndex="z-10">
          <div className="bg-white rounded-xl p-10 shadow-lg my-10">
            <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-8">
              <div className="flex flex-col space-y-2">
                <p className="text-center md:text-left font-montserrat font-bold text-3xl capitalize">
                  Are you interested to join us? Let&apos;s grow together!
                </p>
                <p className="text-center md:text-left font-lato text-xl">
                  Come and join us to grow your business together
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

OurStory.layout = Layout;

export default OurStory;
