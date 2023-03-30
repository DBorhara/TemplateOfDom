import Link from "next/link";
import { useState } from "react";
import {
  ChatBubbleLeftIcon,
  CheckIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PhotoIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/sampleComponents/Button";
import Switch from "../components/sampleComponents/Switch";
import Modal from "../components/sampleComponents/Modal";

const ComponentList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const modalContent = {
    title: "This is the title",
    bodyText:
      "This is body text. You can import other text here manually or programmatically via an API",
  };

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3">
          <LightBulbIcon className="h-6 w-6 text-green-500 dark:text-white" />
          <span className="text-black">Switch Component</span>
          <Switch
            title="Title"
            label="Label"
            checked={isChecked}
            onChange={handleSwitchChange}
          />
        </li>
        <li className="flex items-center space-x-3">
          <CheckIcon className="h-6 w-6 text-green-500 dark:text-white" />
          <span className="text-black">Button Component</span>
          <Button type="button" bgColor="primary" onClick={() => {}}>
            Sample
          </Button>
        </li>
        <li className="flex items-center space-x-3">
          <ChatBubbleLeftIcon className="h-6 w-6 text-green-500 dark:text-white" />
          <Button type="button" bgColor="primary" onClick={handleModalOpen}>
            Open Modal
          </Button>
          <Modal
            modalOpen={modalOpen}
            title={modalContent.title}
            bodyText={modalContent.bodyText}
            setModalOpen={handleModalClose}
            confirmText="Take My Data"
          />
        </li>
        <li className="flex items-center space-x-3">
          <TableCellsIcon className="h-6 w-6 text-green-500 dark:text-white" />
          <Link
            className={`mr-3 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-secondary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-tertiary`}
            href="reusableComponents/tablePage"
          >
            <span className="text-lg text-white hover:text-primary">
              Table Component
            </span>
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <PhotoIcon className="h-6 w-6 text-green-500 dark:text-white" />
          <Link
            className={`mr-3 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-secondary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-tertiary`}
            href="reusableComponents/imageCardPage"
          >
            <span className="text-lg text-white hover:text-primary">
              Image Card Component
            </span>
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <PencilSquareIcon className="h-6 w-6 text-green-500 dark:text-white" />
          <Link
            className={`mr-3 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-secondary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-tertiary`}
            href="reusableComponents/formPage"
          >
            <span className="text-lg text-white hover:text-primary">
              Form Component
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ComponentList;
