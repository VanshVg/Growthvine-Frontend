import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import CmsNavbar from "./components/CmsNavbar";
import CmsFooter from "./components/CmsFooter";

const CmsPages = () => {
  return (
    <Suspense>
      <div className="max-w-[1280px] mx-auto text-center mt-[20px]">
        <CmsNavbar />
        <Outlet />
      </div>
      <CmsFooter />
    </Suspense>
  );
};

export default CmsPages;
