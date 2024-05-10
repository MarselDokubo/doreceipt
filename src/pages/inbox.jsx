import {Fragment} from "react";
import { Outlet } from "react-router-dom";
import {Nav} from "../components/nav";
import { useAuth } from "../context/authContext";

export function InboxLayout() {
    const session = useAuth()
    return (
        <div className="md:flex max-w-screen md:min-h-screen md:w-screen">
            <Nav />
            <div className="flex-1 flex flex-col">
                <Outlet /> 
            </div>
        </div>
    )
}