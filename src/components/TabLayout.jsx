export default function TabLayout({ changeTab, index, currentIndex, planet }) {
    return(
            <button onClick={() => changeTab(index)} className={`uppercase font-sans-cond text-clr-light text-xl py-6 border-b-4 border-clr-light/0 hover:border-clr-light/100 ${currentIndex === index ? "border-b-clr-white/100 text-clr-white" :  ""} `}>{planet}</button>
    )
}