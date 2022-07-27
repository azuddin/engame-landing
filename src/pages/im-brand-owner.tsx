import Head from "next/head";
import {
  HowItWork,
  Layout,
  PartnerContent,
  Section,
  SubscribePlan,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";

const ImBrandOwner: PageLayoutProps = () => {
  return (
    <>
      <Head>
        <title>I&apos;m Brand Owner - Engame</title>
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
        <div className="relative">
          <Section bgColor="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-0">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                  Adding Fun to Your Brand! Unleash Your Potential!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <img
                    src="/assets/images/03 Brand owner/EG---Landing-brand_top-main(D).png"
                    width={959}
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
              Why Gamification
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
              {[
                {
                  title: "Boost Sales & Leads",
                  desc: "Everyone loves games! Having your own game can revolutionize the way your brand keeps customers up-to-date regarding newly-launched promotions or products and can retain them with dynamic experience.",
                  imageUrl:
                    "/assets/images/03 Brand owner/EG---Landing-brand_icon-1(D).png",
                },
                {
                  title: "Boost Customer Experience",
                  desc: "Gamifying your brand helps enhance your customer experience because it makes immersive fun experience to engage with your campaign. Today's market is no longer about just buying and selling, but more about communication and interactivity.",
                  imageUrl:
                    "/assets/images/03 Brand owner/EG---Landing-brand_icon-2(D).png",
                },
                {
                  title: "Boost Customer Loyalty",
                  desc: "The data from your game enables you to receive immediate consumer feedback to further influence their service and product offerings. With access to this data, brands can determine the customers’ perspective, turning the short-term wins to achieve a long-term brand loyalty. ",
                  imageUrl:
                    "/assets/images/03 Brand owner/EG---Landing-brand_icon-3(D).png",
                },
              ].map((i, k) => (
                <div
                  key={`why-${k}`}
                  className="flex flex-col justify-start items-center border-2 border-yellow-400 rounded-2xl px-8 py-6"
                >
                  <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4 rounded-lg overflow-hidden">
                    <img
                      src={i.imageUrl}
                      width={800}
                      height={800}
                      alt="home-2"
                    />
                  </div>
                  <p className="text-center font-montserrat font-bold text-3xl md:text-xl capitalize mb-6">
                    {i.title}
                  </p>
                  <p className="text-center max-w-xs font-lato font-medium text-xl md:text-base capitalize">
                    {i.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <HowItWork />
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10 md:gap-6 xl:gap-20">
            {[
              {
                title: "1. Upload your vouchers to us on our website",
                imageUrl:
                  "/assets/images/03 Brand owner/EG---Landing_brand_voucher-1(D).jpg",
              },
              {
                title: "2. Your vouchers will be listed in our Game as Reward",
                imageUrl:
                  "/assets/images/03 Brand owner/EG---Landing_brand_voucher-2(D).jpg",
              },
              {
                title:
                  "3. Game Start! Players To Win The Vouchers From Your Games!",
                imageUrl:
                  "/assets/images/03 Brand owner/EG---Landing_brand_voucher-3(D).jpg",
              },
            ].map((i, k) => (
              <div
                key={`brand-${k}`}
                className="flex flex-col items-center space-y-4"
              >
                <div className="max-w-xs flex justify-center rounded-lg overflow-hidden">
                  <img src={i.imageUrl} width={600} height={400} alt="home-2" />
                </div>
                <p className="text-center md:text-left font-montserrat font-bold text-3xl md:text-xl capitalize">
                  {i.title}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <SubscribePlan backgroundImage />
        <PartnerContent />
      </div>
    </>
  );
};

ImBrandOwner.layout = Layout;

export default ImBrandOwner;
