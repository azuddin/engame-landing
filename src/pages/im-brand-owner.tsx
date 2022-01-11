import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  HowItWork,
  Layout,
  PartnerContent,
  Section,
  SubscribePlan,
} from "@engame/components";
import { PageLayoutProps } from "@engame/types";

const ImBrandOwner: PageLayoutProps = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>I&apos;m Brand Owner - Engame</title>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-0">
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-center md:text-left font-montserrat font-extrabold pb-4 text-4xl">
                  Unlock your business potential and grow up together with us!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                  <Image
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
              Why choose us
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
              {[
                {
                  title: "Increase sales & Leads",
                  desc: "Having your own games on your platform that funnels in new customers and retaining them",
                  imageUrl:
                    "/assets/images/03 Brand owner/EG---Landing-brand_icon-1(D).png",
                },
                {
                  title: "Improved customer experience",
                  desc: "Engaging and understanding customers is easier than ever before with games and data",
                  imageUrl:
                    "/assets/images/03 Brand owner/EG---Landing-brand_icon-2(D).png",
                },
                {
                  title: "increase brand stickiness",
                  desc: "With your brand and products featured in games, your brand will be all over their heads",
                  imageUrl:
                    "/assets/images/03 Brand owner/EG---Landing-brand_icon-3(D).png",
                },
              ].map((i, k) => (
                <div
                  key={`why-${k}`}
                  className="flex flex-col justify-start items-center border-2 border-yellow-400 rounded-2xl px-8 py-6"
                >
                  <div className="max-w-xs md:h-32 md:w-32 flex justify-center mb-4">
                    <Image
                      src={i.imageUrl}
                      width={800}
                      height={800}
                      alt="home-2"
                      className="rounded-lg"
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
                title: "Send your vouchers to us on our website",
                imageUrl:
                  "/assets/images/03 Brand owner/EG---Landing_brand_voucher-1(D).jpg",
              },
              {
                title: "Vouchers will be listed on our gaaS as challenges",
                imageUrl:
                  "/assets/images/03 Brand owner/EG---Landing_brand_voucher-2(D).jpg",
              },
              {
                title: "player will go through challenges to win vouchers",
                imageUrl:
                  "/assets/images/03 Brand owner/EG---Landing_brand_voucher-3(D).jpg",
              },
            ].map((i, k) => (
              <div
                key={`brand-${k}`}
                className="flex flex-col items-center space-y-4"
              >
                <div className="max-w-xs flex justify-center">
                  <Image
                    src={i.imageUrl}
                    width={600}
                    height={400}
                    alt="home-2"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center md:text-left font-montserrat font-bold text-3xl md:text-xl capitalize">
                  {i.title}
                </p>
              </div>
            ))}
          </div>
        </Section>
        {/* <Section>
        <div className="flex justify-center items-center py-10">
          <div className="h-96 w-full relative">
            <Image
              src="/assets/images/home-4.png"
              alt="home-4"
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </Section> */}
        <SubscribePlan backgroundImage />
        <PartnerContent />
      </div>
    </>
  );
};

ImBrandOwner.layout = Layout;

export default ImBrandOwner;
