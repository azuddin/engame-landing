import {
  ElementType,
  ForwardedRef,
  forwardRef,
  RefObject,
  useRef,
} from "react";
import { filterClassNames } from "@engame/utils";

export interface InputProps {
  label: string;
  isRequired?: boolean;
  id: string;
  type: string;
  inputClassname?: string;
}

const Input = (
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
): JSX.Element => {
  const { label, isRequired, id, inputClassname, ...otherProps } = props;
  const as = "input";
  const InputElement = as as ElementType;
  const fallbackRef = useRef<HTMLInputElement>(null);
  const domRef =
    (ref as RefObject<HTMLInputElement | HTMLTextAreaElement>) || fallbackRef;

  const inputClassnames = filterClassNames([
    inputClassname ?? "",
    "rounded-md border px-4 py-2 text-md",
  ]);

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="font-lato text-md mb-1">
          {label} {isRequired && <span className="text-red-600">*</span>}
        </label>
        <InputElement
          ref={domRef}
          className={inputClassnames}
          {...otherProps}
        />
      </div>
    </>
  );
};

const _Input = forwardRef(Input);
export { _Input as Input };
