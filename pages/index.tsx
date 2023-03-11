import type { NextPage } from "next";
import CallToAction from "../components/CallToAction";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <CallToAction />
    </div>
  );
};

export default Home;
