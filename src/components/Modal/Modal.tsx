import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { children } = props;
  return <div className="fixed top-0 bg-gray-500">{children}</div>;
};

export { Modal };
