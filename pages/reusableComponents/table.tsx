import Table from "../../components/sampleComponents/Table";
import { faker } from "@faker-js/faker";

import { useEffect, useState } from "react";

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
  return <Table tableData={tableData} />;
}
