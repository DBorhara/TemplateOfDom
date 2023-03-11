import Table from "../../components/sampleComponents/Table";

export default function TablePage() {
  // Sample Data Object. Adjust each map method to suite your
  // incoming API data and also adjust types.
  const tableData = {
    header: ["UserName", "Email", "Image"],
    rows: [
      { userName: "John Doe", email: "jdoe@gmail.com", image: "New York" },
      { userName: "Jane Smith", email: "jsmithy@yahoo.com", image: "Chicago" },
      { userName: "Bob John", email: "roberto@email.com", image: "Denver" },
    ],
  };
  return <Table tableData={tableData} />;
}
