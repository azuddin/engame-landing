import { Heading, Timeline } from "@engame/components";
import { filterClassNames } from "@engame/utils";
import { ReactNode } from "react";

export interface CardTimelineProps {
  children?: ReactNode;
  title: string;
  description?: string;
  border?: string;
  isOrderReverse?: boolean;
  isDoubleSide?: boolean;
}

const CardTimeline = (props: CardTimelineProps): JSX.Element => {
  const { children, title, description, border, isOrderReverse, isDoubleSide } =
    props;
  const containerClassnames = filterClassNames([
    "flex",
    isDoubleSide ? "md:space-x-10" : "",
    isOrderReverse ? "md:flex-row-reverse md:space-x-reverse" : "",
  ]);

  return (
    <div className={containerClassnames}>
      <div className={isDoubleSide ? "md:flex-1" : ""}></div>
      <Timeline border={border} />
      <div
        className={
          "flex-1 flex flex-col mb-20 space-y-6 ml-10 " +
          (isDoubleSide && " md:ml-0")
        }
      >
        <Heading
          level={3}
          align={isOrderReverse ? "md:text-right" : "text-left"}
          size="text-4xl"
          weight="font-extrabold"
        >
          {title}
        </Heading>
        <div className={isOrderReverse ? "md:text-right" : "text-left"}>
          {description && (
            <p className="font-montserrat text-2xl font-semibold">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export { CardTimeline };
