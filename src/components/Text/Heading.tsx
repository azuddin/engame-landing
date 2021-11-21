import { filterClassNames } from "@engame/utils";
import { ElementType, ReactNode } from "react";

export interface HeadingProps {
  children?: ReactNode;
  level: number;
  size?: string;
  align?: string;
  weight?: string;
  capitalize?: boolean;
  truncate?: boolean;
  overflowEllipsis?: boolean;
  color?: string;
}

const Heading = (props: HeadingProps): JSX.Element => {
  const {
    children,
    level,
    size,
    align,
    weight,
    capitalize,
    truncate,
    overflowEllipsis,
    color,
  } = props;
  const HeadingTag = `h${level}` as ElementType;

  const classNames = filterClassNames([
    "font-montserrat",
    size ? size : "text-5xl md:text-6xl",
    align ? align : "text-center",
    weight ? weight : "font-extrabold",
    capitalize ? "capitalize" : "",
    truncate ? "truncate" : "", // to make this work, parent must defined width
    overflowEllipsis ? "overflow-ellipsis overflow-hidden pb-1" : "",
    color ? color : "",
  ]);
  return <HeadingTag className={classNames}>{children}</HeadingTag>;
};

export { Heading };
