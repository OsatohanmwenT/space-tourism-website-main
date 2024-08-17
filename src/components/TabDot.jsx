export default function TabDot({ name, changeTab, index, currentIndex }) {
    return(
        <button className={`bg-clr-light/30 hover:bg-clr-light/100 p-2 ${currentIndex === index ? "bg-clr-white/100" : ""} rounded-full w-2 h-2`} onClick={() => changeTab(index)}>
            <span className="sr-only">{name}</span>
        </button>
    
    )
}