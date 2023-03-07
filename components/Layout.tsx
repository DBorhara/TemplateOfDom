import Navbar from "./Navbar";
import Footer from "./Footer";
// TODO Remove after adding type
// @ts-ignore
export default function Layout({ children }) {
  return (
    <div className={`relative w-full h-full`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
