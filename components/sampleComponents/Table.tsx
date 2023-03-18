import { ChangeEvent, useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { useRouter } from "next/router";

export interface RowData {
  userName: string;
  email: string;
  location: string;
}

export interface tableData {
  header: string[];
  rows: RowData[];
}

const Table = ({ tableData }: { tableData: tableData }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { header, rows } = tableData;

  const filteredRows = rows.filter((row) =>
    // Instead of || through each row.key
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Timeout to prevent memory leaks
  let timeoutId: NodeJS.Timeout;
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 500);
  };
  const router = useRouter();
  return (
    <>
      <div className={`flex max-w-fit pb-3 pl-10`}>
        <Button
          className={`flex rounded-lg bg-primary px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-secondary dark:bg-secondary dark:text-primary dark:hover:bg-primary dark:hover:text-white`}
          bgColor={`primary`}
          onClick={() => router.push(`/componentsList`)}
        >
          <ArrowUturnLeftIcon className={`h-4 w-4`} />
          <p className={`pl-3`}>Components</p>
        </Button>
      </div>
      <div className="overflow-x-auto sm:px-10">
        <div className="bg-tertiary py-4 dark:bg-primary sm:rounded-t-lg sm:px-10">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="ag-cell-focus: relative mt-1 pl-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              // TODO Figure out how to make focus ring primary and secondary/tertiary for dark
              className={`block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder="Search for items"
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <table className="w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-primary text-xs uppercase text-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/*Checkbox Colum*/}
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className={`h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800`}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {header.map((item) => (
                <th key={item} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr
                key={row.email}
                className="border-b bg-white hover:bg-tertiary dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-primary dark:hover:text-white"
              >
                {/*Checkbox Per Row*/}
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${row.userName}`}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${row.userName}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium"
                >
                  {row.userName}
                </th>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
