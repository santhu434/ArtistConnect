import { Outlet } from "react-router";
import Header from "~/components/common/Header";
import NavBar from "~/components/common/NavBar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen h-screen max-h-screen flex flex-col bg-[#1B1C21] text-white">
      <Header />
      <div className="flex-1 flex h-[88vh]">
        <NavBar />
        <div className="mt-4 mx-2 overflow-y-auto hide-scrollbar max-h-min flex-10/12 w-xs md:pr-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
