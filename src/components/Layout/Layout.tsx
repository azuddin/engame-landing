import { ReactNode, useState } from "react";
import Link from "next/link";
import { Footer, Modal, Navbar } from "@engame/components";
export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const [openLoginModal, setLoginModal] = useState(false);
  const [isOpenMobileMenu, setMobileMenuStatus] = useState<boolean>();

  const toggleLoginModal = () => {
    setLoginModal(!openLoginModal);
  };

  const { children } = props;
  return (
    <div className="flex flex-1 flex-col h-screen">
      <Navbar
        onClickLogin={toggleLoginModal}
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
      <Modal isOpen={openLoginModal} onCloseModal={toggleLoginModal}>
        <div className="flex flex-col justify-start items-start overflow-auto">
          <p className="font-montserrat font-semibold text-3xl mb-8">Login</p>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-lato text-xl mb-1">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className="rounded-md border px-4 py-2 text-2xl"
              />
            </div>
            <div className="">
              <div className="flex flex-col">
                <label htmlFor="password" className="font-lato text-xl mb-1">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="rounded-md border px-4 py-2 text-2xl"
                />
              </div>
              <Link href="/forgot-password" passHref>
                <a className="text-blue-400 hover:text-blue-600 font-lato">
                  Forgot Password
                </a>
              </Link>
            </div>

            <button className="w-full px-5 py-2 border border-black bg-black text-white rounded font-montserrat font-bold">
              Login
            </button>

            <div className="border-t my-8 w-full"></div>

            <a className=" font-lato">Don&apos;t have account yet?</a>

            <button className="w-full px-5 py-2 border border-black bg-white text-black rounded font-montserrat font-bold">
              Create a free account
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Layout };
