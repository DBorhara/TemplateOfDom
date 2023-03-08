import Navbar from "./Navbar";
import Footer from "./Footer";
// TODO Remove after adding type
// @ts-ignore
export default function Layout({ children }) {
  return (
    <div className={`relative h-full w-full `}>
      <Navbar />
      <main className={`bg-secondary dark:bg-tertiary`}>{children}</main>
      <Footer />
    </div>
  );
}
