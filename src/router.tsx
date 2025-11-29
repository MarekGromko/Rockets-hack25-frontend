import { createBrowserRouter, Outlet } from "react-router";
import DashboardPage from "./page/DashboardPage";
import PomodoroPage from "./page/PomodoroPage";
import ReportsPage from "./page/ReportsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";

export default createBrowserRouter([
    {
        path: "/",
        Component: ()=>(
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        ),
        children: [
            {
                index: true,
                Component: DashboardPage
            },
            {
                path: "/pomodoro",
                Component: PomodoroPage
            },
            {
                path: "/reports",
                Component: ReportsPage
            },
        ]
    },
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path: "/signup",
        Component: SignupPage
    }
]);