import Button from "../../components/sampleComponents/Button";

const ButtonPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <span className="text-black">Button Component</span>
    <Button type="button" bgColor="primary" onClick={() => {}}>
      Sample
    </Button>
  </div>
);

export default ButtonPage;
