import { Section } from "@engame/components";

const PartnerContent = (props: {
  backgroundImage?: string | boolean;
}): JSX.Element => {
  const { backgroundImage } = props;
  return (
    <div
      className="relative"
      style={{
        backgroundImage: backgroundImage
          ? "url('/assets/images/EG---bg-2.jpg')"
          : "",
        backgroundSize: "cover",
      }}
    >
      <Section bgColor={backgroundImage ? "bg-transparent" : "bg-white"}>
        <div className="flex flex-col items-center py-10 space-y-8">
          <p className="text-center font-montserrat font-extrabold text-4xl z-10">
            Partnered with the world&apos;s best companies
          </p>
          <div className="w-full flex flex-row overflow-auto space-x-4 pb-2 2xl:justify-center">
            {[
              "/assets/images/company-1.png",
              "/assets/images/company-2.png",
              "/assets/images/company-3.png",
              "/assets/images/company-4.png",
              "/assets/images/company-5.png",
            ].map((i, k) => (
              <div
                key={k}
                className="flex flex-col min-w-max cursor-pointer filter grayscale hover:grayscale-0 bg-white rounded-lg overflow-hidden"
              >
                <div className="flex flex-col w-52">
                  <img src={i} width={320} height={225} alt="home-5" />
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
