import { createContext, useEffect } from "react";
import Nav from "./Nav";
import data from "../data.json"
import { Outlet, useLocation } from "react-router-dom";

export const DataContext = createContext()

export default function Layout()  {
    const location = useLocation();

    useEffect(() => {
        const bodyClass = {
            "/": "home",
            "/destination": "destination",
            "/crew": "crew",
            "/technology": "technology",
        }[location.pathname];

        if (bodyClass) {
            document.body.classList.add(bodyClass);
        }

        return () => {
            document.body.classList.remove(bodyClass);
        };
    }, [location.pathname]);

    return(
        <div className="relative overflow-hidden min-h-screen">
            <Nav />
            <DataContext.Provider value={{data}}>
                <main>
                    <Outlet />
                </main>
            </DataContext.Provider>
        </div>
    )
}