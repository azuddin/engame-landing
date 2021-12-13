import { ReactNode } from "react";

export interface SlideshowItemProps {
  children?: ReactNode;
}

const SlideshowItem = (props: SlideshowItemProps): JSX.Element => {
  const { children } = props;
  return <div>{children}</div>;
};

export { SlideshowItem };
