import Image from "next/image";
import { useRouter } from "next/router";
import { Section } from "@engame/components";
import { FiCheckCircle } from "react-icons/fi";

const SubscribePlan = (props: {
  backgroundImage?: boolean;
  backgroundImageUrl?: string;
}): JSX.Element => {
  const { push } = useRouter();
  const { backgroundImage, backgroundImageUrl = "/assets/images/EG---bg.jpg" } =
    props;

  return (
    <div className="relative">
      {backgroundImage && (
        <Image
          src={backgroundImageUrl}
          alt="home-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      )}
      <Section zIndex="z-10">
        <div className="flex flex-col items-center py-10">
          <p className="text-center md:text-left font-montserrat font-extrabold text-4xl mb-4">
            Subscribe your plan now!
          </p>
          <p className="text-center max-w-lg font-lato font-medium text-xl capitalize mb-10">
            Interested to find out what Games as a Service can do to your
            business? Subscribe to our basic starter package for FREE today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-20">
            {[
              {
                title: "Basic Starter",
                price: "FREE",
                desc: "Empowering users to manage their electronic health record in a secure & interoperable manner",
                descList: [
                  "Access to GaaS player base",
                  "Voucher distribution",
                  "Fixed game challenges",
                  "Free business package trial",
                ],
              },
              {
                title: "Business",
                price: "RM299",
                desc: "Empowering users to manage their electronic health record in a secure & interoperable manner",
                descList: [
                  "Access to GaaS player base",
                  "Voucher distribution",
                  "Voucher optimization",
                  "Featuring your brand in game",
                  "Featuring your product in game",
                  "Fixed game challenges",
                ],
                isPopular: true,
              },
              {
                title: "Professional",
                price: "RM599",
                desc: "Empowering users to manage their electronic health record in a secure & interoperable manner",
                descList: [
                  "Access to GaaS player base",
                  "Voucher distribution",
                  "Voucher optimization",
                  "Featuring your brand in game",
                  "Featuring your product in game",
                  "Featuring your competition in game",
                  "Custom game challenges",
                ],
              },
            ].map((i, pricingIndex) => (
              <div
                key={`pricing-${pricingIndex}`}
                className={`bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between relative overflow-hidden ${
                  i?.isPopular ? "border-2 border-black" : ""
                }`}
              >
                {i?.isPopular && (
                  <div className="w-20 absolute top-0 right-0 overflow-hidden inline-block">
                    <div className="h-20 bg-black transform rotate-45 origin-bottom-right flex-1 flex items-end -ml-8 px-8">
                      <p className="text-center text-white capitalize font-montserrat font-bold text-xs">
                        popular choice
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col space-y-4">
                  <p className="text-left font-montserrat font-bold text-xl capitalize">
                    {i.title}
                  </p>
                  <p className="text-left font-lato font-thin text-xl">
                    <span className="font-montserrat font-bold text-3xl">
                      {i.price}
                    </span>
                    /annual
                  </p>
                  <p className="text-left font-lato">{i.desc}</p>
                  <ol>
                    {i.descList.map((li, descListKey) => (
                      <li
                        key={`${pricingIndex}-descList-${descListKey}`}
                        className="flex space-x-2 text-left font-lato font-bold"
                      >
                        <span className="text-yellow-400 text-lg pt-1">
                          <FiCheckCircle />
                        </span>
                        <p>{li}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <button
                  onClick={() => push("/pricing/payment")}
                  className="w-full px-2 py-1 mt-6 text-base bg-black text-white rounded border border-black font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
                >
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { SubscribePlan };
