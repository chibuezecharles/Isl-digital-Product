import Footer from "@/landing-page/Footer";
import Header from "@/landing-page/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-neutral-100 min-h-screen w-screen flex flex-row overflow-hidden">
      <div className="flex flex-col flex-1 w-full lg:w-[calc(100vw-266px)]">
        <Header />
        <div className="flex-1 flex flex-col overflow-hidden mt-5">
          <div className="flex-1 overflow-auto bg-[#F8F8F8] mt-10 custom-scrollbar">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
