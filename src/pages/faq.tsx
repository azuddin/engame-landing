import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Layout, Section } from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import { FiChevronDown } from "react-icons/fi";

const Collapsible = (props: {
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
}): JSX.Element => {
  const { title, content, isOpen = false } = props;
  return (
    <div className="flex flex-col bg-white rounded-lg border-gray-50 border overflow-hidden shadow-lg">
      <div
        className={
          "flex justify-between items-center px-6 p-4" +
          (isOpen ? " bg-black text-white" : "")
        }
      >
        <p className="font-montserrat font-bold">{title}</p>
        <div className="w-8 flex justify-end">
          <FiChevronDown className={isOpen ? "transform rotate-180" : ""} />
        </div>
      </div>
      {isOpen && <div className="content p-4">{content}</div>}
    </div>
  );
};

const FAQ: PageLayoutProps = () => {
  const [openedCard, setOpenedCard] = useState([""]);
  const handleClickCard = (key: string) => {
    if (openedCard.includes(key)) {
      setOpenedCard([]);
    } else {
      setOpenedCard([key]);
    }
  };
  return (
    <>
      <Head>
        <title>FAQ - Engame</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:py-0">
          <div className="flex flex-col justify-center space-y-2">
            <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
              We’re here to help you solve your problem
            </p>
          </div>
          <div className="flex justify-center items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 py-10">
          <div className="flex flex-col items-center">
            <p className="font-montserrat font-bold text-2xl pb-3">
              I’m a Gamer
            </p>
            <div className="border border-b-2 w-40 border-black mb-4"></div>
            <div className="w-full">
              <ul className="space-y-2">
                {[
                  {
                    title: "Is the game free to play?",
                    content: (
                      <p>
                        Est ex dolore qui ullamco duis non consectetur elit ad
                        ullamco sit. Nostrud aute eu eu ullamco proident esse
                        labore deserunt esse aute. Lorem sint cillum non aliquip
                        veniam sunt pariatur aute est occaecat. Ex amet esse
                        elit quis consequat reprehenderit fugiat. Ea ullamco
                        cupidatat sunt et. Nulla enim anim ipsum ullamco nostrud
                        consectetur est Lorem eu. Deserunt exercitation amet ea
                        laborum mollit laboris.
                      </p>
                    ),
                  },
                  {
                    title: "How can we redeem from your voucher vendors?",
                    content: (
                      <p>
                        Officia voluptate pariatur do tempor nisi excepteur aute
                        proident in fugiat excepteur. Reprehenderit est proident
                        eu ad occaecat in consequat occaecat culpa commodo
                        veniam non. Ipsum eu do deserunt ea aliqua nulla. Ut
                        nulla pariatur cillum et velit officia esse. Ipsum
                        incididunt cillum tempor officia aliqua reprehenderit
                        laborum aliqua. Irure do excepteur ex consectetur elit
                        laboris amet eiusmod proident aliquip.
                      </p>
                    ),
                  },
                  {
                    title: "How can we redeem from your voucher vendors?",
                    content: (
                      <p>
                        Incididunt occaecat aute esse est quis dolore irure
                        eiusmod aliquip minim proident quis. Ullamco id laboris
                        qui sunt dolor sit anim do nostrud minim nostrud
                        proident aliqua consectetur. Magna ut minim sunt laborum
                        eiusmod Lorem pariatur adipisicing minim ea.
                      </p>
                    ),
                  },
                ].map((i, k) => (
                  <li
                    key={`gamer-${k}`}
                    onClick={() => handleClickCard(`gamer-${k}`)}
                  >
                    <Collapsible
                      title={i.title}
                      content={i.content}
                      isOpen={openedCard.includes(`gamer-${k}`)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-montserrat font-bold text-2xl pb-3">
              I’m a Brand owner
            </p>
            <div className="border border-b-2 w-40 border-black mb-4"></div>
            <div className="w-full">
              <ul className="space-y-2">
                {[
                  {
                    title:
                      "Can we have our product featured in the game as part of the game?",
                    content: (
                      <p>
                        Est ex dolore qui ullamco duis non consectetur elit ad
                        ullamco sit. Nostrud aute eu eu ullamco proident esse
                        labore deserunt esse aute. Lorem sint cillum non aliquip
                        veniam sunt pariatur aute est occaecat. Ex amet esse
                        elit quis consequat reprehenderit fugiat. Ea ullamco
                        cupidatat sunt et. Nulla enim anim ipsum ullamco nostrud
                        consectetur est Lorem eu. Deserunt exercitation amet ea
                        laborum mollit laboris.
                      </p>
                    ),
                  },
                  {
                    title:
                      "Can we have a fully customised Tap Master deployment with no other vendors in it?",
                    content: (
                      <p>
                        Officia voluptate pariatur do tempor nisi excepteur aute
                        proident in fugiat excepteur. Reprehenderit est proident
                        eu ad occaecat in consequat occaecat culpa commodo
                        veniam non. Ipsum eu do deserunt ea aliqua nulla. Ut
                        nulla pariatur cillum et velit officia esse. Ipsum
                        incididunt cillum tempor officia aliqua reprehenderit
                        laborum aliqua. Irure do excepteur ex consectetur elit
                        laboris amet eiusmod proident aliquip.
                      </p>
                    ),
                  },
                  {
                    title:
                      "Can we have a fully customised Tap Master deployment with no other vendors in it?",
                    content: (
                      <p>
                        Incididunt occaecat aute esse est quis dolore irure
                        eiusmod aliquip minim proident quis. Ullamco id laboris
                        qui sunt dolor sit anim do nostrud minim nostrud
                        proident aliqua consectetur. Magna ut minim sunt laborum
                        eiusmod Lorem pariatur adipisicing minim ea.
                      </p>
                    ),
                  },
                  {
                    title:
                      "Does Engame provide marketing services to enhance our exposure?",
                    content: (
                      <p>
                        Our fees vary depending on the industry and average
                        monthly turnover. We charge a small percentage on each
                        successful transaction that uses Riipay. Please get in
                        touch for more details on our fee structure.
                      </p>
                    ),
                  },
                ].map((i, k) => (
                  <li
                    key={`brand-${k}`}
                    onClick={() => handleClickCard(`brand-${k}`)}
                  >
                    <Collapsible
                      title={i.title}
                      content={i.content}
                      isOpen={openedCard.includes(`brand-${k}`)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="border-t"></div>
        <div className="flex flex-col items-center py-10 space-y-10">
          <p className="text-center font-montserrat font-extrabold text-4xl">
            Still need help?
          </p>
          <p className="text-center font-montserrat text-3xl">
            Our team will be happy to help!
          </p>
          <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
            Get in touch
          </button>
        </div>
      </Section>
    </>
  );
};

FAQ.layout = Layout;

export default FAQ;
