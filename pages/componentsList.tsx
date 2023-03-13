// Libraries
import Link from "next/link";
import { useState } from "react";
// Assets
import { CheckIcon } from "@heroicons/react/24/outline";
// Components
import Button from "../components/sampleComponents/Button";
import Switch from "../components/sampleComponents/Switch";
import Modal from "../components/sampleComponents/Modal";

export default function ComponentList() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const modalContent = {
    title: "This is the title",
    bodyText:
      "This is body text. You can import other text here manually or programmatically via an API",
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3">
          {/*Icon*/}
          <CheckIcon className={`color-red h-6 w-6`} />
          <span className={`text-black`}>Button Component</span>
          <Button bgColor={`primary`} onClick={() => null}>
            Sample
          </Button>
        </li>
        <li className="flex items-center space-x-3">
          {/*Icon*/}
          <CheckIcon className={`h-6 w-6`} />
          <span className={`text-black`}>Switch Component</span>
          <Switch
            title={"Title"}
            label={"Label"}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </li>
        <li className="flex items-center space-x-3">
          {/*Icon*/}
          <CheckIcon className={`h-6 w-6`} />
          <Link
            className={`mr-3 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-secondary dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-tertiary md:mr-0`}
            href={"reusableComponents/table"}
          >
            <span className={`text-whiite text-lg`}>Table Component</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          {/*Icon*/}
          <CheckIcon className={`h-6 w-6`} />
          <Button bgColor={`primary`} onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>

          <Modal
            modalOpen={modalOpen}
            title={modalContent.title}
            bodyText={modalContent.bodyText}
            setModalOpen={setModalOpen}
          />
        </li>
      </ul>
    </div>
  );
}
