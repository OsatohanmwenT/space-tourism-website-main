import { useState, useContext } from "react";
import { DataContext } from "../components/Layout";
import TabLayout from "../components/TabLayout";
import imageMap from "../assets";

export default function Destination() {
  const { data } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  function changeTab(index) {
    setCurrentIndex(index);
  }

  const planet = [
    "moon",
    "mars",
    "europa",
    "titan"
  ]

  return (
    <main className="flex flex-col items-center justify-center mt-4 px-6">
      <div className="max-w-[1200px]">
        <p className="mini-header mb-12 max-md:mb-10">
          <span className="text-clr-light/10 font-semibold mr-2">01</span> Pick your destination
        </p>
        <div className="grid grid-flow-col max-md:grid-flow-row text-center items-center justify-center gap-20">
          <div className="self-start max-md:self-center">
            <img className="max-sm:w-[90%] max-md:mx-auto" src={imageMap[data.destinations[currentIndex].images.png]} alt="planet" />
          </div>
          <div>
          <div className="flex items-center gap-10 max-sm:gap-6 max-md:justify-center">
            {planet.map((item,index) => (
                <TabLayout key={index} changeTab={changeTab} index={index} planet={item} currentIndex={currentIndex} />
            ))}
            </div>
            <div className="max-w-[480px] flex text-start max-md:text-center items-start max-md:items-center flex-col gap-5">
              <h2 className="text-clr-white text-center text-7xl max-sm:text-6xl font-serif uppercase">
                {data.destinations[currentIndex].name}
              </h2>
              <p className="text-clr-light text-lg max-sm:text-[18px]">
                {data.destinations[currentIndex].description}
              </p>
              <div className="flex items-center w-full justify-start max-md:justify-center border-t-2 border-clr-light/20 py-8 gap-10">
                <div>
                  <span className="font-sans-cond text-clr-light text-start uppercase">Avg. dist</span>
                  <p className="text-clr-white font-serif text-2xl max-sm:text-lg uppercase">
                    {data.destinations[currentIndex].distance}
                  </p>
                </div>
                <div>
                  <span className="font-sans-cond text-clr-light text-md uppercase">Est. travel time</span>
                  <p className="text-clr-white font-serif text-2xl max-sm:text-lg uppercase">
                    {data.destinations[currentIndex].travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
