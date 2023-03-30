// Libraries
import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
// Components
import Button from "./Button";

type ModalProps = {
  bodyText: string;
  confirmText: string;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};

const Modal = ({
  modalOpen,
  setModalOpen,
  title,
  bodyText,
  confirmText,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function handleBackgroundClick(e: MouseEvent<HTMLDivElement>) {
    if (modalRef.current && e.target === modalRef.current) {
      setModalOpen(false);
    }
  }

  if (!modalOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-300 bg-opacity-75"
        onClick={(e) => handleBackgroundClick(e)}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      />
      <div className="relative rounded-lg bg-secondary p-6 shadow-lg dark:bg-primary">
        <div className="mb-4 text-xl font-bold dark:text-white">{title}</div>
        <div className="text-gray-700 dark:text-secondary">{bodyText}</div>
        <div className="mt-4 flex justify-end ">
          <Button
            type={"button"}
            bgColor={"primary"}
            darkBgColor={"tertiary"}
            className="mr-3 rounded-lg bg-primary px-4 py-2 text-white hover:bg-tertiary dark:bg-tertiary dark:hover:bg-secondary dark:hover:text-primary"
            onClick={() => setModalOpen(false)}
          >
            {confirmText}
          </Button>
          <Button
            type={"button"}
            bgColor={"primary"}
            className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-tertiary dark:bg-tertiary dark:hover:bg-secondary dark:hover:text-primary"
            onClick={() => setModalOpen(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
