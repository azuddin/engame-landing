import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { Navbar } from "@engame/components/Navbar";
import { Heading } from "@engame/components/Text";
import { Container } from "@engame/components/Container";
import { Card } from "@engame/components/Card";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Engame Landing</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
      </Container>

      <div id="content" className="space-y-16 md:space-y-24">
        <Container>
          <section
            id="section-1"
            className="space-y-16 md:flex md:items-center md:flex-row-reverse md:space-y-0"
          >
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
                <Heading level={1} align="text-center md:text-left" capitalize>
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
          </section>
        </Container>
        <Container>
          <section id="section-2" className="space-y-16">
            <Heading level={2} size="text-4xl md:text-5xl" capitalize>
              Proven gamification model delivered to superapps across the globe
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
          </section>
        </Container>
        <Container>
          <section id="section-3" className="space-y-16 md:space-y-0">
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
          </section>
        </Container>
        <section id="section-4" className="">
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
        <section id="section-5" className="space-y-10">
          <Container>
            <div className="space-y-16">
              <Heading level={2} size="text-4xl md:text-5xl" capitalize>
                Trending games
              </Heading>
            </div>
          </Container>
          <div className="flex overflow-auto space-x-6 md:space-x-10">
            {[...Array(6)].map((index) => (
              <div key={`game-${index}`} className="flex flex-col w-60 md:w-80">
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
          id="section-6"
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
        <section id="section-7" className="">
          <Container>
            <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize md:text-5xl">
              Partnered with the world’s best companies
            </h3>
          </Container>
          <div className="flex overflow-auto">
            {[...Array(5)].map((index) => (
              <div key={`partner-${index}`} className="w-72">
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
        <section id="section-8" className="">
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
      </div>
      <footer className=" border-t-2 border-gray-300 pt-10 mt-20">
        <div className="container mx-auto px-5 ">
          <div className="space-y-20 md:py-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-20 lg:gap-14 md:space-y-0">
            <div className="flex flex-col justify-center space-y-10 md:justify-start">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/assets/images/logo.png"
                  width={374}
                  height={72}
                  alt="logo"
                />
              </div>
              <p className="font-montserrat font-normal text-2xl text-center md:text-left">
                © 2021 <span className="font-bold">Engame</span> all rights
                reserved.
              </p>
            </div>
            <div className="flex flex-col pt-20 space-y-20 border-t-2 border-gray-300 md:p-0 md:border-0 md:space-y-20 lg:space-y-14">
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <p className="text-7xl">✉️</p>
                <p className="font-montserrat text-2xl font-bold">
                  contact@engame.asia
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <p className="text-7xl">☎</p>
                <p className="font-montserrat text-2xl font-bold">
                  (+60) 012-277 4439
                </p>
              </div>
            </div>
            <div className="flex flex-col md:col-end-3 md:col-span-1 lg:col-end-4">
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <p className="text-7xl">📍</p>
                <p className="font-montserrat text-2xl font-bold text-center md:text-left">
                  Enidea Sdn Bhd C-20-02, Metropolitan Square, Jalan PJU 8/1,
                  Damansara Perdana, Petaling Jaya, 47820 Selangor, Malaysia
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-20 my-20 md:pt-10 md:my-10 items-center space-y-10 border-t-2 border-gray-300 md:flex-row md:justify-between md:space-y-0">
            <div className="flex space-x-4">
              <div className="flex">
                <Image
                  src="/assets/images/ig-icon.png"
                  width={48}
                  height={48}
                  alt="instagram"
                />
              </div>
              <div className="flex">
                <Image
                  src="/assets/images/fb-icon.png"
                  width={48}
                  height={48}
                  alt="facebook"
                />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-4">
              <Link href="/our-story" passHref>
                <p className="font-lato font-bold text-3xl">Our Story</p>
              </Link>
              <Link href="/pricing" passHref>
                <p className="font-lato font-bold text-3xl">Pricing</p>
              </Link>
              <Link href="/blog" passHref>
                <p className="font-lato font-bold text-3xl md:hidden">Blog</p>
              </Link>
              <Link href="/faq" passHref>
                <p className="font-lato font-bold text-3xl">FAQ</p>
              </Link>
              <Link href="/contact-us" passHref>
                <p className="font-lato font-bold text-3xl">Contact Us</p>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-4">
              <Link href="/privacy" passHref>
                <p className="font-lato font-bold text-3xl">Privacy</p>
              </Link>
              <Link href="/conditions" passHref>
                <p className="font-lato font-bold text-3xl">Conditions</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
