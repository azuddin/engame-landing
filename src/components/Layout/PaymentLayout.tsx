import { ReactNode } from "react";
import { Footer } from "@engame/components";

export interface PaymentLayoutProps {
  children?: ReactNode;
}

const PaymentLayout = (props: PaymentLayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div className="flex flex-1 flex-col h-screen">
      <div className="flex flex-col">
        <div className="z-20 h-40 md:h-14 flex justify-center">
          <div className="container mx-auto px-4 lg:px-36 py-3 md:py-2 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col justify-center w-36 md:w-28">
              <img
                src="/assets/images/logo-grayscale.png"
                alt="logo"
                width={180}
                height={34}
              />
            </div>

            <div
              id="nav"
              className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-black">
                  <p className="text-white font-montserrat font-bold">1</p>
                </div>
                <p className="text-montserrat font-bold text-base">Check Out</p>
              </div>
              <div className="w-20 border-t hidden md:block"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200">
                  <p className="text-gray-400 font-montserrat font-bold">2</p>
                </div>
                <p className="text-montserrat font-bold text-base text-gray-400">
                  Confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-auto flex flex-1 flex-col">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export { PaymentLayout };
