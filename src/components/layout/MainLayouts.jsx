import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function MainLaouts() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="pb-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
