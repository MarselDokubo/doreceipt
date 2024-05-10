import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="auth-wrapper md:flex max-w-screen ">
            <div className="md:flex flex-col items-center justify-between gap-8 bg-primary-300 p-4 md:p-12 hidden">
                <div className="flex-1 flex items-center justify-center">
                    <img src="doreceipt-girl.png" width="500" height="500" alt=""/>
                </div>
                <div className="text-white text-center">
                    <h1 className="font-bold ">Little steps, big choices, huge change</h1>
                    <p className="text-sm text-center">Rewrite, transform your financial story.</p>
                </div>
            </div>
            <Outlet />
        </div>
    )
}