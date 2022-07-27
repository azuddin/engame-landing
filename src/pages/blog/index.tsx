import Head from "next/head";
import Link from "next/link";
import { Layout, Section } from "@engame/components";
import { blogs } from "@engame/constants";
import { PageLayoutProps } from "@engame/types";
import { FiArrowRight } from "react-icons/fi";

const Blog: PageLayoutProps = () => {
  return (
    <>
      <Head>
        <title>Blogs - Engame</title>
        <meta
          name="description"
          content="Sunt ullamco do adipisicing dolore occaecat qui eiusmod ut irure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              <p className="text-center font-montserrat font-extrabold text-4xl max-w-md">
                Let&apos;s fire up the world of blogging🔥
              </p>
            </div>
          </Section>
        </div>
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
                  <Link scroll={true} href={`/blog/${index + 1}`} passHref>
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
