import AddBlogs from "../pages/Dashboard/AddBlogs";
import AllBlogs from "../pages/Dashboard/AllBlogs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import ReadBlogs from "../pages/Home/ReadBlogs";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");



const routes = createBrowserRouter([{
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/:blogId",
            element: <ReadBlogs/>
        }
    ],

},
{
    path:"/dashboard",
    element: <Dashboard/>,
    children:[
        {
            path: "/dashboard",
            element: <AllBlogs/>
        },
        {
            path: "all_blogs",
            element: <AllBlogs/>
        },
        {
            path: "add_a_blog",
            element: <AddBlogs/>
        }
    ]
}

])

export default routes;