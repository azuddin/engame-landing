import Image from "next/image";
import Link from "next/link";
import { Layout, Section } from "@engame/components";
import { FiArrowRight } from "react-icons/fi";
import { PageLayoutProps } from "src/types";

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
      <Section>
        <div className="flex justify-center py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl max-w-md">
            Let’s fire up the world of blogging🔥
          </p>
        </div>
      </Section>
      <Section>
        <ul className="py-10 space-y-10">
          {blogs.map((i, k) => (
            <>
              <li key={`blog-${k}`}>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex justify-center items-center relative w-10 h-10">
                      <Image
                        src={i.avatar}
                        alt="home-4"
                        className="rounded-3xl"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-lato font-extrabold">{i.author}</p>
                      <p className="font-lato text-gray-500 font-bold">
                        {i.datetime}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow flex justify-center items-center relative h-80">
                    <Image
                      src={i.image}
                      alt="home-4"
                      className="rounded-3xl"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <p className="text-left font-montserrat font-extrabold text-2xl">
                    {i.title}
                  </p>
                  <p className="font-lato text-lg">{i.desc}</p>
                  <Link href="/blog/1" passHref>
                    <div className="flex items-center space-x-1 font-montserrat font-bold">
                      <a>Read more</a>
                      <FiArrowRight />
                    </div>
                  </Link>
                </div>
              </li>
              {blogs.length > k + 1 && <div className="border-t"></div>}
            </>
          ))}
        </ul>
      </Section>
    </>
  );
};

Blog.layout = Layout;

export default Blog;
