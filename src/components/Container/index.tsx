import { ReactNode } from "react";

export interface ContainerProps {
  children?: ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  return (
    <section className="container mx-auto px-5 lg:px-10">{children}</section>
  );
};

export { Container };
