import { ReactNode } from "react";

export interface PaymentLayoutProps {
  children?: ReactNode;
}

const PaymentLayout = (props: PaymentLayoutProps): JSX.Element => {
  const { children } = props;
  return <>{children}</>;
};

export { PaymentLayout };
