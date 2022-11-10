import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HowItWork,
  Input,
  Layout,
  Option,
  PartnerContent,
  Section,
  Select,
  SubscribePlan,
  TrendingGame,
} from "@engame/components";
import { enquiryEndpoint, headers } from "@engame/constants";
import { EnquiryForm, PageLayoutProps } from "@engame/types";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
      body: formData,
      headers: headers,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.code !== 200) {
          toast.error(result.message);
          return;
        }
        toast.success(
          "Message sent successfully! Thank you for your interest and we'll get in touch with you shortly!"
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
          name="Sell More With Tap Master"
          content="Sell More With Tap Master"
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
                <p className="text-center md:text-left font-montserrat font-extrabold pb-1 text-4xl">
                  Supercharge your revenue, brand, and market!
                </p>
                <p className="text-center md:text-left font-montserrat font pb-4 text-xl">
                  Try <b>Tap Master</b>, the easy-to-use platform to boost your
                  revenue, promote your brand, and engage your customers.
                </p>
                <Link href="/im-brand-owner" passHref>
                  <button className="w-full md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg">
                    Get a Free Trial Now!
                  </button>
                </Link>
                <Link href="https://forms.gle/w2CeqCTwG3qTgQEC8" passHref>
                  <button className="w-full md:w-60 px-5 py-2 border border-black bg-black text-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg">
                    Join Kaw-Kaw Challenge!
                  </button>
                </Link>
                <Link href="https://tapmaster.engame.tech" passHref>
                  <button className="w-full md:w-60 px-5 py-2 border border-white bg-white rounded font-segoeui font-bold hover:opacity-90 hover:shadow-lg">
                    Play Tap Master Now!
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

        <PartnerContent backgroundImage />

        <div className="bg-white">
          <div
            style={{
              backgroundImage: "url('/assets/images/EG---bg-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex justify-center items-end mb-8 md:mb-0 bg-yellow-400 relative"
          >
            <Section bgColor={"bg-transparent"}>
              <div className="flex flex-col items-center space-y-6 py-14">
                <p className="text-center font-montserrat font-bold text-3xl">
                  How Tap Master Supercharge your Revenue, Brand and Market
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                  {[
                    {
                      title: "24,000+",
                      desc: "Daily Views",
                      image_url:
                        "/assets/images/01 Home/EG---Landing-home_icon-1(D).png",
                    },
                    {
                      title: "750,000+ ",
                      desc: "Games Completed",
                      image_url:
                        "/assets/images/01 Home/EG---Landing-home_icon-2(D).png",
                    },
                    {
                      title: "2.1M Minutes",
                      desc: "Play Time Monthly",
                      image_url:
                        "/assets/images/01 Home/EG---Landing-home_icon-3(D).png",
                    },
                    {
                      title: "3200% Increased",
                      desc: "Brand Stickiness",
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
          </div>
        </div>
        <Section>
          <div className="flex flex-col space-y-6 md:space-y-5 py-14">
            <p className="text-center font-montserrat font-bold text-3xl">
              No Programming Needed! Sign Up And Maximize Sales With Your Own
              Games!
            </p>
            <p className="text-center font-montserrat font text-lg">
              Just upload your brand logo or product images to <b>Tap Master</b>{" "}
              and you are good to go!
            </p>
            <div className="flex flex-col-reverse md:flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    title: "Ride On Our Player Base For Free!",
                    desc: "With our ever growing player base across the globe, so do your brand exposure! Feel free to use our games for free and get more exposure! ",
                  },
                  {
                    title: "35 Games To Hype Your Products!",
                    desc: "Select your games from our 35 unique games that fit your brand and products, then customise them to compliment your marketing campaign immediately!",
                  },
                ].map((i, k) => (
                  <div
                    key={`next-${k}`}
                    className="rounded-2xl bg-yellow-100 p-10 flex flex-col justify-between"
                  >
                    <p className="font-montserrat font-bold text-2xl">
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
            className="flex justify-center items-end mb-8 md:mb-0 bg-yellow-400 md:h-28 lg:h-40 2xl:h-42 relative"
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
              <p className="text-center font-montserrat font-bold text-2xl md:text-3xl">
                Boost Your Sales up to 50% with a Free Trial Now!
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
              <Link href="/pricing">
                <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                  Get A Free Trial!
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <p className="text-center font-montserrat font-bold text-2xl md:text-3xl">
                Play Tap Master to Unlock Special Promos of your Favourite
                Brand!
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
              <Link href="https://tapmaster.engame.tech">
                <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                  Play Tap Master!
                </button>
              </Link>
            </div>
          </div>
        </Section>
        <SubscribePlan
          backgroundImage
          backgroundImageUrl="/assets/images/EG---bg-2.jpg"
        />
        <Section>
          <form onSubmit={handleSubmitContactUs(contactUs)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
              <div className="flex flex-col-reverse md:flex-col items-center md:justify-center">
                <div className="flex flex-col space-y-2">
                  <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                    Let&apos;s Talk!
                  </p>
                  <p className="font-lato text-xl">
                    At Engame, our clients are our partners! If you have any
                    inquiries about the subscription plans, pricing or bespoke
                    solutions, please do not hesitate to reach out and our team
                    will be happy to help!
                  </p>
                </div>
                <div className="flex max-w-md py-10">
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
