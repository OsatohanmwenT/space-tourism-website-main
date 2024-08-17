import { useState, useContext } from "react";
import { DataContext } from "../components/Layout";
import imageMap from "../assets";
import TabDot from "../components/TabDot";

export default function Crew() {
  const { data } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const crew = [
    "douglas",
    "shuttleworth",
    "victor",
    "ansari"
  ]

   function changeTab(index) {
    setCurrentIndex(index)
   }


  return (
    <main className="flex flex-col items-center justify-center px-6">
      <div className="max-w-[1200px]">
        <p className="mini-header">
          <span className="num">02</span> MEET YOUR CREW
        </p>
        <div className="grid grid-flow-col max-md:grid-flow-row max-md:text-center items-center justify-center gap-20">
          <div className="max-md:justify-self-center">
            <div className="max-w-[480px] flex  max-md:text-center items-start max-md:items-center flex-col gap-5">
              <h2 className="term">{data.crew[currentIndex].role}</h2>
              <h3 className="name">
                {data.crew[currentIndex].name}
              </h3>
              <p className="text-clr-light text-md">{data.crew[currentIndex].bio}</p>
            </div>
            <div className="flex items-center max-md:justify-center mt-32 max-md:mt-10 gap-6">
              {crew.map((item, index) => (
                <TabDot key={index} name={item} index={index} changeTab={changeTab} currentIndex={currentIndex} />
              ))}
            </div>
          </div>
          <div className="max-md:self-center">
            <img src={imageMap[data.crew[currentIndex].images.png]} alt="crew member" />
          </div>
        </div>
      </div>
    </main>
  );
}
