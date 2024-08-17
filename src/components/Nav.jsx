import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import menuIcon from "../assets/shared/icon-hamburger.svg"

export default function Nav() {
    const [active, setActive] = useState(false)

    const activeStyle ={
        borderBottom: "4px solid white",
    }

    const activeStyleMobile ={
        borderRight: "4px solid white",
    }

    const open = useCallback(() => {
        setActive(true)
    },[])

    const close = useCallback(() => {
        setActive(false)
    },[])

    return (
        <header className="flex justify-between items-center max-md:py-6 md:after:content-[''] md:after:h-[1px] md:after:w-full md:after:bg-clr-light md:after:ml-14 after:order-1 after:relative">
            <div>
                <img className="mx-8" src={logo} alt="logo" width={48} height={48}/>
            </div>
            <nav className="order-2">
                <ul className="flex justify-center items-center gap-14 px-24 bg-clr-white/5 backdrop-blur-xl my-8 max-md:hidden">
                    <li className="py-8">
                        <NavLink className="nav-item"
                        style={({isActive}) => isActive ? activeStyle : null}
                         to="/"><span className="font-semibold mr-1">00</span>HOME</NavLink>
                    </li>
                    <li className="py-8">
                        <NavLink className="nav-item"
                        style={({isActive}) => isActive ? activeStyle : null}
                         to="/destination"><span className="font-semibold mr-1">01</span>DESTINATION</NavLink>
                    </li>
                    <li className="py-8">
                        <NavLink  className="nav-item"
                        style={({isActive}) => isActive ? activeStyle : null}
                         to="/crew"><span className="font-semibold mr-1">02</span>CREW</NavLink>
                    </li>
                    <li className="py-8">
                        <NavLink className="nav-item"
                        style={({isActive}) => isActive ? activeStyle : null}
                         to="technology"><span className="font-semibold mr-1">03</span>TECHNOLOGY</NavLink>
                    </li>
                </ul>
                <button onClick={open} className="mr-5 hidden max-md:block">
                    <img src={menuIcon} alt="hamburger menu" width={30} height={30} />
                </button>
            </nav>
            <nav className={` flex flex-col absolute top-0 right-0 bottom-0 gap-14 pl-6 py-10 bg-clr-white/5 backdrop-blur-xl md:hidden w-2/4 ${active ? "translate-x-0" : "translate-x-[100%]"} transition duration-700`}>
                <button onClick={close} className="self-end mr-6">
                    <img src={closeIcon} alt="close icon" />
                </button>
                <ul className="flex flex-col items-start gap-14 py-10">
                    <li className="py-4 w-full">
                        <NavLink className="mobile-nav"
                         to="/"><span className="font-semibold mr-1">00</span>HOME</NavLink>
                    </li>
                    <li className="py-4 w-full">
                        <NavLink className="mobile-nav"
                         to="/destination"><span className="font-semibold mr-1">01</span>DESTINATION</NavLink>
                    </li>
                    <li className="py-4 w-full">
                        <NavLink  className="mobile-nav "
                         to="/crew"><span className="font-semibold mr-1">02</span>CREW</NavLink>
                    </li>
                    <li className="py-4 w-full">
                        <NavLink className="mobile-nav"
                         to="technology"><span className="font-semibold mr-1">03</span>TECHNOLOGY</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}