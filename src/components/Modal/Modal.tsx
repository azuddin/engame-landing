import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
  title?: string;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { children, isOpen, onCloseModal, title } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed h-screen w-screen top-0 bg-black z-30 opacity-80"></div>
          <div className="w-full overflow-y-auto overflow-x-hidden fixed z-30 flex justify-center items-center h-modal md:h-full md:inset-0">
            <div className="relative mx-auto w-full max-w-2xl h-full md:h-auto">
              <div
                style={{
                  backgroundImage: "url('/assets/images/EG---bg.jpg')",
                  backgroundSize: "contain",
                }}
                className="flex flex-col relative bg-white rounded-lg overflow-hidden shadow dark:bg-gray-700 max-h-screen h-screen md:h-fit"
              >
                <div className="flex justify-between items-start p-5 border-b dark:border-gray-600 z-10">
                  <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    {title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-800 bg-transparent hover:text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="default-modal"
                    onClick={onCloseModal}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6 space-y-6 z-10 bg-white overflow-auto flex-1 md:flex-auto">
                  {children}
                </div>
                {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 dark:border-gray-600 z-10 bg-white">
                  <button
                    data-modal-toggle="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    data-modal-toggle="default-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    Decline
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="fixed h-screen w-full top-0 z-50 flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded-2xl px-4 md:px-6 py-6 flex flex-col max-h-screen">
              <div className="mb-4 flex justify-end w-full">
                <button onClick={onCloseModal}>
                  <FiX
                    size={20}
                    fill="transparent"
                    strokeWidth="3"
                    className="stroke-current text-black"
                    strokeLinecap="round"
                  />
                </button>
              </div>
              <div className="flex-1 rounded-b-lg overflow-auto">
                {children}
              </div>
            </div>
          </div> */}
        </>
      )}
    </AnimatePresence>
  );
};

export { Modal };
