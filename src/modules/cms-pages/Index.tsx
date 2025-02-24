import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import CmsNavbar from "./components/CmsNavbar";

const CmsPages = () => {
  return (
    <>
      <Suspense>
        <CmsNavbar />
        <Outlet />
      </Suspense>
    </>
  );
};

export default CmsPages;
