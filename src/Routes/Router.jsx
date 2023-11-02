import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/layout/Home";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            // {
            //     path: "/home",
            //     element: <Home></Home>,
            //   },
            //   {
            //     path: "/blog",
            //     element: <Blog></Blog>,
            //   },
      
            //   {
            //     path: "/projects",
            //     element: <Projects></Projects>
            //   },
            //   {
            //     path: "/about",
            //     element: <About></About>,
            //   },
            //   {
            //     path: "/contact",
            //     element: <Contact></Contact>,
            //   },
            //   {
            //     path: "/details/:id",
            //     element: <Details></Details>,
            //   },
        ]
    }
])