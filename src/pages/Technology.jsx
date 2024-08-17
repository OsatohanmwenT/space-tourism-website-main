import { useState, useContext } from "react";
import { DataContext } from "../components/Layout";
import useWindowSize from "../hooks/useWindowSize";
import imageMap from "../assets";
import TabButton from "../components/TabButton";

export default function Technology() {
    const { data } = useContext(DataContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const width = useWindowSize()

    const imageType = width < 1024 ? "landscape" : "portrait"
    const currentImage = imageMap[data.technology[currentIndex].images[imageType]]

    const nums = [
        1,
        2,
        3
    ]

    function changeTab(index) {
        setCurrentIndex(index)
    }

    return(
        <main className="flex justify-end max-lg:justify-center">
            <div className="max-w-8xl">
                <p className="mini-header ml-4 max-lg:mb-10 max-sm:text-center"><span className="num">03</span> Space launch 101</p>
                <div className="grid place-items-center grid-flow-col max-lg:grid-flow-row gap-10">
                    <div className="flex flex-col max-lg:flex-row gap-6 px-4 max-lg:order-2">
                        {nums.map((num, index) => 
                        <TabButton key={index} text={num} changeTab={changeTab} index={index} currentIndex={currentIndex} />)}
                    </div>
                    <div className="mx-4 max-lg:order-3 max-lg:text-center">
                        <h2 className="term mb-1">THE TERMINOLOGY...</h2>
                        <h3 className="name mb-2">{data.technology[currentIndex].name}</h3>
                        <p className="text-clr-light max-w-lg">{data.technology[currentIndex].description}</p>
                    </div>
                    <div className="max-lg:order-1">
                        <img className="block w-full" src={currentImage} alt={data.technology[currentIndex].name} />
                    </div>
                </div>
            </div>
        </main>
    )
}