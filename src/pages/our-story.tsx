import { PartnerWith, Section } from "@engame/components";
import type { NextPage } from "next";
import Head from "next/head";

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
      {/* <div id="content" className="space-y-16 md:space-y-24">
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
            <div className="space-y-16">
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
                        size="text-4xl md:text-3xl lg:text-4xl"
                        align="text-center md:text-left"
                        overflowEllipsis
                      >
                        Studio That Gamifies Consumer Engagement
                      </Heading>
                      <ol className="list-decimal space-y-2 pl-8 md:pl-4">
                        <li className="font-montserrat text-2xl md:text-sm xl:text-xl text-center md:text-left font-semibold capitalize">
                          Pioneer in offering Games as a Service - Tap Master to
                          brands &amp; businesses such as Tealive, Fave, Mydin
                          and Herbalife
                        </li>
                        <li className="font-montserrat text-2xl md:text-sm xl:text-xl text-center md:text-left font-semibold capitalize">
                          Commercial Ready Game Winner of MDEC DiCE
                        </li>
                        <li className="font-montserrat text-2xl md:text-sm xl:text-xl text-center md:text-left font-semibold capitalize">
                          The only game studio selected by Maxis as one of the
                          Top 100 startups in Maxis Market Access Day
                        </li>
                        <li className="font-montserrat text-2xl md:text-sm xl:text-xl text-center md:text-left font-semibold capitalize">
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
          <div className="md:container md:mx-auto md:px-5">
            <div className="overflow-auto space-y-4">
              <div className="flex justify-between pb-10">
                {TEAM_LIST.map((person) => (
                  <div className="min-w-full md:min-w-max">
                    <div className="flex flex-col items-center md:w-56 lg:w-72 xl:w-80 space-y-10">
                      <Image
                        src={person.avatar}
                        width={384}
                        height={384}
                        alt="home-2"
                      />
                      <Container>
                        <div className="space-y-6">
                          <Heading
                            level={3}
                            size="text-3xl"
                            weight="font-bold"
                            capitalize
                          >
                            {person.quoat}
                          </Heading>
                          <Heading
                            level={3}
                            size="text-4xl"
                            color="text-yellow-400"
                          >
                            {person.name}
                          </Heading>
                          <p className="font-montserrat font-bold text-2xl text-center">
                            {person.title}
                          </p>
                        </div>
                      </Container>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="justify-center space-x-5 md:hidden flex">
            <button className="w-5 h-5 bg-gray-800 shadow-lg rounded-full"></button>
            <button className="w-5 h-5 bg-gray-400 shadow-lg rounded-full"></button>
            <button className="w-5 h-5 bg-gray-400 shadow-lg rounded-full"></button>
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
      </div> */}
      <Section bgColor="bg-gray-200">
        <div className="flex flex-col items-center">
          <p>Our Story</p>
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 bg-gray-400 rounded"></div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col items-center">
          <p>
            Gaming Is One Of Those Things That’s Pretty Amazing Because When You
            Think About It, Everybody wants to game.
          </p>
          <p>
            The story of Engame originally started in 2015 with the merger of
            two passionate game making studios.
          </p>
        </div>
      </Section>
      <Section bgColor="bg-gray-200">
        <div className="flex flex-row space-x-2">
          <p className="flex-1 hidden md:block"></p>
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 rounded-full border-4 border-black"></div>
            <div className="flex-1 h-20 w-1 border-2 border-black"></div>
          </div>
          <div className="flex-1 flex flex-col">
            <p>Dec 2015</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              pulvinar sit aenean nunc nunc gravida elit.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-row-reverse space-x-2 space-x md:space-x-reverse">
          <p className="flex-1 hidden md:block"></p>
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 rounded-full border-4 border-black"></div>
            <div className="flex-1 h-20 w-1 border-2 border-black"></div>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="md:text-right">Dec 2015</p>
            <p className="md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              pulvinar sit aenean nunc nunc gravida elit.
            </p>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col-reverse md:flex-row md:space-x-2">
          <div className="flex-1 flex flex-col">
            <p>Studio That Gamifies Consumer Engagement</p>
            <ol className="list-decimal pl-4">
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
            <div className="w-20 h-20 bg-gray-400 rounded"></div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-200">
        <p className="text-center">
          strategic plan that defines a goal or desired outcome and includes the
          major steps or milestones needed to reach it.
        </p>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="flex flex-col space-y-2">
          <div className="w-full flex flex-row overflow-auto space-x-2 justify-center">
            <p className="bg-gray-400 px-2 py-1 rounded">2021</p>
            <p className="bg-gray-400 px-2 py-1 rounded">2022</p>
            <p className="bg-gray-400 px-2 py-1 rounded">2023</p>
          </div>
          <div className="flex-1 flex justify-center items-center md:hidden">
            <div className="w-20 h-20 bg-gray-400 rounded"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-2">
              <p className="flex-1 hidden md:block"></p>
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-4 border-black"></div>
                <div className="flex-1 h-20 w-1 border-2 border-black"></div>
              </div>
              <div className="flex-1 flex flex-col">
                <p>Dec 2015</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  pulvinar sit aenean nunc nunc gravida elit.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <p className="flex-1 hidden md:block"></p>
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full border-4 border-black"></div>
                <div className="flex-1 h-20 w-1 border-2 border-black"></div>
              </div>
              <div className="flex-1 flex flex-col">
                <p>Dec 2015</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  pulvinar sit aenean nunc nunc gravida elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-200">
        <div className="flex flex-col items-center">
          <p>Core Team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="flex flex-col items-center">
            <div className="flex-1 flex justify-center items-center">
              <div className="w-20 h-20 bg-gray-400 rounded"></div>
            </div>
            <p className="text-center md:text-left max-w-xs">
              “grow this studio to a place where creative game person from all
              around the world can gather.”
            </p>
            <p>Vincent Chong</p>
            <p>The Mastermind CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-1 flex justify-center items-center">
              <div className="w-20 h-20 bg-gray-400 rounded"></div>
            </div>
            <p className="text-center md:text-left max-w-xs">
              “grow this studio to a place where creative game person from all
              around the world can gather.”
            </p>
            <p>Vincent Chong</p>
            <p>The Mastermind CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex-1 flex justify-center items-center">
              <div className="w-20 h-20 bg-gray-400 rounded"></div>
            </div>
            <p className="text-center md:text-left max-w-xs">
              “grow this studio to a place where creative game person from all
              around the world can gather.”
            </p>
            <p>Vincent Chong</p>
            <p>The Mastermind CEO</p>
          </div>
        </div>
      </Section>
      <PartnerWith />
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

export default OurStory;
