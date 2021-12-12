import Image from "next/image";
import { Layout, Section } from "@engame/components";
import { PageLayoutProps } from "@engame/types";

const BlogDetail: PageLayoutProps = () => {
  const content = (
    <div>
      <p>
        In year 2017 when we first got ourselves into the then called IPCC
        (Intellectual Property Creators&apos; Challenge), we squeezed ourselves
        into the finalist but falls short in the final round; it’s clear that
        our game with commercial elements wasn’t ready and we stuffed the idea
        into the deep freeze.
      </p>
      <br />
      <p>
        Fast forward to late 2019, where we just pivoted to B2B games platform
        for enterprise, DiCE (Digital Content Creation Challenge) came up and we
        submitted in a blink of an eye; coupled with several improvements on
        gameplay, commercial elements and market positioning, we’re able to win
        this time, and this signifies that our game as a service platform is
        ready to roll.
      </p>
    </div>
  );
  return (
    <>
      <Section>
        <div className="flex flex-col items-center py-10 space-y-10">
          <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
            MDEC DiCE 2019 Commercial Ready Game Winner
          </p>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <div className="flex justify-center items-center relative w-10 h-10">
                <Image
                  src="/assets/images/icon.png"
                  alt="home-4"
                  className="rounded-3xl"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-lato font-extrabold">Engame.Asia</p>
                <p className="font-lato text-gray-500 font-bold">
                  13 Apr 21 • 9:00AM
                </p>
              </div>
            </div>
            <div>{content}</div>
          </div>
        </div>
      </Section>
    </>
  );
};

BlogDetail.layout = Layout;

export default BlogDetail;
