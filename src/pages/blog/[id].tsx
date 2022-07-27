import Head from "next/head";
import { useRouter } from "next/router";
import { Layout, Section } from "@engame/components";
import { blogs, BlogType } from "@engame/constants";
import { PageLayoutProps } from "@engame/types";
import { format } from "date-fns";
import useMediaQuery from "src/hooks/useMediaQuery";

const BlogDetail: PageLayoutProps = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog: BlogType = id
    ? blogs[parseInt(id as string) - 1]
    : {
        avatar: "",
        author: "",
        datetime: "2020-01-01 00:00",
        image: "",
        image_lg: "",
        title: "",
        desc: "",
        content: "",
      };
  const content = blog.content;
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Head>
        <title>{blog.title} - Engame</title>
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
              <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
                {blog.title}
              </p>
            </div>
          </Section>
        </div>
      </div>
      <img
        src={
          isMobile || blog.image_lg.length === 0 ? blog.image : blog.image_lg
        }
        style={{ width: "100%", height: "auto" }}
      />
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
              <p className="font-lato font-extrabold">{blog.author}</p>
              <p className="font-lato text-gray-500 font-bold">
                {format(new Date(blog.datetime), "dd MMM yy • hh:mmaa")}
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
