import Table from "../../components/sampleComponents/Table";
import { faker } from "@faker-js/faker";

import { useEffect, useState } from "react";
import Button from "../../components/sampleComponents/Button";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

export default function TablePage() {
  // Sample Data Object. Adjust each map method to suite your
  // incoming API data and also adjust types.
  const [dataArr, setDataArr] = useState<any[]>([]);

  useEffect(() => {
    const empty = new Array(10);

    for (let i = 0; i < empty.length; i++) {
      const fakeUser = {
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        location: faker.address.cityName(),
      };
      empty[i] = fakeUser;
    }
    setDataArr(empty);
  }, []);

  const tableData = {
    header: ["UserName", "Email", "Image"],
    rows: dataArr,
  };
  return (
    <div className={`flex min-h-screen w-full flex-col justify-center py-2`}>
      <div className={`flex max-w-fit pb-3 pl-10 pt-10`}>
        <Button
          type={"link"}
          className={`flex rounded-lg bg-primary px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-secondary dark:bg-secondary dark:text-primary dark:hover:bg-primary dark:hover:text-white`}
          bgColor={`primary`}
          link={`/componentsList`}
        >
          <ArrowUturnLeftIcon className={`h-4 w-4`} />
          <p className={`pl-3`}>Components</p>
        </Button>
      </div>
      <Table tableData={tableData} />
    </div>
  );
}
