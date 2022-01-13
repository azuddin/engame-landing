import { Layout, Section } from "@engame/components";
import { PageLayoutProps } from "@engame/types";

const BlogDetail: PageLayoutProps = () => {
  const content = (
    <div>
      <p>
        In year 2017 when we first got ourselves into the then called IPCC
        (Intellectual Property Creators&apos; Challenge), we squeezed ourselves
        into the finalist but falls short in the final round; it&apos;s clear
        that our game with commercial elements wasn&apos;t ready and we stuffed
        the idea into the deep freeze.
      </p>
      <br />
      <p>
        Fast forward to late 2019, where we just pivoted to B2B games platform
        for enterprise, DiCE (Digital Content Creation Challenge) came up and we
        submitted in a blink of an eye; coupled with several improvements on
        gameplay, commercial elements and market positioning, we&apos;re able to
        win this time, and this signifies that our game as a service platform is
        ready to roll.
      </p>
    </div>
  );
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/images/EG---bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          perspective: "5px",
        }}
        className="relative"
      >
        <div className="relative bg-transparent">
          <Section zIndex="z-10" bgColor="bg-transparent">
            <div className="flex justify-center py-10">
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                MDEC DiCE 2019 Commercial Ready Game Winner
              </p>
            </div>
          </Section>
        </div>
      </div>
      <Section>
        <div className="flex flex-col space-y-8 py-10">
          <div className="flex items-center space-x-4">
            <div
              style={{
                backgroundImage: "url('/assets/images/icon.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="flex justify-center items-center relative w-10 h-10 rounded-3xl overflow-hidden"
            ></div>
            <div className="flex flex-col">
              <p className="font-lato font-extrabold">Engame.Asia</p>
              <p className="font-lato text-gray-500 font-bold">
                13 Apr 21 • 9:00AM
              </p>
            </div>
          </div>
          <div>{content}</div>
        </div>
      </Section>
    </>
  );
};

BlogDetail.layout = Layout;

export default BlogDetail;
