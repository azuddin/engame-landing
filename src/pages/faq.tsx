import { Key, useState } from "react";
import Head from "next/head";
import Link from "next/link";
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
        <div className="relative">
          <Section bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                  We&apos;re here to solve your problems
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
                    src="/assets/images/06 Faq/EG---Landing-faq_top-main(D).png"
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
                      content: <p>Yes! They are absolutely free to play!</p>,
                    },
                    {
                      title: "How can we redeem from your voucher merchants?",
                      content: (
                        <p>
                          Open up your voucher bag by tapping the
                          &quot;Bag&quot; button, tap on your vouchers and use
                          the code to redeem from our merchants
                        </p>
                      ),
                    },
                    {
                      title:
                        "I encountered some issues or bugs in the game, how can I get help?",
                      content: (
                        <p>
                          Please email your feedback to enquiry@engame.asia, we
                          will get in touch with you the soonest!
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
                          Yes! This feature is available to Business and
                          Professional subscribers
                        </p>
                      ),
                    },
                    {
                      title:
                        "Can we have a fully customised Tap Master deployment with no other vendors in it?",
                      content: (
                        <p>
                          Yes! Please email us enquiry@engame.asia, our game
                          expert will get in touch with you!
                        </p>
                      ),
                    },
                    {
                      title: "How do we promote our vouchers in the game?",
                      content: (
                        <p>
                          Web links can be sent to your customers or posted in
                          your social media for more exposure; or you can have
                          the QR code included in your printed materials such as
                          brochure, flyers or receipts
                        </p>
                      ),
                    },
                    {
                      title:
                        "Does Engame provide marketing services to enhance our exposure?",
                      content: (
                        <p>
                          Engame only promotes the entire platform as a whole
                          service, we don&apos;t promote specific brands or
                          voucher
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
        <div
          className="relative"
          style={{
            backgroundImage: "url('/assets/images/EG---bg-2.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Section zIndex="z-10" bgColor="bg-transparent">
            <div className="flex flex-col items-center py-10 space-y-10">
              <p className="text-center font-montserrat font-extrabold text-4xl">
                Need further assistance?
              </p>
              <p className="text-center font-montserrat text-3xl">
                Our team will be happy to help!
              </p>
              <Link href="/contact-us" passHref>
                <button className="w-full md:w-52 px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
                  Get in touch
                </button>
              </Link>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

FAQ.layout = Layout;

export default FAQ;
