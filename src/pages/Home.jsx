import { NavLink } from "react-router-dom"

export default function Home() {
    return(
        <main className="flex max-md:flex-col max-md:text-center max-md:items-center max-md:gap-10 items-end justify-evenly mt-[5%] max-md:mt-[25%] px-8">
            <div className="max-w-[540px]">
                <h1 className="text-clr-light uppercase font-sans-normal text-3xl max-sm:text-2xl leading-[1]">So, you want to travel to
                <span className="text-8xl max-sm:text-5xl text-clr-white font-serif"> Space</span></h1>
                <p className="text-clr-light font-sans-normal text-lg mt-6">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <NavLink to="destination">
                <button className="text-4xl font-serif outline outline-0 outline-clr-light/30 hover:outline-[80px]  transition-all duration-200
                px-10 bg-clr-white text-clr-dark aspect-square rounded-full" type="button">EXPLORE</button>
            </NavLink>
        </main>
    )
}