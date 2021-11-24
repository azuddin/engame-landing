import { ReactNode } from "react";
import { Container, Footer, Navbar } from "@engame/components";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Container>
        <Navbar />
      </Container>
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
