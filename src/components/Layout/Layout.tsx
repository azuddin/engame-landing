import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, Modal, Navbar, Option, Select } from "@engame/components";
import axios from "axios";
import toast from "react-hot-toast";
import { FiCheckCircle } from "react-icons/fi";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const { events } = useRouter();

  const [openLoginModal, setLoginModal] = useState(false);
  const [openSignupModal, setSignupModal] = useState(false);

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

  const dashboardBaseUrl = "https://selfservice-tapmaster.engame.asia";

  const inputLogin = {
    email: "",
    password: "",
  };

  const inputSignUp = {
    contactPerson: "",
    email: "",
    password: "",
    contactNumber: "",
    companyName: "",
    industry: "Others",
  };

  const login = () => {
    const formData = new FormData();
    for (const key in inputLogin) {
      //@ts-ignore
      formData.set(key, inputLogin[key]);
    }

    axios
      .post(`${dashboardBaseUrl}/BackEnd/Vendor/login.php`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        window.location.href = dashboardBaseUrl;
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          // handle error here
        }
      );
  };

  const signup = () => {
    const formData = new FormData();

    for (const key in inputSignUp) {
      //@ts-ignore
      formData.set(key, inputSignUp[key]);
    }

    axios
      .post(`${dashboardBaseUrl}/BackEnd/Vendor/signup.php`, formData)
      .then((response) => {
        toast.success(
          "Registration successful! Please check your email for your verification email to continue"
        );

        setSignupModal(false);
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          // handle error here
        }
      );
  };

  useEffect(() => {
    events.on("routeChangeComplete", () => setShowMenu(false));
    return () => {
      events.off("routeChangeComplete", () => setShowMenu(false));
    };
  }, [events]);

  const LoginModal = (props: { isOpen: boolean; onCloseModal: () => void }) => {
    const { isOpen, onCloseModal } = props;
    return (
      <Modal isOpen={isOpen} onCloseModal={onCloseModal} title="Login">
        <div className="grid grid-cols-1">
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
                onChange={(e) => (inputLogin.email = e.target.value)}
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
                onChange={(e) => (inputLogin.password = e.target.value)}
              />
            </div>
            <button
              className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
              onClick={login}
            >
              Login
            </button>
            <div className="border-t my-8 w-full"></div>
            <a className="font-lato">Don&apos;t have account yet?</a>
            <button className="w-full px-5 py-2 border border-black bg-white text-black rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg">
              Create a free account
            </button>
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
      <Modal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        title="Start your free trial now!"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="flex items-center">
            <div className="flex-1 flex justify-center items-start relative h-full">
              <img
                src="/assets/images/07 Free trial/EG---Free-trial(D).png"
                width={1080}
                height={1400}
                alt="home-2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start overflow-auto">
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
                  onChange={(e) => (inputSignUp.contactPerson = e.target.value)}
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
                  onChange={(e) => (inputSignUp.companyName = e.target.value)}
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
                  onChange={(e) => (inputSignUp.email = e.target.value)}
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
                  onChange={(e) => (inputSignUp.password = e.target.value)}
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
                  onChange={(e) => (inputSignUp.contactNumber = e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="industry" className="font-lato text-xl mb-1">
                  Industry <span className="text-red-600">*</span>
                </label>
                <Select
                  name="industry"
                  aria-label="Industry"
                  placeholder="Select an industry"
                >
                  <Option key="Food and Beverage">Food and Beverage</Option>
                  <Option key="Retail">Retail</Option>
                  <Option key="Fast Moving Consumer Goods">
                    Fast Moving Consumer Goods
                  </Option>
                  <Option key="Fashion">Fashion</Option>
                  <Option key="Cosmetics">Cosmetics</Option>
                  <Option key="Services">Services</Option>
                  <Option key="Others">Others</Option>
                </Select>
              </div>
              <button
                onClick={signup}
                className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold hover:opacity-90 hover:shadow-lg"
              >
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
        isOpen={showMenu}
        onClickLogin={toggleLoginModal}
        onClickStartFreeTrial={toggleSignupModal}
        onToggleShowMenu={() => setShowMenu(!showMenu)}
      />
      <div
        className={
          "flex flex-1 flex-col" + (!!showMenu ? "" : " overflow-auto")
        }
      >
        {children}
        <Footer />
      </div>
      <LoginModal isOpen={openLoginModal} onCloseModal={toggleLoginModal} />
      <SignupModal isOpen={openSignupModal} onCloseModal={toggleSignupModal} />
    </div>
  );
};

export { Layout };
