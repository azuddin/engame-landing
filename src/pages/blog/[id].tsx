import { useRouter } from "next/router";
import { Layout, Section } from "@engame/components";
import { blogs } from "@engame/constants";
import { PageLayoutProps } from "@engame/types";

const BlogDetail: PageLayoutProps = () => {
  const router = useRouter();
  const { id } = router.query;

  const content = id ? blogs[parseInt(id as string) - 1].content : "";
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
              <p className="font-lato font-extrabold">Engame.tech</p>
              <p className="font-lato text-gray-500 font-bold">
                13 Apr 21 • 9:00AM
              </p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Section>
    </>
  );
};

BlogDetail.layout = Layout;

export default BlogDetail;
