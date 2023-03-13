import { Dispatch, SetStateAction, useRef } from "react";
import Button from "./Button";
import { FolderOpenIcon } from "@heroicons/react/24/outline";

type ModalProps = {
  bodyText: string;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};

const Modal = ({ modalOpen, setModalOpen, title, bodyText }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function handleBackgroundClick(e) {
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
        onClick={handleBackgroundClick}
      />
      <div
        className="relative rounded-lg bg-secondary p-6 shadow-lg"
        ref={modalRef}
      >
        <div className="mb-4 text-xl font-bold">{title}</div>
        <div className="text-gray-700">{bodyText}</div>
        <div className="mt-4 flex justify-end">
          <Button
            className="rounded-lg bg-primary px-4 py-2 text-white"
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
