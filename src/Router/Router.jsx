import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RouterError from "../Components/RouterError";
import Login from "../Components/Login";
import Body from "../Components/Body"

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
                path: "body",
                element: <Body/>
            }
        ]
    }
])

export default AppRouter;