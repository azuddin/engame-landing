import { Section } from "@engame/components";
import type { NextPage } from "next";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Blog: NextPage = () => {
  return (
    <>
      <Section bgColor="bg-gray-200">
        <p className="text-center">Let’s fire up the world of blogging🔥</p>
      </Section>
      <Section bgColor="bg-gray-300">
        <ul className="divide-y">
          {[...Array(3)].map((i, k) => (
            <li key={k}>
              <div className="flex flex-col">
                <div className="header flex items-center">
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <div className="flex flex-col">
                    <p>Engame.Asia</p>
                    <p>13 Apr 21 • 9:00AM</p>
                  </div>
                </div>
                <div className="flex-grow flex justify-center items-center bg-black rounded">
                  <div className="h-20 w-20 rounded bg-gray-400"></div>
                </div>
                <p>Blog title here</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus, pulvinar pulvinar mi eros tellus bibendum...
                </p>
                <div className="flex items-center">
                  <Link href="/blog/1" passHref>
                    <a>Read more</a>
                  </Link>
                  <FiArrowRight />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Blog;
