import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RouterError from "../Components/RouterError";
import Login from "../Components/Login";
import Browse from "../Components/Browse";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<RouterError/>,
        children:[
            {
                path: "login",
                element: <Login/>
            } ,

            {
                path: "browse",
                element: <Browse/>
            },
        ]
    }
])

export default AppRouter;