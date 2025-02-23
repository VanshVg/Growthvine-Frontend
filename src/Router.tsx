import { Suspense } from "react";
import { IRoute } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
};

const RouterComponent = () => {
  const routesForCms = applySuspense([]);

  const router = createBrowserRouter([...routesForCms]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
