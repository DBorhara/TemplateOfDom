import Form from "../../components/sampleComponents/Form";
const formPage = () => {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center py-2`}
    >
      <Form formTitle={`Form Title`} />
    </div>
  );
};

export default formPage;
