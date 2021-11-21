import { ElementType, ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  as?: string;
}

const Text = (props: TextProps): JSX.Element => {
  const { children, as: TextTag = "p" as ElementType } = props;
  return <TextTag className="">{children}</TextTag>;
};

export { Text };
