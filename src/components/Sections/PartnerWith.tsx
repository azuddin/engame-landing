import { ReactNode } from "react";
import { Section } from "@engame/components";
import Image from "next/image";

const PartnerWith = (): JSX.Element => {
  return (
    <Section bgColor="">
      <div className="flex flex-col items-center py-10 space-y-8">
        <p className="text-center font-montserrat font-extrabold text-4xl">
          Partnered with the world’s best companies
        </p>
        <div className="w-full flex flex-row xl:justify-center overflow-auto space-x-2 pb-2">
          {/* `justify-center` will break if company more than 5 */}
          {[
            "/assets/images/company-1.png",
            "/assets/images/company-2.png",
            "/assets/images/company-3.png",
            "/assets/images/company-4.png",
            "/assets/images/company-5.png",
          ].map((i, k) => (
            <div
              key={k}
              className="flex flex-col min-w-max cursor-pointer filter grayscale hover:grayscale-0"
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
  );
};

export { PartnerWith };
