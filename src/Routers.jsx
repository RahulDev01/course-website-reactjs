import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import CourseSingle from "./Pages/CourseSingle";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/single-course",
    element: <CourseSingle />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routers;
