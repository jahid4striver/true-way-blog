import AllBlogs from "../pages/Dashboard/AllBlogs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");



const routes = createBrowserRouter([{
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />,
        }
    ],

},
{
    path:"/dashboard",
    element: <Dashboard/>,
    children:[
        {
            path: "all_blogs",
            element: <AllBlogs/>
        }
    ]
}

])

export default routes;