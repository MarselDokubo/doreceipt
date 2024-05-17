import { useState } from "react"
import { Logo } from "./logo"
import { Link } from "react-router-dom"

export function Nav() {

    const [visible, setVisible] = useState(false)
        return (
        <>
            <div role="button" onClick={() => setVisible(prev => !prev)} className={`menu h-12 w-12 md:hidden fixed right-0 ${!visible?'top-2':'top-4'} z-20`}>
                    <img src={`/src/assets/img/${!visible ? 'hamburger.svg' : 'close-menu-white.svg'}`} alt="open menu" className={`${!visible? 'w-full': 'w-8' }`} /> 
            </div>
            <div className={`${!visible && 'hidden'} fixed top-0 right-0 z-10 px-2 pt-6 w-[80%] h-screen bg-primary-400  md:static md:w-max lg:w-[230px] md:block transition-all ease-in-out delay-200`}>
                <div className="w-full h-full flex flex-col justify-between text-white pb-8">
                <div className="flex flex-col">
                    <div className="profile w-max mx-auto pb-6">
                        <div className="flex flex-col items-center gap-2 w-14 h-14 mx-auto mb-2 rounded-full overflow-hidden">
                            <img src="/src/assets/img/avatar_7.png" alt="Profile photo" height="60" width="60" className=" w-full object-cover"/>
                        </div>
                        <p className="text-slate-300">marsel@gmail.com</p>    
                    </div>
                    <div className="flex-1 flex flex-col">
                    <Link to="." className="nav home hover:bg-primary-300 text-slate-400 hover:text-slate-200 p-6 transition-all ease-in delay-100">
                        <i className="font-expens expensicons expensicons-inbox my-6 mr-4 text-xl leading-6 hover:text-primary-200 text-slate-400 align-[-1.5px]">&#xE931;</i>
                        <span  className="">Home</span>
                    </Link>
                    <Link to="expenses" className="nav home hover:bg-primary-300 text-slate-400 hover:text-slate-200 p-6 transition-all ease-in delay-100">
                        <i className="font-expens expensicons expensicons-inbox my-6 mr-4 text-xl leading-6 hover:text-primary-200 text-slate-400 align-[-1.5px]">&#xE955;</i>
                        <span  className="">Expenses</span>
                    </Link>
                    <Link to="reports" className="nav home hover:bg-primary-300 text-slate-400 hover:text-slate-200 p-6 transition-all ease-in delay-100">
                        <i className="font-expens expensicons expensicons-inbox my-6 mr-4 text-xl leading-6 hover:text-primary-200 text-slate-400 align-[-1.5px]">&#xE958;</i>
                        <span  className="">Reports</span>
                    </Link>
                    <Link to="insights" className="nav home hover:bg-primary-300 text-slate-400 hover:text-slate-200 p-6 transition-all ease-in delay-100">
                        <i className="font-expens expensicons expensicons-inbox my-6 mr-4 text-xl leading-6 hover:text-primary-200 text-slate-400 align-[-1.5px]">&#xE937;</i>
                        <span  className="">Insight</span>
                    </Link>
                    <Link to="#" className="nav home hover:bg-primary-300 text-slate-400 hover:text-slate-200 p-6 transition-all ease-in delay-100">
                        <i className="font-expens expensicons expensicons-inbox my-6 mr-4 text-xl leading-6 hover:text-primary-200 text-slate-400 align-[-1.5px]">&#xE929;</i>
                        <span className="">Settings</span>
                    </Link>
                    <Link to="#" className="nav home hover:bg-primary-300 text-slate-400 hover:text-slate-200 p-6 transition-all ease-in delay-100">
                        <i className="font-expens expensicons expensicons-inbox my-6 mr-4 text-xl leading-6 hover:text-primary-200 text-slate-400 align-[-1.5px]">&#xE95c;</i>
                        <span className="">Support</span>
                    </Link>
                </div>
                </div>
                <Logo />
                </div>
            </div>
            </>
    )
}