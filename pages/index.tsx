import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

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

      <div
        id="navbar"
        className="container mx-auto px-5 w-full flex justify-between py-4 mb-10 lg:pt-12"
      >
        <div className="flex justify-center items-center">
          <Image
            src="/assets/images/logo.png"
            width={180}
            height={32}
            alt="logo"
          />
        </div>
        <div id="navbar-menu">
          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/our-story" passHref>
              <p className="font-montserrat font-semibold text-lg px-2">
                Our Story
              </p>
            </Link>
            <Link href="/pricing" passHref>
              <p className="font-montserrat font-semibold text-lg px-2">
                Pricing
              </p>
            </Link>
            <Link href="/blog" passHref>
              <p className="font-montserrat font-semibold text-lg px-2">Blog</p>
            </Link>
            <Link href="/faq" passHref>
              <p className="font-montserrat font-semibold text-lg px-2">FAQ</p>
            </Link>
            <Link href="/contact-us" passHref>
              <p className="font-montserrat font-semibold text-lg px-2">
                Contact Us
              </p>
            </Link>
            <button className="border border-gray-700 bg-black px-4 py-2 rounded-lg">
              <p className="font-montserrat font-semibold text-lg text-white">
                Start Free Trial
              </p>
            </button>
            <button className="border border-gray-700 px-4 py-2 rounded-lg">
              <p className="font-montserrat font-semibold text-lg">Login</p>
            </button>
          </div>
          <button className="border border-gray-700 p-2 rounded-lg lg:hidden">
            <FiMenu size={16} />
          </button>
        </div>
      </div>

      <div id="content" className="space-y-16 lg:space-y-24">
        <section
          id="section-1"
          className="container mx-auto px-5 space-y-16 lg:flex lg:items-center lg:flex-row-reverse lg:space-y-0"
        >
          <div className="flex justify-center lg:flex-1 lg:justify-end">
            <Image
              src="/assets/images/home-1.png"
              width={800}
              height={800}
              alt="home-1"
            />
          </div>
          <div className="space-y-16 lg:space-y-8 lg:flex-1">
            <div className="mb-8 lg:mb-0">
              <h1 className="font-montserrat font-extrabold text-5xl text-center capitalize lg:text-left lg:text-6xl">
                Are you interested to join us? Let&apos;s grow together!
              </h1>
            </div>
            <div className="space-y-2 lg:inline-grid">
              <button className="border-2 border-black bg-black p-2 w-full rounded-lg lg:w-auto lg:px-6 lg:py-4">
                <p className="font-montserrat text-white font-semibold lg:text-3xl">
                  I&apos;am A Brand Owner
                </p>
              </button>
              <button className="border-2 border-black bg-white p-2 w-full rounded-lg lg:w-auto lg:px-6 lg:py-4">
                <p className="font-montserrat text-black font-semibold lg:text-3xl">
                  Nope. I&apos;m A Gamer
                </p>
              </button>
            </div>
          </div>
        </section>
        <section id="section-2" className="container mx-auto px-5 space-y-16">
          <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl">
            Proven gamification model delivered to superapps across the globe
          </h3>
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-4">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={200}
                  height={200}
                  alt="home-2"
                />
              </div>
              <h3 className="font-montserrat font-bold text-4xl text-center lg:text-5xl">
                +9 Million
              </h3>
              <h4 className="font-montserrat font-bold text-3xl text-center">
                Players
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={200}
                  height={200}
                  alt="home-2"
                />
              </div>
              <h3 className="font-montserrat font-bold text-4xl text-center lg:text-5xl">
                +163 Million
              </h3>
              <h4 className="font-montserrat font-bold text-3xl text-center">
                Games played
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={200}
                  height={200}
                  alt="home-2"
                />
              </div>
              <h3 className="font-montserrat font-bold text-4xl text-center lg:text-5xl">
                +16 Minutes
              </h3>
              <h4 className="font-montserrat font-bold text-3xl text-center">
                Played per session
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/home-2.png"
                  width={200}
                  height={200}
                  alt="home-2"
                />
              </div>
              <h3 className="font-montserrat font-bold text-4xl text-center lg:text-5xl">
                +9 Million
              </h3>
              <h4 className="font-montserrat font-bold text-3xl text-center">
                Across the globe
              </h4>
            </div>
          </div>
        </section>
        <section
          id="section-3"
          className="container mx-auto px-5 space-y-16 lg:space-y-0"
        >
          <div className="mb-10 lg:mb-0">
            <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl">
              Next-gen enter-gagement platform
            </h3>
          </div>
          <div className="space-y-16 lg:flex lg:flex-col-reverse">
            <div className="flex justify-center lg:mt-20">
              <Image
                src="/assets/images/home-3.png"
                width={1596}
                height={789}
                alt="home-3"
              />
            </div>
            <div className="space-y-8 lg:space-y-0 lg:space-x-6 lg:flex lg:flex-row">
              <div className="bg-yellow-100 rounded-3xl p-9 space-y-6 lg:flex-1 lg:p-12">
                <h2 className="font-montserrat font-extrabold text-4xl text-center">
                  +30 Games free to play
                </h2>
                <p className="font-lato font-medium text-2xl text-center leading-8">
                  Creating amazing games is our DNA! Come and discover our
                  latest games and future releases.
                </p>
              </div>
              <div className="bg-yellow-100 rounded-3xl p-9 space-y-6 lg:flex-1 lg:p-12">
                <h2 className="font-montserrat font-extrabold text-4xl text-center">
                  +30 Games free to play
                </h2>
                <p className="font-lato font-medium text-2xl text-center leading-8">
                  Creating amazing games is our DNA! Come and discover our
                  latest games and future releases.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="section-4" className="lg:container lg:mx-auto lg:px-5">
          <div className="space-y-16 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
            <div className="container mx-auto px-5 space-y-16 space-y-16 lg:px-0 lg:my-auto">
              <div className="flex flex-col items-center space-y-16 lg:items-start lg:space-y-10 lg:h-full">
                <div className="flex">
                  <Image
                    src="/assets/images/home-2.png"
                    width={200}
                    height={200}
                    alt="home-2"
                    className="lg:rounded-3xl"
                  />
                </div>
                <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl lg:text-left">
                  How it work easier?
                </h3>
                <h4 className="font-lato font-normal text-2xl text-center capitalize lg:text-left">
                  an online game arcade where you play exciting games, score
                  points, and redeem REAL rewards from shops, restaurants, and
                  many other brands and products!
                </h4>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex justify-center lg:items-center lg:h-full">
                <Image
                  src="/assets/images/home-4.png"
                  width={1022}
                  height={766}
                  alt="home-4"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="section-5" className="space-y-10">
          <div className="container mx-auto px-5 space-y-16">
            <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl">
              Trending games
            </h3>
          </div>
          <div className="flex overflow-auto">
            {[...Array(6)].map((index) => (
              <div key={`game-${index}`} className="flex flex-col p-4">
                <div className="w-64">
                  <Image
                    src="/assets/images/home-5.png"
                    width={320}
                    height={225}
                    alt="home-5"
                    layout="responsive"
                    className="rounded-3xl"
                  />
                </div>
                <h4 className="font-montserrat font-bold text-left text-3xl mb-2">
                  Legendary moai
                </h4>
              </div>
            ))}
          </div>
        </section>
        <section
          id="section-6"
          className="lg:grid lg:grid-cols-2 lg:gap-12 lg:container lg:mx-auto lg:px-5 space-y-20 lg:space-y-0"
        >
          <div className="space-y-10 flex flex-col lg:justify-between">
            <div className="container mx-auto px-5 mb-10">
              <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl">
                Learn more about Why Superbrand work with us
              </h3>
            </div>
            <div className="space-y-10">
              <div className="flex justify-center">
                <Image
                  src="/assets/images/home-2.png"
                  width={769}
                  height={769}
                  alt="home-2"
                  className="lg:rounded-3xl"
                />
              </div>
              <div className="container mx-auto px-5 lg:text-center">
                <button className="border-2 border-black bg-black p-2 w-full rounded-lg lg:w-auto lg:p-4 lg:px-6 lg:py-4">
                  <p className="font-montserrat text-white font-semibold capitalize">
                    Get a free demo
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-10 flex flex-col lg:justify-between">
            <div className="container mx-auto px-5 mb-10">
              <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl">
                Deliver an immersive brands to our audience
              </h3>
            </div>
            <div className="space-y-10">
              <div className="flex justify-center">
                <Image
                  src="/assets/images/home-2.png"
                  width={769}
                  height={769}
                  alt="home-2"
                  className="lg:rounded-3xl"
                />
              </div>
              <div className="container mx-auto px-5 lg:text-center">
                <button className="border-2 border-black bg-black p-2 w-full rounded-lg lg:w-auto lg:p-4 lg:px-6 lg:py-4">
                  <p className="font-montserrat text-white font-semibold capitalize">
                    Play a game
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="section-7" className="">
          <div className="container mx-auto px-5">
            <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl">
              Partnered with the world’s best companies
            </h3>
          </div>
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
        <section id="section-8" className="container mx-auto px-5">
          <div className="space-y-11 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10">
            <div className="space-y-11 lg:space-y-0 lg:flex lg:flex-col-reverse lg:flex-1 lg:justify-between">
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
                  <h3 className="font-montserrat font-extrabold text-4xl text-center capitalize lg:text-5xl lg:text-left">
                    Be part of the next gaming phenomenon
                  </h3>
                </div>

                <h4 className="font-lato font-normal text-2xl text-center capitalize lg:text-left">
                  Looking to make a media inquiry ? Any feedback or suggestions
                  about one of our games? Fill out the form and we&apos;ll get
                  back to you !
                </h4>
              </div>
            </div>
            <div className="px-3 space-y-10 lg:flex-1">
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
              <button className="border-2 border-black bg-black p-2 w-full rounded-lg lg:p-4">
                <p className="font-montserrat text-white font-semibold capitalize">
                  Submit Enquiry
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
      <footer className=" border-t-2 border-gray-300 pt-10 mt-20">
        <div className="container mx-auto px-5 ">
          <div className="space-y-20 lg:py-10 lg:grid lg:grid-cols-3 lg:gap-14 lg:space-y-0">
            <div className="flex flex-col justify-center space-y-10 lg:justify-start">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/assets/images/logo.png"
                  width={374}
                  height={72}
                  alt="logo"
                />
              </div>
              <p className="font-montserrat font-normal text-2xl text-center lg:text-left">
                © 2021 <span className="font-bold">Engame</span> all rights
                reserved.
              </p>
            </div>
            <div className="flex flex-col pt-20 space-y-20 border-t-2 border-gray-300 lg:p-0 lg:border-0 lg:space-y-10">
              <div className="flex flex-col items-center space-y-2 lg:items-start">
                <p className="text-7xl">✉️</p>
                <p className="font-montserrat text-2xl font-bold">
                  contact@engame.asia
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 lg:items-start">
                <p className="text-7xl">☎</p>
                <p className="font-montserrat text-2xl font-bold">
                  (+60) 012-277 4439
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center space-y-2 lg:items-start">
                <p className="text-7xl">📍</p>
                <p className="font-montserrat text-2xl font-bold text-center lg:text-left">
                  Enidea Sdn Bhd C-20-02, Metropolitan Square, Jalan PJU 8/1,
                  Damansara Perdana, Petaling Jaya, 47820 Selangor, Malaysia
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-20 my-20 lg:pt-10 lg:my-10 items-center space-y-10 border-t-2 border-gray-300 lg:flex-row lg:justify-between lg:space-y-0">
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
            <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-4">
              <Link href="/our-story" passHref>
                <p className="font-lato font-bold text-3xl">Our Story</p>
              </Link>
              <Link href="/pricing" passHref>
                <p className="font-lato font-bold text-3xl">Pricing</p>
              </Link>
              <Link href="/blog" passHref>
                <p className="font-lato font-bold text-3xl lg:hidden">Blog</p>
              </Link>
              <Link href="/faq" passHref>
                <p className="font-lato font-bold text-3xl">FAQ</p>
              </Link>
              <Link href="/contact-us" passHref>
                <p className="font-lato font-bold text-3xl">Contact Us</p>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-4">
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
