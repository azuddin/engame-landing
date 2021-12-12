import { ReactNode, useState } from "react";
import Image from "next/image";
import { Footer, Modal, Navbar, Option, Select } from "@engame/components";
import { FiCheckCircle } from "react-icons/fi";
export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const [openLoginModal, setLoginModal] = useState(false);
  const [openSignupModal, setSignupModal] = useState(false);
  const [isOpenMobileMenu, setMobileMenuStatus] = useState<boolean>();

  const toggleLoginModal = () => {
    setLoginModal(!openLoginModal);
  };

  const toggleSignupModal = () => {
    setSignupModal(!openSignupModal);
  };

  const handleLoginHere = () => {
    setSignupModal(false);
    setLoginModal(true);
  };

  const LoginModal = (props: { isOpen: boolean; onCloseModal: () => void }) => {
    const { isOpen, onCloseModal } = props;
    return (
      <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
        <div className="grid grid-cols-1 max-w-3xl p-3">
          <div className="flex flex-col justify-start items-start overflow-auto">
            <p className="font-montserrat font-semibold text-3xl mb-1">Login</p>
            <div className="flex flex-col space-y-6 w-full">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-lato text-xl mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="rounded-md border px-4 py-2 text-2xl lowercase"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-lato text-xl mb-1">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="rounded-md border px-4 py-2 text-2xl lowercase"
                />
              </div>
              <button className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
                Login
              </button>
              <div className="border-t my-8 w-full"></div>
              <a className="font-lato">Don&apos;t have account yet?</a>
              <button className="w-full px-5 py-2 border border-black bg-white text-black rounded font-montserrat font-bold">
                Create a free account
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const SignupModal = (props: {
    isOpen: boolean;
    onCloseModal: () => void;
  }) => {
    const { isOpen, onCloseModal } = props;
    return (
      <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 max-w-3xl p-3">
          <div className="flex items-center">
            <div className="flex-1 flex justify-center items-center relative h-full">
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
          <div className="flex flex-col justify-start items-start overflow-auto">
            <p className="font-montserrat font-semibold text-3xl mb-1">
              Start your free trial now!
            </p>
            <p className="font-lato text-xl mb-8">
              Start your free trial now and drive more sales and leads for your
              business from day one. (No risk. No credit card required.)
            </p>
            <div className="flex flex-col space-y-6 w-full">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-lato text-xl mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="company_name"
                  className="font-lato text-xl mb-1"
                >
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  name="company_name"
                  id="company_name"
                  type="text"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-lato text-xl mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="rounded-md border px-4 py-2 text-2xl lowercase"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone_number"
                  className="font-lato text-xl mb-1"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  name="phone_number"
                  id="phone_number"
                  type="tel"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="category" className="font-lato text-xl mb-1">
                  Category <span className="text-red-600">*</span>
                </label>
                <Select
                  name="category"
                  aria-label="Category"
                  placeholder="Select a category"
                >
                  <Option key="category 1">Category 1</Option>
                  <Option key="category 2">Category 2</Option>
                  <Option key="category 3">Category 3</Option>
                </Select>
              </div>
              <button className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
                Start free Trial
              </button>
              <div className="flex flex-row space-x-2">
                <span className="text-black text-lg pt-1">
                  <FiCheckCircle />
                </span>
                <p>
                  By creating an account, I agree to Engame&apos;s{" "}
                  <span className="text-blue-400 hover:text-blue-600 font-lato">
                    Website terms
                  </span>
                  ,{" "}
                  <span className="text-blue-400 hover:text-blue-600 font-lato">
                    Privacy policy
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-400 hover:text-blue-600 font-lato">
                    Licensing terms.
                  </span>
                </p>
              </div>
              <div className="border-t my-8 w-full"></div>
              <p className=" font-lato mb-10">
                Already have an account?{" "}
                <a
                  onClick={handleLoginHere}
                  className="text-blue-400 hover:text-blue-600 font-lato"
                >
                  Log in here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const { children } = props;
  return (
    <div className="flex flex-1 flex-col h-screen">
      <Navbar
        onClickLogin={toggleLoginModal}
        onClickStartFreeTrial={toggleSignupModal}
        onToggleShowMenu={(stat) => setMobileMenuStatus(stat)}
      />
      <div
        className={
          "flex flex-1 flex-col" + (!!isOpenMobileMenu ? "" : " overflow-auto")
        }
      >
        {children}
        <div className="border-t my-8"></div>
        <Footer />
      </div>
      <LoginModal isOpen={openLoginModal} onCloseModal={toggleLoginModal} />
      <SignupModal isOpen={openSignupModal} onCloseModal={toggleSignupModal} />
    </div>
  );
};

export { Layout };
