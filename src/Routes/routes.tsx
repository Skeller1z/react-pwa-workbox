import { Navigate, useRoutes } from "react-router-dom";
import MainPage from "../LogoutMenu/MainPage";
import TestMenu from "../LogoutMenu/TestMenu";

export default function Router() {
    return useRoutes([
        {
            path:"/",
            element: <MainPage/>
        },
        {
            path:"test",
            element: <TestMenu/>
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ])
}