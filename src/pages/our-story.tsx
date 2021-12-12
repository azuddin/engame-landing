import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout, Section } from "@engame/components";
import { PageLayoutProps } from "src/types";

const TEAM_LIST = [
  {
    avatar: "/assets/images/home-2.png",
    name: "Vincent Chong",
    title: "The Mastermind CEO",
    quoat:
      "“grow this studio to a place where creative game person from all around the world can gather.”",
  },
  {
    avatar: "/assets/images/home-2.png",
    name: "Jasmine Ng",
    title: "Business Leader Co-founder",
    quoat:
      "“games and engagement thru entertainment will bring about the next paradigm shift in technological evolution for new business.”",
  },
  {
    avatar: "/assets/images/home-2.png",
    name: "Cham Lee",
    title: "The Archbishop CTO",
    quoat:
      "“Whether you’re A casual gamer, OR you’re an enthusiast, there’s a large market for us.”",
  },
];

const OurStory: PageLayoutProps = () => {
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
        <div className="flex flex-col -space-y-4 py-10 items-center">
          <p className="text-center font-montserrat font-extrabold text-5xl md:text-6xl z-10">
            Our Story
          </p>
          <div className="flex justify-center mb-8 md:mt-8 md:mb-0 max-w-4xl">
            <Image
              src="/assets/images/home-3.png"
              width={1596}
              height={789}
              alt="home-1"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center space-y-6 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Gaming Is One Of Those Things That’s Pretty Amazing Because When You
            Think About It, Everybody wants to game.
          </p>
          <p className="text-center font-montserrat font-semibold text-2xl">
            The story of <span className="font-bold">Engame</span> originally
            started in 2015 with the merger of two passionate game making
            studios.
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
        ].map((i, k) => {
          const even = k % 2 === 0;
          return (
            <div
              key={k}
              className={
                "flex flex-row md:space-x-6" +
                (even ? "" : " md:flex-row-reverse space-x md:space-x-reverse")
              }
            >
              <p className="flex-1 hidden md:block"></p>
              <div className="flex flex-col items-center mr-8 md:mr-0">
                <div
                  className={
                    "h-5 w-5 rounded-full border-4" +
                    (even ? " border-yellow-300" : " border-yellow-500")
                  }
                ></div>
                <div
                  className={
                    "flex-1 h-20 w-1 border-2" +
                    (even ? " border-yellow-300" : " border-yellow-500")
                  }
                ></div>
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
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 bg-yellow-100 rounded-2xl p-8 mb-10">
          <div className="flex-1 flex flex-col space-y-8">
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
          <div className="flex-1 flex justify-center items-center">
            <div className="flex justify-center mb-8 md:mt-8 md:mb-0 max-w-4xl">
              <Image
                src="/assets/images/our-story-1.png"
                width={374}
                height={361}
                alt="our-story-2"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <p className="py-10 font-montserrat font-extrabold text-4xl text-center capitalize">
          <span className="underline underline-yellow">strategic plan</span>{" "}
          that defines a goal or desired outcome and includes the major steps or
          milestones needed to reach it.
        </p>
      </Section>
      <Section>
        <div className="flex flex-col space-y-10">
          <div className="w-full flex flex-row overflow-auto space-x-2 justify-center">
            <p className="bg-gray-300 px-4 py-1 rounded font-montserrat font-bold text-2xl">
              2021
            </p>
            <p className="bg-gray-300 px-4 py-1 rounded font-montserrat font-bold text-2xl">
              2022
            </p>
            <p className="bg-gray-300 px-4 py-1 rounded font-montserrat font-bold text-2xl">
              2023
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center md:hidden">
            <Image
              src="/assets/images/our-story-2.png"
              width={374}
              height={361}
              alt="our-story-2"
            />
          </div>
          <div className="flex flex-col border-b">
            {[
              {
                title: "Q1",
                desc: (
                  <>
                    <p className="text-xl">New Merchant’s Features</p>
                    <ol className="pl-4 list-decimal font-normal">
                      <li>
                        Enhancement Merchants’ template voucher – self-serve
                        customizable feature
                      </li>
                      <li>
                        Complete merchants’ enablement for self-serve
                        competition-leaderboard setup
                      </li>
                      <li>Social media integration</li>
                    </ol>
                  </>
                ),
              },
              {
                title: "Q2",
                desc: (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xl">New Merchant’s Features</p>
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
            ].map((i, k) => {
              const even = k % 2 === 0;
              return (
                <div key={k} className="flex flex-row md:space-x-6">
                  <p className="flex-1 hidden md:block"></p>
                  <div className="flex flex-col items-center mr-8 md:mr-0">
                    <div
                      className={
                        "h-5 w-5 rounded-full border-4 border-yellow-300" +
                        (even ? " border-yellow-300" : " border-yellow-500")
                      }
                    ></div>
                    <div
                      className={
                        "flex-1 h-20 w-1 border-2 border-yellow-300" +
                        (even ? " border-yellow-300" : " border-yellow-500")
                      }
                    ></div>
                  </div>
                  <div className="flex-1 flex flex-col mb-8">
                    <p className="font-montserrat font-extrabold text-4xl">
                      {i.title}
                    </p>
                    <p className="font-lato font-bold text-lg">{i.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
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
                  "“Whether you’re A casual gamer, OR you’re an enthusiast, there’s a large market for us.”",
                name: "Cham Lee",
                title: "The Archbishop CTO",
              },
            ].map((i, k) => (
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
      <Section>
        <div className="bg-white rounded-xl p-10 shadow-lg my-10">
          <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-2">
              <p className="text-center md:text-left font-montserrat font-bold text-3xl capitalize">
                Are you interested to join us? Let’s grow together!
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
    </>
  );
};

OurStory.layout = Layout;

export default OurStory;
