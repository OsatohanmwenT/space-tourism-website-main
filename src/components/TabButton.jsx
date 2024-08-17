export default function TabButton({ text, index, changeTab, currentIndex }) {
    return(
        <button onClick={() => changeTab(index)} className={`font-serif text-center text-lg rounded-full ${currentIndex === index ? "bg-clr-white text-clr-dark" : "bg-clr-dark text-clr-white"} border-clr-white border-[1px] w-12 h-12`}>{text}</button>
    )
}