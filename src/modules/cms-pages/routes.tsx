import React from "react";

const HomePage = React.lazy(
  () => import("@/modules/cms-pages/pages/home/Index.tsx")
);
export enum CmsRoutesPath {
  Home = "/",
  AboutUs = "/about-us",
}

export const CmsRoutes = [
  {
    path: CmsRoutesPath.Home,
    element: <HomePage />,
  },
];
