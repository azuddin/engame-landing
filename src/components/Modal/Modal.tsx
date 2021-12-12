import { ReactNode, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { children, isOpen, onCloseModal } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed h-screen w-screen top-0 bg-black z-40 opacity-80"></div>
          <div className="fixed h-screen w-full top-0 z-50 flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded-2xl px-6 py-4">
              <div className="mb-4 flex justify-end w-full">
                <button onClick={onCloseModal}>
                  <FiX />
                </button>
              </div>
              <div className="rounded-b-lg pb-4">{children}</div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export { Modal };
