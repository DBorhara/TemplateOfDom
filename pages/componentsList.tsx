// Libraries
import Link from "next/link";
import { useState } from "react";
// Assets
import { CheckIcon } from "@heroicons/react/24/outline";
// Components
import Button from "../components/sampleComponents/Button";
import Switch from "../components/sampleComponents/Switch";

export default function ComponentList() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="flex items-center space-x-3">
          {/*Icon*/}
          <CheckIcon className={`h-6 w-6`} />
          <span>Button Component</span>
          <Button bgColor={`primary`} onClick={() => null}>
            Sample
          </Button>
        </li>
        <li className="flex items-center space-x-3">
          {/*Icon*/}
          <CheckIcon className={`h-6 w-6`} />
          <span>Switch Component</span>
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
          <Link href={"reusableComponents/table"}>
            <span className={`text-lg text-black`}>Table Component</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
