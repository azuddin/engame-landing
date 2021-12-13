import { ReactNode } from "react";

export interface SectionProps {
  children?: ReactNode;
  bgColor?: string;
}

const Section = (props: SectionProps): JSX.Element => {
  const { children, bgColor = "" } = props;
  return (
    <div className={"flex " + bgColor}>
      <section className="container mx-auto px-4 lg:px-36 flex-1">
        {children}
      </section>
    </div>
  );
};

export { Section };
