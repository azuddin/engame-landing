import Head from "next/head";
import Link from "next/link";
import {
  HowItWork,
  Input,
  Layout,
  Option,
  Section,
  Select,
  TrendingGame,
} from "@engame/components";
import { enquiryEndpoint, headers } from "@engame/constants";
import { EnquiryForm, PageLayoutProps } from "@engame/types";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PartnerContent } from "src/components";
import "react-multi-carousel/lib/styles.css";

const Home: PageLayoutProps = () => {
  const {
    handleSubmit: handleSubmitContactUs,
    control: controlContactUs,
    reset: resetContactUs,
  } = useForm<EnquiryForm>({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      company_name: "",
      category: "Others",
      message: "",
    },
  });
  const contactUs = async (data: any) => {
    const formData = new FormData();
    for (const key in data) {
      formData.set(key, data[key]);
    }

    await fetch(enquiryEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: headers,
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(
          "Submission Successful! Thank you for your interest and we'll get in touch with you shortly!"
        );
      })
      .catch((err) => {
        console.error("CONTACT US ERROR=>", err);
      });
  };
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
                  Adding Fun to Your Brand! Think Big, Play Beyond!
                </p>
                <Link href="/im-brand-owner" passHref>
                  <button className="w-full md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg">
                    I want more Customers!
                  </button>
                </Link>
                <Link href="/im-gamer" passHref>
                  <button className="w-full md:w-60 px-5 py-2 border border-white bg-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg">
                    I wanna play Games!
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
                  title: "20,000+",
                  desc: "Players",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-1(D).png",
                },
                {
                  title: "700,000+ ",
                  desc: "Games played",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-2(D).png",
                },
                {
                  title: "3+ Minutes",
                  desc: "Played per session",
                  image_url:
                    "/assets/images/01 Home/EG---Landing-home_icon-3(D).png",
                },
                {
                  title: "12+ Partners",
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
                    title: "30 F2P Rewards Earning Games",
                    desc: "Tired of playing games that earn you nothing? Join us now to enjoy the most gratifying Free to Play Rewards Earning Game!",
                  },
                  {
                    title: "20K+ Active Players in the Arcade",
                    desc: "Don't know who to play with? No worries! You can easily play with over 20,000 active users at our platform and feel connected!",
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
                Learn more about why Super-brands work with us?
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
                The Immersive Gaming Experience is Here. Are You Ready?
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
          <form onSubmit={handleSubmitContactUs(contactUs)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
              <div className="flex flex-col-reverse md:flex-col items-center md:justify-center">
                <div className="flex flex-col space-y-8">
                  <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                    Be part of the next gaming phenomenon
                  </p>
                  <p className="font-lato text-xl">
                    Testing to make a media inquiry ? Any feedback or
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
                <Controller
                  name="name"
                  control={controlContactUs}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      id="name"
                      type="text"
                      label="Name"
                      isRequired
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="company_name"
                  control={controlContactUs}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      id="company_name"
                      type="text"
                      label="Company Name"
                      isRequired
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={controlContactUs}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="email"
                      label="Email"
                      isRequired
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="phone_number"
                  control={controlContactUs}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      id="phone_number"
                      type="tel"
                      label="Phone Number"
                      isRequired
                      {...field}
                    />
                  )}
                />
                <div className="flex flex-col">
                  <label htmlFor="category" className="font-lato text-md mb-1">
                    Industry <span className="text-red-600">*</span>
                  </label>
                  <Controller
                    name="category"
                    control={controlContactUs}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        id="category"
                        aria-label="Industry"
                        placeholder="Select a category"
                        onSelectionChange={onChange}
                      >
                        <Option
                          key="Food and Beverage"
                          textValue="Food and Beverage"
                        >
                          Food and Beverage
                        </Option>
                        <Option key="Retail" textValue="Retail">
                          Retail
                        </Option>
                        <Option
                          key="Fast Moving Consumer Goods"
                          textValue="Fast Moving Consumer Goods"
                        >
                          Fast Moving Consumer Goods
                        </Option>
                        <Option key="Fashion" textValue="Fashion">
                          Fashion
                        </Option>
                        <Option key="Cosmetics" textValue="Cosmetics">
                          Cosmetics
                        </Option>
                        <Option key="Services" textValue="Services">
                          Services
                        </Option>
                        <Option key="Others" textValue="Others">
                          Others
                        </Option>
                      </Select>
                    )}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-lato text-md mb-1">
                    Enter Your Message <span className="text-red-600">*</span>
                  </label>
                  <Controller
                    name="message"
                    control={controlContactUs}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <textarea
                        id="message"
                        rows={4}
                        className="rounded-md border px-4 py-2 text-md"
                        {...field}
                      ></textarea>
                    )}
                  />
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
