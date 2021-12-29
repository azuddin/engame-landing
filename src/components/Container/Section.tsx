import { ReactNode } from "react";

export interface SectionProps {
  children?: ReactNode;
  bgColor?: string;
  zIndex?: string;
  padding?: string;
}

const Section = (props: SectionProps): JSX.Element => {
  const {
    children,
    bgColor = "",
    zIndex = "",
    padding = "px-4 lg:px-36",
  } = props;
  return (
    <div className={`flex ${bgColor}`}>
      <section className={`container mx-auto flex-1 ${padding} ${zIndex}`}>
        {children}
      </section>
    </div>
  );
};

export { Section };
