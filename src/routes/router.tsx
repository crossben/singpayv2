import Home from "@/pages";
import ProfilePage from "@/pages/admin/profile";
import Login from "@/pages/auth/login";
import MotDepasse from "@/pages/auth/motDepasse";
import Register from "@/pages/auth/register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/mot-de-passe-oublie",
        element: <MotDepasse />,
    },
    {
        path: "/admin",
        element: <ProfilePage />,
    },
]);

export default router;