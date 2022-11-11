import { useContext } from "react";
import { useRouter } from "next/router";
import { Section } from "@engame/components";
import { FiCheckCircle } from "react-icons/fi";
import { AppContext } from "src/pages/_app";

const SubscribePlan = (props: {
  backgroundImage?: boolean;
  backgroundImageUrl?: string;
}): JSX.Element => {
  const { push } = useRouter();
  const {
    backgroundImage,
    backgroundImageUrl = "./assets/images/EG---bg.jpg",
  } = props;

  const { handleToggleModal } = useContext(AppContext);

  return (
    <div
      className="relative"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImageUrl}')` : "",
        backgroundSize: "cover",
      }}
    >
      <Section bgColor={backgroundImage ? "bg-transparent" : "bg-white"}>
        <div className="flex flex-col items-center py-10">
          <p className="text-center md:text-center font-montserrat font-bold text-3xl mb-4">
            Pick a plan to supercharge your sales, brand, and market with Tap
            Master!
          </p>
          <p className="text-center max-w-3xl font-lato font-medium text-xl capitalize mb-10">
            Boost your Sales, Customer Experience, and Brand Stickiness!{" "}
            <b>All</b> in this platform!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 2xl:gap-10">
            {[
              {
                title: "Starter Package",
                price: "FREE",
                desc: "Get complete access to the first level and learn exactly how Tap Master works! You'll get to..",
                descList: [
                  "Promote to our growing player base!",
                  "Access to your voucher dashboard!",
                  "Attend exclusive Tap Master workshop!",
                  "Win a month of Business Package!",
                ],
                onClick: () => {
                  handleToggleModal("signup");
                },
              },
              {
                title: "Business",
                price: "$49",
                desc: "Best choice for you to start featuring your brand & products in Tap Master! You'll get to..",
                descList: [
                  "One (1) slot for your brand or product",
                  "Promote to our growing player base",
                  "Access to your voucher dashboard",
                  "Know your customers who played your game",
                  "Attend exclusive Tap Master workshop!",
                ],
                isPopular: true,
                onClick: () => {
                  handleToggleModal("signup2");
                },
              },
              {
                title: "Professional",
                price: "$149",
                desc: "Ultimate choice for next level customisation for maximum marketing effect! You'll get to..",
                descList: [
                  "Fully customise games to your needs",
                  "Four (4) slot for your brand or product",
                  "Promote to our growing player base",
                  "Access to your voucher dashboard",
                  "Know your customers who played your game",
                  "Attend exclusive Tap Master workshop!",
                ],
                onClick: () => {
                  handleToggleModal("signup2");
                },
              },
            ].map((i, pricingIndex) => {
              const redirectPayment = () => push("/pricing/payment");
              const handleOnClick = i.onClick ?? redirectPayment;
              return (
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
                          Popular Choice
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
                      /monthly
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
                    onClick={handleOnClick}
                    className="w-full px-2 py-1 mt-6 text-base bg-black text-white rounded border border-black font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
                  >
                    Sign Up Now!
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { SubscribePlan };
