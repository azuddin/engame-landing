import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Engame</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center space-y-2">
            <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
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
            Proven Gamification Model Delivered To Superapps Across The Globe
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { title: "+9 Million", desc: "Players" },
              { title: "+163 Million", desc: "Games played" },
              { title: "+16 Minutes", desc: "Played per session" },
              { title: "+26 Partners", desc: "Across the globe" },
            ].map((i, k) => (
              <div key={k} className="flex flex-col justify-start items-center">
                <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4">
                  <Image
                    src="/assets/images/home-2.png"
                    width={800}
                    height={800}
                    alt="home-2"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center font-montserrat font-bold text-3xl md:text-xl">
                  {i.title}
                </p>
                <p className="text-center font-montserrat font-bold text-xl md:text-base">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col space-y-6 md:space-y-10 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Next-Gen Enter-Gagement Platform
          </p>
          <div className="flex flex-col-reverse md:flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "+30 Games free to play",
                  desc: "Creating amazing games is our DNA! Come and discover our latest games and future releases.",
                },
                {
                  title: "+100K players join us",
                  desc: "Creating amazing games is our DNA! Come and discover our latest games and future releases.",
                },
              ].map((i, k) => (
                <div
                  key={`next-${k}`}
                  className="rounded-2xl bg-yellow-100 p-10 flex flex-col justify-between"
                >
                  <p className="font-montserrat font-extrabold text-2xl">
                    {i.title}
                  </p>
                  <p className="font-lato text-lg">{i.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-8 md:mt-8 md:mb-0 max-w-4xl">
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
              How it work easier?
            </p>
            <p className="text-center md:text-left font-lato text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              netus et ut imperdiet et quisque donec
            </p>
          </div>
          <div className="flex-grow flex justify-center items-center relative h-96">
            <Image
              src="/assets/images/home-4.png"
              alt="home-4"
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
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
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 py-10">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-center font-montserrat font-extrabold text-4xl md:text-3xl">
              Learn more about Why Superbrand work with us
            </p>
            <div className="max-w-xs flex justify-center">
              <Image
                src="/assets/images/home-2.png"
                width={800}
                height={800}
                alt="home-2"
                className="rounded-lg"
              />
            </div>
            <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
              Get A Free Demo
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <p className="text-center font-montserrat font-extrabold text-4xl md:text-3xl">
              Deliver an immersive brands to our audience
            </p>
            <div className="max-w-xs flex justify-center">
              <Image
                src="/assets/images/home-2.png"
                width={800}
                height={800}
                alt="home-2"
                className="rounded-lg"
              />
            </div>
            <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
              Play a game
            </button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center py-10 space-y-8">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Partnered with the world’s best companies
          </p>
          <div className="w-full flex flex-row xl:justify-center overflow-auto space-x-2 pb-2">
            {/* `justify-center` will break if company more than 5 */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col-reverse md:flex-col items-center md:justify-center">
            <div className="flex flex-col space-y-8">
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                Be part of the next gaming phenomenon
              </p>
              <p className="font-lato text-xl">
                Looking to make a media inquiry ? Any feedback or suggestions
                about one of our games? Fill out the form and we'll get back to
                you !
              </p>
            </div>
            <div className="flex max-w-md">
              <Image
                src="/assets/images/home-1.png"
                width={800}
                height={800}
                alt="home-1"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mb-8">
              <label htmlFor="name" className="font-lato text-xl mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="rounded-md border px-4 py-2 text-2xl capitalize"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="company_name" className="font-lato text-xl mb-1">
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                name="company_name"
                id="company_name"
                type="text"
                className="rounded-md border px-4 py-2 text-2xl"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="email" className="font-lato text-xl mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className="rounded-md border px-4 py-2 text-2xl lowercase"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="phone_number" className="font-lato text-xl mb-1">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                name="phone_number"
                id="phone_number"
                type="tel"
                className="rounded-md border px-4 py-2 text-2xl"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="message" className="font-lato text-xl mb-1">
                Enter Your Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="rounded-md border px-4 py-2 text-2xl"
              ></textarea>
            </div>
            <button className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
              Submit Enquiry
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
