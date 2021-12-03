import { Section } from "@engame/components";
import type { NextPage } from "next";

const BlogDetail: NextPage = () => {
  return (
    <>
      <Section bgColor="bg-gray-300">
        <p className="text-center">
          MDEC DiCE 2019 Commercial Ready Game Winner
        </p>
        <div className="flex flex-col">
          <div className="header flex items-center">
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
            <div className="flex flex-col">
              <p>Engame.Asia</p>
              <p>13 Apr 21 • 9:00AM</p>
            </div>
          </div>
          <p>
            In year 2017 when we first got ourselves into the then called IPCC
            (Intellectual Property Creators' Challenge), we squeezed ourselves
            into the finalist but falls short in the final round; it’s clear
            that our game with commercial elements wasn’t ready and we stuffed
            the idea into the deep freeze. Fast forward to late 2019, where we
            just pivoted to B2B games platform for enterprise, DiCE (Digital
            Content Creation Challenge) came up and we submitted in a blink of
            an eye; coupled with several improvements on gameplay, commercial
            elements and market positioning, we’re able to win this time, and
            this signifies that our game as a service platform is ready to roll.
          </p>
        </div>
      </Section>
    </>
  );
};

export default BlogDetail;
