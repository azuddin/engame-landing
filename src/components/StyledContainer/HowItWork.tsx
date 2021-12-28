import Image from "next/image";
import { Section } from "@engame/components";

const HowItWork = (): JSX.Element => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
        <div className="flex flex-col md:w-1/3 items-center justify-center md:items-start space-y-6 md:space-y-2">
          <div className="max-w-xs md:h-32 md:w-32 flex justify-center">
            <Image
              src="/assets/images/01 Home/EG---Landing-home_info(D).png"
              width={800}
              height={800}
              alt="home-2"
              className="rounded-lg"
            />
          </div>
          <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
            How it work easier?
          </p>
          <p className="text-center md:text-left font-lato text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            netus et ut imperdiet et quisque donec
          </p>
        </div>
        <div className="flex-grow flex justify-center items-center relative h-96">
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
    </Section>
  );
};

export { HowItWork };
