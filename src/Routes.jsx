import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MacBookPro16One from "pages/MacBookPro16One";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <MacBookPro16One /> },
    { path: "*", element: <NotFound /> },
    {
      path: "macbookpro16one",
      element: <MacBookPro16One />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
