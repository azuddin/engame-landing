import { filterClassNames } from "@engame/utils";

export interface TimelineProps {
  border?: string;
}

const Timeline = (props: TimelineProps): JSX.Element => {
  const { border } = props;
  const roundClassname = filterClassNames([
    "h-10 w-10 rounded-full border-8",
    border ? border : "border-black",
  ]);
  const lineClassname = filterClassNames([
    "flex-1 h-20 w-1 border-4 ",
    border ? border : "border-black",
  ]);
  return (
    <div className="flex flex-col items-center">
      <div className={roundClassname}></div>
      <div className={lineClassname}></div>
    </div>
  );
};

export { Timeline };
