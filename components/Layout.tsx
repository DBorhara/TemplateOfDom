import Navbar from "./Navbar";
import Footer from "./Footer";
import { Providers } from "./Providers";
// TODO Remove after adding type
// @ts-ignore
export default function Layout({ children }) {
  return (
    <Providers>
      <div className={`relative h-full w-full `}>
        <Navbar />
        <main className={`bg-secondary dark:bg-tertiary`}>{children}</main>
        <Footer />
      </div>
    </Providers>
  );
}
