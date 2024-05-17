import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="auth-wrapper bg-light-400">
            <div className="md:flex">
                <Outlet />
                <div className="hidden md:flex-1 md:flex items-center p-8">
                    <Layout />
                </div>
            </div>
        </div>
    )
}

function Layout() {
    return (
        <div className="flex-1 text-light-400 bg-primary-200 md:flex flex-col items-center justify-center rounded-2xl max-w-full h-full mx-auto p-4 md:p-24 hidden">
            <h2 className="text-5xl max-w-4xl font-bold font-serif text-center">The expense management app that does it all, for every business.</h2>
            <div className="flex max-w-sm items-center justify-center">
                <img src="/src/assets/img/signup/sign-up-4922762-4097209.png" alt="" height="450" width="450" className="w-full object-cover" />
            </div>
            <div className="text-white text-center">
                <h1 className="font-bold text-2xl">Little steps, big choices, huge change</h1>
                <p className="text text-center">Rewrite, transform your financial story.</p>
            </div>
        </div>

    )
}