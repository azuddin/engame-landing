import Link from "next/link";
import { Layout, Section } from "@engame/components";
import { PageLayoutProps } from "@engame/types";
import { FiArrowRight } from "react-icons/fi";

const Blog: PageLayoutProps = () => {
  const blogs = [
    {
      avatar: "/assets/images/icon.png",
      author: "Engame.Asia",
      datetime: "13 Apr 21  •  9:00AM",
      image: "/assets/images/home-4.png",
      title: "MDEC DiCE 2019 Commercial Ready Game Winner",
      desc: "In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge)...",
    },
    {
      avatar: "/assets/images/icon.png",
      author: "Engame.Asia",
      datetime: "13 Apr 21  •  9:00AM",
      image: "/assets/images/home-4.png",
      title: "MDEC DiCE 2019 Commercial Ready Game Winner",
      desc: "In year 2017 when we first got ourselves into the then called IPCC (Intellectual Property Creators' Challenge)...",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/images/EG---bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Section zIndex="z-10" bgColor="bg-transparent">
          <div className="flex justify-center py-10">
            <p className="text-center font-montserrat font-extrabold text-4xl max-w-md">
              Let&apos;s fire up the world of blogging🔥
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <ul className="py-10 space-y-10">
          {blogs.map((i, index) => {
            const border =
              index !== blogs.length - 1 ? (
                <div className="border-t mt-8"></div>
              ) : (
                <></>
              );
            return (
              <li key={`blog-card-${index}-${i.avatar}`}>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      style={{
                        backgroundImage: `url('${i.avatar}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="flex justify-center items-center relative w-10 h-10 rounded-3xl overflow-hidden"
                    ></div>
                    <div className="flex flex-col">
                      <p className="font-lato font-extrabold">{i.author}</p>
                      <p className="font-lato text-gray-500 font-bold">
                        {i.datetime}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('${i.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="flex-grow flex justify-center items-center relative h-80 rounded-3xl overflow-hidden"
                  ></div>
                  <p className="text-left font-montserrat font-extrabold text-2xl">
                    {i.title}
                  </p>
                  <p className="font-lato text-lg">{i.desc}</p>
                  <Link href="/blog/1" passHref>
                    <div className="flex items-center space-x-1 font-montserrat font-bold cursor-pointer">
                      <a>Read more</a>
                      <FiArrowRight />
                    </div>
                  </Link>
                </div>
                {border}
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
};

Blog.layout = Layout;

export default Blog;
