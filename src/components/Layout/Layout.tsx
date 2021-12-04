import { ReactNode } from "react";
import { Footer, Navbar } from "@engame/components";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div className="flex flex-1 flex-col h-screen">
      <Navbar />
      <div className="overflow-auto flex flex-1 flex-col">
        {children}
        <div className="border-t-2 my-8"></div>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
