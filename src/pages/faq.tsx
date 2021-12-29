import { Key, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Layout, Section } from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Collapsible = (props: {
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  collapibleId?: Key;
}): JSX.Element => {
  const { title, content, isOpen = false, collapibleId = 0 } = props;
  return (
    <div className="flex flex-col bg-white rounded-lg border-gray-50 border overflow-hidden shadow-lg ">
      <div
        className={
          "flex justify-between items-center px-6 p-4 cursor-pointer" +
          (isOpen ? " bg-yellow-400 " : " hover:bg-gray-50")
        }
      >
        <p className="font-montserrat font-bold">{title}</p>
        <div className="w-8 flex justify-end">
          <FiChevronDown className={isOpen ? "transform rotate-180" : ""} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`collapsible-${collapibleId}`}
            className="content p-4 overflow-auto border-4 border-yellow-400 rounded-b-lg"
            initial={{ opacity: 0, height: "0px", padding: "0px" }}
            animate={{
              opacity: 1,
              height: "10rem",
              padding: "16px",
              transition: { height: { delay: 0.18 }, opacity: { delay: 0.18 } },
            }}
            exit={{
              opacity: 0,
              height: "0px",
              padding: "0px",
              transition: { padding: { delay: 0.18 } },
            }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="relative">
        <Image
          src="/assets/images/EG---bg.jpg"
          alt="home-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Section zIndex="z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                We&apos;re here to help you solve your problem
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                <Image
                  src="/assets/images/06 Faq/EG---Landing-faq_top-main(M).png"
                  width={628}
                  height={621}
                  alt="home-1"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 py-10">
          <div className="flex flex-col items-center">
            <p className="font-montserrat font-bold text-2xl pb-3">
              I&apos;m a Gamer
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
                      key={`gamer-${k}`}
                      collapibleId={`gamer-${k}`}
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
              I&apos;m a Brand owner
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
                      key={`brand-${k}`}
                      collapibleId={`brand-${k}`}
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
      <div className="relative">
        <Image
          src="/assets/images/EG---bg-2.jpg"
          alt="home-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Section zIndex="z-10">
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
      </div>
    </>
  );
};

FAQ.layout = Layout;

export default FAQ;
