import Image from "next/image";
import { Section } from "@engame/components";

const PartnerContent = (): JSX.Element => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/EG---bg-2.jpg"
        alt="home-4"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Section>
        <div className="flex flex-col items-center py-10 space-y-8">
          <p className="text-center font-montserrat font-extrabold text-4xl z-10">
            Partnered with the world&apos;s best companies
          </p>
          <div className="w-full flex flex-row overflow-auto space-x-4 pb-2">
            {[
              "/assets/images/company-1.png",
              "/assets/images/company-2.png",
              "/assets/images/company-3.png",
              "/assets/images/company-4.png",
              "/assets/images/company-5.png",
            ].map((i, k) => (
              <div
                key={k}
                className="flex flex-col min-w-max cursor-pointer filter grayscale hover:grayscale-0 bg-white"
              >
                <div className="flex flex-col w-52">
                  <Image
                    src={i}
                    width={320}
                    height={225}
                    alt="home-5"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { PartnerContent };
