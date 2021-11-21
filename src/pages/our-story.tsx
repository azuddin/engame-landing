import { Container, Heading, CardTimeline } from "@engame/components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const OurStory: NextPage = () => {
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
      <div id="content" className="space-y-16 md:space-y-24">
        <section id="our-story" className="space-y-2 lg:space-y-10">
          <Container>
            <div className="flex items-center justify-center h-12 relative">
              <div className="absolute z-10 top-0">
                <Heading level={1} size="text-6xl lg:text-9xl">
                  Our Story
                </Heading>
              </div>
            </div>
          </Container>
          <div id="jumbo" className="flex justify-center">
            <Image
              src="/assets/images/home-3.png"
              width={1600}
              height={791}
              alt="home-3"
            />
          </div>
        </section>
        <section id="game-is-one" className="">
          <Container>
            <div className="space-y-10">
              <Heading level={2} capitalize size="text-4xl">
                Gaming Is One Of Those Things That’s Pretty Amazing Because When
                You Think About It, Everybody wants to game.
              </Heading>
              <p className="font-montserrat text-4xl font-semibold text-center">
                The story of <span className="font-extrabold">Engame</span>{" "}
                originally started in 2015 with the merger of two passionate
                game making studios.
              </p>
              <div className="flex flex-col">
                <CardTimeline
                  title="Dec 2015"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna pulvinar sit aenean nunc nunc gravida elit."
                  border="border-yellow-300"
                  isDoubleSide
                />
                <CardTimeline
                  title="Mar 2016"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna pulvinar sit aenean nunc nunc gravida elit."
                  border="border-yellow-500"
                  isDoubleSide
                  isOrderReverse
                />
                <CardTimeline
                  title="May 2017"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna pulvinar sit aenean nunc nunc gravida elit."
                  border="border-yellow-300"
                  isDoubleSide
                />
                <div className="bg-yellow-100 rounded-3xl w-full py-20 md:p-8">
                  <div className="flex flex-col space-y-10 md:flex-row-reverse md:space-y-0 md:space-x-4 md:space-x-reverse">
                    <div className="flex items-center justify-center md:flex-1">
                      <Image
                        src="/assets/images/our-story-1.png"
                        width={367}
                        height={318}
                        alt="our-story-1"
                      />
                    </div>
                    <div className="flex flex-col px-8 md:px-0 space-y-8 md:flex-1 md:space-y-4">
                      <Heading
                        level={1}
                        size="text-4xl md:text-3xl"
                        align="text-center md:text-left"
                        overflowEllipsis
                      >
                        Studio That Gamifies Consumer Engagement
                      </Heading>
                      <ol className="list-decimal space-y-2 pl-8 md:pl-4">
                        <li className="font-montserrat text-2xl md:text-sm text-center md:text-left font-semibold capitalize">
                          Pioneer in offering Games as a Service - Tap Master to
                          brands &amp; businesses such as Tealive, Fave, Mydin
                          and Herbalife
                        </li>
                        <li className="font-montserrat text-2xl md:text-sm text-center md:text-left font-semibold capitalize">
                          Commercial Ready Game Winner of MDEC DiCE
                        </li>
                        <li className="font-montserrat text-2xl md:text-sm text-center md:text-left font-semibold capitalize">
                          The only game studio selected by Maxis as one of the
                          Top 100 startups in Maxis Market Access Day
                        </li>
                        <li className="font-montserrat text-2xl md:text-sm text-center md:text-left font-semibold capitalize">
                          Also developing on our own game “Rogue Planet”,
                          scheduled to be launch in 5 years
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="strategic-plan" className="space-y-20 flex flex-col">
          <Container>
            <Heading level={1} size="text-4xl" capitalize>
              <span className="underline underline-yellow">strategic plan</span>{" "}
              that defines a goal or desired outcome and includes the major
              steps or milestones needed to reach it.
            </Heading>
          </Container>
          <div className="flex overflow-auto space-x-6 md:justify-center">
            {[2021, 2022, 2023].map((val, key) => (
              <button
                key={`year-${key}`}
                className={
                  "rounded-2xl text-black font-montserrat font-bold text-3xl py-2 px-8 hover:bg-gray-200 " +
                  (key % 2 !== 0 && " bg-gray-200")
                }
              >
                <Heading
                  level={4}
                  size="text-3xl"
                  weight="font-bold"
                  align="text-center"
                  truncate
                >
                  {val}
                </Heading>
              </button>
            ))}
          </div>
          <Container>
            <div className="space-y-20 flex flex-col md:flex-row md:space-y-0 md:space-x-10">
              <div className="flex items-center justify-center md:flex-1">
                <Image
                  src="/assets/images/our-story-2.png"
                  width={374}
                  height={361}
                  alt="our-story-2"
                />
              </div>
              <div className="flex flex-col md:flex-1">
                <CardTimeline title="Q1" border="border-yellow-300">
                  <p className="font-montserrat text-2xl font-bold">
                    New Merchant’s Features
                  </p>
                  <div className="pl-6">
                    <ol className="list-decimal font-lato text-2xl">
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
                  </div>
                </CardTimeline>
                <CardTimeline title="Q2" border="border-yellow-400">
                  <div className="space-y-8">
                    <div>
                      <p className="font-montserrat text-2xl font-bold">
                        New Merchant’s Features
                      </p>
                      <div className="pl-6">
                        <ol className="list-decimal font-lato text-2xl">
                          <li>In game advertising bidding system</li>
                          <li>In built geo-location capabilities</li>
                          <li>Social media integration</li>
                        </ol>
                      </div>
                    </div>
                    <div>
                      <p className="font-montserrat text-2xl font-bold">
                        New Game Features
                      </p>
                      <div className="pl-6">
                        <ol className="list-decimal font-lato text-2xl">
                          <li>iOS Release</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </CardTimeline>
              </div>
            </div>
            <div className="border"></div>
          </Container>
        </section>
        <section id="core-team" className="space-y-16">
          <Container>
            <div className="mt-20">
              <Heading level={1} size="text-4xl" capitalize>
                Core Team
              </Heading>
            </div>
          </Container>
          <div className="space-y-10">
            <div className="flex justify-center">
              <Image
                src="/assets/images/home-2.png"
                width={769}
                height={769}
                alt="home-2"
                className="md:rounded-3xl"
              />
            </div>
            <Container>
              <div className="space-y-6">
                <Heading
                  level={3}
                  size="text-3xl"
                  weight="font-bold"
                  capitalize
                >
                  “grow this studio to a place where creative game person from
                  all around the world can gather.”
                </Heading>
                <Heading level={3} size="text-4xl" color="text-yellow-400">
                  Vincent Chong
                </Heading>
                <p className="font-montserrat font-bold text-2xl text-center">
                  The Mastermind CEO
                </p>
              </div>
            </Container>
            <div className="flex justify-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </section>
        <section id="our-partner" className="">
          <Container>
            <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize md:text-5xl">
              Partnered with the world’s best companies
            </h3>
          </Container>
          <div className="flex overflow-auto">
            {[...Array(5)].map((index, key) => (
              <div key={`partner-${key}`} className="w-72">
                <Image
                  src="/assets/images/home-6.png"
                  width={300}
                  height={225}
                  alt="home-2"
                  layout="fixed"
                />
              </div>
            ))}
          </div>
        </section>
        <section id="are-you-interested" className="">
          <Container>
            <div className="border border-gray-50 rounded-3xl shadow-xl px-8 py-14 space-y-8 flex flex-col md:flex-row md:justify-between md:space-x-10 md:space-y-0">
              <div className="flex flex-col space-y-8 md:space-y-4 md:w-2/3">
                <Heading
                  level={3}
                  size="text-4xl"
                  weight="font-bold"
                  align="text-center md:text-left"
                  capitalize
                >
                  Are you interested to join us? Let’s grow together!
                </Heading>
                <p className="font-lato text-2xl text-center md:text-left">
                  Come and join us to grow your business together
                </p>
              </div>
              <div className="flex items-center">
                <button className="border-2 border-black bg-black p-2 w-full rounded-lg md:w-60 md:p-4 md:px-6 md:py-4">
                  <p className="font-montserrat text-white font-semibold capitalize">
                    Join Now
                  </p>
                </button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default OurStory;
