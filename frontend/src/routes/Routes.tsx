import { createBrowserRouter } from "react-router-dom";



// public pages
import LandingPage from "@/pages/landing/LandingPage";
import TermsPage from "@/pages/landing/Terms";
import PrivacyPage from "@/pages/landing/Privacy";


// auth pages
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    // public routes
    {path: "/", element: <LandingPage />},
    {path: "/terms", element: <TermsPage />},
    {path: "/privacy", element: <PrivacyPage />},


    // auth routes
    {path: '/login', element: <Login />},
    {path: "/register", element: <Register />}

])

export default router;