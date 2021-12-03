import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "@engame/components";
import { FiChevronDown } from "react-icons/fi";

const FAQ: NextPage = () => {
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
      <Section bgColor="bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start space-y-2">
            <p className="text-center md:text-left">
              We’re here to help you solve your problem
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 bg-gray-400 rounded"></div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <p>I’m a Gamer</p>
            <div className="border border-b-2 w-40 border-black mb-4"></div>
            <div className="w-full">
              <ul className="space-y-2">
                <li>
                  <div className="flex flex-col bg-white rounded overflow-hidden">
                    <div className="flex justify-between items-center p-4 bg-black text-white">
                      <p>Is the game free to play?</p>
                      <FiChevronDown />
                    </div>
                    <div className="content p-4">
                      <p>
                        Our fees vary depending on the industry and average
                        monthly turnover. We charge a small percentage on each
                        successful transaction that uses Riipay. Please get in
                        touch for more details on our fee structure.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col bg-white rounded overflow-hidden">
                    <div className="flex justify-between items-center p-4 bg-white text-black">
                      <p>Is the game free to play?</p>
                      <FiChevronDown />
                    </div>
                    <div className="content p-4 hidden">
                      <p>
                        Our fees vary depending on the industry and average
                        monthly turnover. We charge a small percentage on each
                        successful transaction that uses Riipay. Please get in
                        touch for more details on our fee structure.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p>I’m a Brand owner</p>
            <div className="border border-b-2 w-40 border-black mb-4"></div>
            <div className="w-full">
              <ul className="space-y-2">
                <li>
                  <div className="flex flex-col bg-white rounded overflow-hidden">
                    <div className="flex justify-between items-center p-4 bg-white text-black">
                      <p>Is the game free to play?</p>
                      <FiChevronDown />
                    </div>
                    <div className="content p-4 hidden">
                      <p>
                        Our fees vary depending on the industry and average
                        monthly turnover. We charge a small percentage on each
                        successful transaction that uses Riipay. Please get in
                        touch for more details on our fee structure.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col bg-white rounded overflow-hidden">
                    <div className="flex justify-between items-center p-4 bg-white text-black">
                      <p>Is the game free to play?</p>
                      <FiChevronDown />
                    </div>
                    <div className="content p-4 hidden">
                      <p>
                        Our fees vary depending on the industry and average
                        monthly turnover. We charge a small percentage on each
                        successful transaction that uses Riipay. Please get in
                        touch for more details on our fee structure.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col bg-white rounded overflow-hidden">
                    <div className="flex justify-between items-center p-4 bg-black text-white">
                      <p>Is the game free to play?</p>
                      <FiChevronDown />
                    </div>
                    <div className="content p-4">
                      <p>
                        Our fees vary depending on the industry and average
                        monthly turnover. We charge a small percentage on each
                        successful transaction that uses Riipay. Please get in
                        touch for more details on our fee structure.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray-200">
        <div className="flex flex-col items-center">
          <p>Still need help?</p>
          <p>Our team will be happy to help!</p>
          <button className="px-2 py-1 text-base bg-black text-white rounded">
            Play game Now
          </button>
        </div>
      </Section>
    </>
  );
};

export default FAQ;
