import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import Image from "next/image";

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Engame Landing</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col-reverse md:flex-col md:items-center md:justify-center">
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

export default ContactUs;
