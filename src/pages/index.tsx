import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Engame Landing</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="content" className="space-y-16 md:space-y-24">
        <section id="are-you-interested">
          <Container>
            <div className="space-y-16 md:flex md:items-center md:flex-row-reverse md:space-y-0">
              <div className="flex justify-center md:flex-1 md:justify-end">
                <Image
                  src="/assets/images/home-1.png"
                  width={800}
                  height={800}
                  alt="home-1"
                />
              </div>
              <div className="space-y-16 md:space-y-8 md:flex-1">
                <div className="mb-8 md:mb-0">
                  <Heading
                    level={1}
                    align="text-center md:text-left"
                    capitalize
                  >
                    Are you interested to join us? Let&apos;s grow together!
                  </Heading>
                </div>
                <div className="space-y-2 md:inline-grid">
                  <button className="border-2 border-black bg-black p-2 w-full rounded-lg md:w-auto md:px-6 md:py-4">
                    <p className="font-montserrat text-white font-semibold">
                      I&apos;am A Brand Owner
                    </p>
                  </button>
                  <button className="border-2 border-black bg-white p-2 w-full rounded-lg md:w-auto md:px-6 md:py-4">
                    <p className="font-montserrat text-black font-semibold">
                      Nope. I&apos;m A Gamer
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="proven-gamification">
          <Container>
            <div className="space-y-16">
              <Heading level={2} size="text-4xl md:text-5xl" capitalize>
                Proven gamification model delivered to superapps across the
                globe
              </Heading>
              <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
                <Card
                  image={{
                    src: "/assets/images/home-2.png",
                    width: 200,
                    height: 200,
                    alt: "home-2",
                  }}
                  title="+9 Million"
                  description="Players"
                />
                <Card
                  image={{
                    src: "/assets/images/home-2.png",
                    width: 200,
                    height: 200,
                    alt: "home-2",
                  }}
                  title="+163 Million"
                  description="Games played"
                />
                <Card
                  image={{
                    src: "/assets/images/home-2.png",
                    width: 200,
                    height: 200,
                    alt: "home-2",
                  }}
                  title="+16 Minutes"
                  description="Played per session"
                />
                <Card
                  image={{
                    src: "/assets/images/home-2.png",
                    width: 200,
                    height: 200,
                    alt: "home-2",
                  }}
                  title="+9 Million"
                  description="Across the globe"
                />
              </div>
            </div>
          </Container>
        </section>
        <section id="next-gen" className="space-y-16 md:space-y-0">
          <Container>
            <div className="mb-10 md:mb-0">
              <Heading level={2} size="text-4xl md:text-5xl" capitalize>
                Next-gen enter-gagement platform
              </Heading>
            </div>
            <div className="space-y-16 md:flex md:flex-col-reverse">
              <div className="flex justify-center md:mt-20">
                <Image
                  src="/assets/images/home-3.png"
                  width={1596}
                  height={789}
                  alt="home-3"
                />
              </div>
              <div className="space-y-8 md:space-y-0 md:space-x-6 md:flex md:flex-row">
                <div className="bg-yellow-100 rounded-3xl p-9 space-y-6 md:flex-1 md:p-12">
                  <h2 className="font-montserrat font-extrabold text-4xl text-center">
                    +30 Games free to play
                  </h2>
                  <p className="font-lato font-semibold text-2xl text-center leading-8">
                    Creating amazing games is our DNA! Come and discover our
                    latest games and future releases.
                  </p>
                </div>
                <div className="bg-yellow-100 rounded-3xl p-9 space-y-6 md:flex-1 md:p-12">
                  <h2 className="font-montserrat font-extrabold text-4xl text-center">
                    +30 Games free to play
                  </h2>
                  <p className="font-lato font-semibold text-2xl text-center leading-8">
                    Creating amazing games is our DNA! Come and discover our
                    latest games and future releases.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="how-it-work" className="">
          <Container>
            <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
              <div className="flex flex-col items-center justify-center space-y-16 md:items-start md:space-y-10 md:h-full">
                <div className="flex">
                  <Image
                    src="/assets/images/home-2.png"
                    width={200}
                    height={200}
                    alt="home-2"
                    className="md:rounded-3xl"
                  />
                </div>
                <Heading
                  level={2}
                  size="text-4xl md:text-5xl"
                  align="text-center md:text-left"
                  capitalize
                >
                  How it work easier?
                </Heading>
                <h4 className="font-lato font-normal text-2xl text-center capitalize md:text-left">
                  an online game arcade where you play exciting games, score
                  points, and redeem REAL rewards from shops, restaurants, and
                  many other brands and products!
                </h4>
              </div>
              <div className="lg:col-span-2">
                <div className="flex justify-center md:items-center md:h-full">
                  <Image
                    src="/assets/images/home-4.png"
                    width={1022}
                    height={766}
                    alt="home-4"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="trending-games" className="space-y-10">
          <Container>
            <div className="space-y-16">
              <Heading level={2} size="text-4xl md:text-5xl" capitalize>
                Trending games
              </Heading>
            </div>
          </Container>
          <div className="flex overflow-auto space-x-6 md:space-x-10">
            {[...Array(6)].map((index, key) => (
              <div key={`game-${key}`} className="flex flex-col w-60 md:w-80">
                <div className="flex">
                  <Image
                    src="/assets/images/home-5.png"
                    width={320}
                    height={225}
                    alt="home-5"
                    className="rounded-3xl"
                  />
                </div>
                <Heading
                  level={4}
                  size="text-3xl"
                  weight="font-bold"
                  align="text-center"
                  truncate
                >
                  Legendary moai
                </Heading>
              </div>
            ))}
          </div>
        </section>
        <section
          id="learn-more"
          className="md:grid md:grid-cols-2 md:gap-12 md:container md:mx-auto md:px-5 space-y-20 md:space-y-0"
        >
          <div className="space-y-10 flex flex-col md:justify-between">
            <Container>
              <div className="mb-10">
                <Heading level={2} size="text-4xl md:text-5xl" capitalize>
                  Learn more about Why Superbrand work with us
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
                <div className="md:text-center">
                  <button className="border-2 border-black bg-black p-2 w-full rounded-lg md:w-auto md:p-4 md:px-6 md:py-4">
                    <p className="font-montserrat text-white font-semibold capitalize">
                      Get a free demo
                    </p>
                  </button>
                </div>
              </Container>
            </div>
          </div>
          <div className="space-y-10 flex flex-col md:justify-between">
            <Container>
              <div className="mb-10">
                <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize md:text-5xl">
                  Deliver an immersive brands to our audience
                </h3>
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
              <div className="container mx-auto px-5 md:text-center">
                <button className="border-2 border-black bg-black p-2 w-full rounded-lg md:w-auto md:p-4 md:px-6 md:py-4">
                  <p className="font-montserrat text-white font-semibold capitalize">
                    Play a game
                  </p>
                </button>
              </div>
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
        <section id="be-part-of" className="">
          <Container>
            <div className="space-y-11 flex flex-col md:flex-row md:space-y-0 md:space-x-10">
              <div className="space-y-11 md:space-y-0 md:flex md:flex-col-reverse md:flex-1 md:justify-between">
                <div className="flex justify-center">
                  <Image
                    src="/assets/images/home-1.png"
                    width={800}
                    height={800}
                    alt="home-1"
                  />
                </div>
                <div>
                  <div className="mb-10">
                    <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize md:text-5xl md:text-left">
                      Be part of the next gaming phenomenon
                    </h3>
                  </div>
                  <h4 className="font-lato font-normal text-2xl text-center capitalize md:text-left">
                    Looking to make a media inquiry ? Any feedback or
                    suggestions about one of our games? Fill out the form and
                    we&apos;ll get back to you !
                  </h4>
                </div>
              </div>
              <div className="space-y-10 md:flex-1">
                <div className="flex flex-col items-start">
                  <label className="font-lato font-normal text-2xl text-center capitalize mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-xl font-roboto text-3xl w-full py-4 px-3 outline-none"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label className="font-lato font-normal text-2xl text-center capitalize mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-xl font-roboto text-3xl w-full py-4 px-3 outline-none"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label className="font-lato font-normal text-2xl text-center capitalize mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="border rounded-xl font-roboto text-3xl w-full py-4 px-3 outline-none"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label className="font-lato font-normal text-2xl text-center capitalize mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-xl font-roboto text-3xl w-full py-4 px-3 outline-none"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label className="font-lato font-normal text-2xl text-center capitalize mb-2">
                    Select Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-xl font-roboto text-3xl w-full py-4 px-3 outline-none"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label className="font-lato font-normal text-2xl text-center capitalize mb-2">
                    Enter Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    className="border rounded-xl font-roboto text-3xl w-full py-4 px-3 outline-none"
                  />
                </div>
                <button className="border-2 border-black bg-black p-2 w-full rounded-lg md:p-4">
                  <p className="font-montserrat text-white font-semibold capitalize">
                    Submit Enquiry
                  </p>
                </button>
              </div>
            </div>
          </Container>
        </section>
      </div> */}
      <Head>
        <title>Engame Landing</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section bgColor="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center space-y-2">
            <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl md:text-3xl">
              Are You Interested To Join Us? Let's Grow Together!
            </p>
            <Link href="/im-brand-owner" passHref>
              <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
                I'm A Brand Owner
              </button>
            </Link>
            <Link href="/im-gamer" passHref>
              <button className="w-full md:w-52 px-5 py-2 border border-black rounded font-montserrat font-bold">
                Nope, I'm A Gamer
              </button>
            </Link>
          </div>
          <div className="order-first md:order-none flex justify-center items-center">
            <div className="flex justify-center md:flex-1 md:justify-end">
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
      <Section bgColor="">
        <div className="flex flex-col items-center space-y-10 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl md:text-3xl">
            Proven Gamification Model Delivered To Superapps Across The Globe
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col justify-start">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={800}
                  height={800}
                  alt="home-2"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center font-montserrat font-bold text-3xl md:text-xl">
                +9 Million
              </p>
              <p className="text-center font-montserrat font-bold text-xl md:text-base">
                Players
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={800}
                  height={800}
                  alt="home-2"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center font-montserrat font-bold text-3xl md:text-xl">
                +163 Million
              </p>
              <p className="text-center font-montserrat font-bold text-xl md:text-base">
                Games played
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={800}
                  height={800}
                  alt="home-2"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center font-montserrat font-bold text-3xl md:text-xl">
                +16 Minutes
              </p>
              <p className="text-center font-montserrat font-bold text-xl md:text-base">
                Played per session
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={800}
                  height={800}
                  alt="home-2"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center font-montserrat font-bold text-3xl md:text-xl">
                +26 Partners
              </p>
              <p className="text-center font-montserrat font-bold text-xl md:text-base">
                Across the globe
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="">
        <div className="flex flex-col space-y-6 md:space-y-10 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl md:text-3xl">
            Next-Gen Enter-Gagement Platform
          </p>
          <div className="flex flex-col-reverse md:flex-col items-center">
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0">
              <div className="rounded-2xl bg-yellow-100 p-10">
                <p className="font-montserrat font-extrabold text-2xl">
                  +30 Games free to play
                </p>
                <p className="font-lato text-lg">
                  Creating amazing games is our DNA! Come and discover our
                  latest games and future releases.
                </p>
              </div>
              <div className="rounded-2xl bg-yellow-100 p-10">
                <p className="font-montserrat font-extrabold text-2xl">
                  +30 Games free to play
                </p>
                <p className="font-lato text-lg">
                  Creating amazing games is our DNA! Come and discover our
                  latest games and future releases.
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-8 md:mt-8 md:mb-0">
              <Image
                src="/assets/images/home-3.png"
                width={1596}
                height={789}
                alt="home-1"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="">
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-2 md:space-y-0 py-10">
          <div className="flex flex-col md:w-3/4 items-center justify-center md:items-start space-y-2">
            <div className="h-20 w-20 flex justify-center">
              <Image
                src="/assets/images/home-2.png"
                width={800}
                height={800}
                alt="home-2"
                className="rounded-lg"
              />
            </div>
            <p className="text-center md:text-left font-montserrat font-extrabold text-4xl md:text-3xl">
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
      <Section bgColor="bg-gray-200">
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
      <Section bgColor="bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-2">
            <p>Learn more about Why Superbrand work with us</p>
            <div className="h-28 w-28 rounded bg-gray-400"></div>
            <button className="px-2 py-1 text-base bg-black text-white rounded">
              Get A Free Demo
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p>Learn more about Why Superbrand work with us</p>
            <div className="h-28 w-28 rounded bg-gray-400"></div>
            <button className="px-2 py-1 text-base bg-black text-white rounded">
              Get A Free Demo
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
      <Section bgColor="bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col-reverse md:flex-col">
            <div className="flex flex-col">
              <p>Be part of the next gaming phenomenon</p>
              <p>
                Looking to make a media inquiry ? Any feedback or suggestions
                about one of our games? Fill out the form and we'll get back to
                you !
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-20 w-20 rounded bg-gray-400"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input name="name" id="name" type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company_name">
                Company Name <span className="text-red-600">*</span>
              </label>
              <input name="company_name" id="company_name" type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input name="email" id="email" type="email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone_number">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input name="phone_number" id="phone_number" type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">
                Enter Your Message <span className="text-red-600">*</span>
              </label>
              <textarea name="message" id="message" rows={4}></textarea>
            </div>
            <button className="px-2 py-1 text-base bg-black text-white rounded">
              Submit Enquiry
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
