import { ReactNode } from "react";
import { Container, Footer, Navbar } from "@engame/components";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      {children}
      <Footer />
    </>
  );
};

export { Layout };
