import { Fragment } from "react";
import PolyGon from "../assets/PolyGon 2.svg";

const Performance = () => {
  return (
    <Fragment>
      <h1 className="text-3xl mb-4 ">Performance</h1>
      
      <div className="w-[830px]">
        {/* Today's Low and High */}
      <div className="flex items-center justify-between mb-4 w-[830px] h-[172px] gap-4">
        {/* Left section for Today's Low */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg">Today's Low</h1>
          <div className="text-2xl">46,930.22</div>
        </div>

        {/* Horizontal Line with Polygon in the Center */}
        <div className="relative flex-grow mx-4">
          <div className="flex items-center justify-center">
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg relative">
              {/* Polygon centered */}
              <img
                src={PolyGon}
                alt="polygon"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              {/* Value below the Polygon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-center">
                <span className="text-lg font-semibold">$48,637.83</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right section for Today's High */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg">Today's High</h1>
          <div className="text-2xl">49,343.22</div>
        </div>
      </div>

      {/* 52W Low and High */}
      <div className="flex items-center justify-between mb-4 w-[830px] h-[172px] gap-2">
        {/* Left section for 52W Low */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg">52W Low</h1>
          <div className="text-2xl">46,930.22</div>
        </div>

        {/* Horizontal Line without Polygon */}
        <div className="relative flex-grow mx-4">
          <div className="h-1 bg-gradient-to-r from-green-500 to-yellow-500 shadow-lg"></div>
        </div>

        {/* Right section for 52W High */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg">52W High</h1>
          <div className="text-2xl">49,343.22</div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Performance;
