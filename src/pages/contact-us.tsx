import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";

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
      <Section bgColor="bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col-reverse md:flex-col">
            <div className="flex flex-col">
              <p>Who you gonna call?</p>
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

export default ContactUs;
