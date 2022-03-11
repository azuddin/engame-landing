import { ReactNode } from "react";

export interface InputProps {
  label: string;
  children?: ReactNode;
  onChange?: (input: any) => void;
  isRequired?: boolean;
  name: string;
  id: string;
  type: string;
}

const Input = (props: InputProps): JSX.Element => {
  const { children, onChange, label, isRequired, id, name, type } = props;
  return (
    <>
      {children}
      <div className="flex flex-col">
        <label htmlFor={id} className="font-lato text-md mb-1">
          {label} {isRequired && <span className="text-red-600">*</span>}
        </label>
        <input
          name={name}
          id={id}
          type={type}
          className="rounded-md border px-4 py-2 text-md lowercase"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export { Input };
