import { filterClassNames } from "@engame/utils/filterClassNames";
import { ElementType, ReactNode } from "react";

export interface HeadingProps {
  children?: ReactNode;
  level: number;
  size?: string;
  align?: string;
  weight?: string;
  capitalize?: boolean;
  truncate?: boolean;
}

const Heading = (props: HeadingProps): JSX.Element => {
  const { children, level, size, align, weight, capitalize, truncate } = props;
  const HeadingTag = `h${level}` as ElementType;

  const classNames = filterClassNames([
    "font-montserrat",
    size ? size : "text-5xl md:text-6xl",
    align ? align : "text-center",
    weight ? weight : "font-extrabold",
    capitalize ? "capitalize" : "",
    truncate ? "truncate" : "", // to make this work, parent must defined width
  ]);
  return <HeadingTag className={classNames}>{children}</HeadingTag>;
};

export { Heading };
