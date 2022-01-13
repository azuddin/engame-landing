import Head from "next/head";
import Link from "next/link";
import {
  HowItWork,
  Layout,
  Option,
  Section,
  Select,
  TrendingGame,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import { PartnerContent } from "src/components";
import "react-multi-carousel/lib/styles.css";

const Home: PageLayoutProps = () => {
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
        <div className="relative bg-transparent">
          <Section zIndex="z-10" bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-0">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                  Are You Interested To Join Us? Let&apos;s Grow Together!
                </p>
                <Link href="/im-brand-owner" passHref>
                  <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                    I&apos;m A Brand Owner
                  </button>
                </Link>
                <Link href="/im-gamer" passHref>
                  <button className="w-full md:w-52 px-5 py-2 border border-white bg-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                    Nope, I&apos;m A Gamer
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
                    src="/assets/images/01 Home/EG---Landing-home_top-main(D).png"
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
              Proven Gamification Model Delivered To Superapps Across The Globe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {[
                {
                  title: "+9 Million",
                  desc: "Players",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-1(D).png",
                },
                {
                  title: "+163 Million",
                  desc: "Games played",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-2(D).png",
                },
                {
                  title: "+16 Minutes",
                  desc: "Played per session",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-3(D).png",
                },
                {
                  title: "+26 Partners",
                  desc: "Across the globe",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-4(D).png",
                },
              ].map((i, k) => (
                <div
                  key={k}
                  className="flex flex-col justify-start items-center"
                >
                  <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4 rounded-lg overflow-hidden">
                    <img
                      src={i.image_url}
                      width={800}
                      height={800}
                      alt="home-2"
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
            </div>
          </div>
        </Section>
        <div className="bg-white md:pt-8 lg:pt-18 xl:pt-28 2xl:pt-36 ">
          <div
            style={{
              backgroundImage: "url('/assets/images/EG---bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex justify-center items-end mb-8 md:mb-0 bg-yellow-400 md:h-28 lg:h-40 2xl:h-52 relative"
          >
            <div className="h-80 items-end hidden md:flex">
              <img
                src="/assets/images/01 Home/EG---Landing-home_arcade(D).png"
                width={1920}
                height={300}
                alt="home-1"
              />
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <img
            src="/assets/images/01 Home/EG---Landing-home_arcade(M).png"
            width={800}
            height={300}
            alt="home-1"
          />
        </div>
        <HowItWork />
        <TrendingGame />
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 py-10">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-center font-montserrat font-extrabold text-4xl md:text-3xl">
                Learn more about Why Superbrand work with us
              </p>
              <div
                style={{
                  backgroundImage:
                    "url('/assets/images/01 Home/EG---Landing-home_demo(D).jpg')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="flex-grow flex justify-center items-center relative w-full h-44 rounded-3xl overflow-hidden"
              ></div>
              <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                Get A Free Demo
              </button>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <p className="text-center font-montserrat font-extrabold text-4xl md:text-3xl">
                Deliver an immersive brands to our audience
              </p>
              <div
                style={{
                  backgroundImage:
                    "url('/assets/images/01 Home/EG---Landing-home_playgame(D).jpg')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="flex-grow flex justify-center items-center relative w-full h-44 rounded-3xl overflow-hidden"
              ></div>
              <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                Play a game
              </button>
            </div>
          </div>
        </Section>
        <PartnerContent backgroundImage />
        <Section>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
              <div className="flex flex-col-reverse md:flex-col items-center md:justify-center">
                <div className="flex flex-col space-y-8">
                  <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                    Be part of the next gaming phenomenon
                  </p>
                  <p className="font-lato text-xl">
                    Looking to make a media inquiry ? Any feedback or
                    suggestions about one of our games? Fill out the form and
                    we&apos;ll get back to you !
                  </p>
                </div>
                <div className="flex max-w-md">
                  <img
                    src="/assets/images/01 Home/EG---Landing-home_feedback(D).png"
                    width={800}
                    height={800}
                    alt="home-1"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-lato text-xl mb-1">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="rounded-md border px-4 py-2 text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="company_name"
                    className="font-lato text-xl mb-1"
                  >
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="company_name"
                    id="company_name"
                    type="text"
                    className="rounded-md border px-4 py-2 text-2xl"
                  />
                </div>
                <div className="flex flex-col">
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
                <div className="flex flex-col">
                  <label
                    htmlFor="phone_number"
                    className="font-lato text-xl mb-1"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="phone_number"
                    id="phone_number"
                    type="tel"
                    className="rounded-md border px-4 py-2 text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="category" className="font-lato text-xl mb-1">
                    Category <span className="text-red-600">*</span>
                  </label>
                  <Select
                    name="category"
                    aria-label="Category"
                    placeholder="Select a category"
                  >
                    <Option key="category 1">Category 1</Option>
                    <Option key="category 2">Category 2</Option>
                    <Option key="category 3">Category 3</Option>
                  </Select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-lato text-xl mb-1">
                    Enter Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="rounded-md border px-4 py-2 text-2xl"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </form>
        </Section>
      </div>
    </>
  );
};

Home.layout = Layout;

export default Home;
