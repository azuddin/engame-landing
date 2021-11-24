import { ReactNode } from "react";
import { Container, Footer, Navbar } from "@engame/components";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden">
      <Container>
        <Navbar />
      </Container>
      <div className="mt-16 overflow-auto h-screen pb-24">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
