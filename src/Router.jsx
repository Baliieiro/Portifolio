import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/RootLayout/Home";
import About from "./pages/RootLayout/About";
import Projects from "./pages/RootLayout/Projects";
import Contact from "./pages/RootLayout/Contact";
import RootLayout from "./pages/RootLayout";
import Thanks from "./pages/RootLayout/Thanks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact/thanks", element: <Thanks /> },
    ],
  },
]);

export default router;
