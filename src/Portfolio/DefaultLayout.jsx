import { Outlet } from "react-router";
import NavBar from "./Pages/NavBar";

export default function DefaultLayout() {
    return (
            <>
            <NavBar/>
            <Outlet/>
            </>
        
    )
};