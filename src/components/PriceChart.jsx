import { Fragment } from "react";
import BitcoinImage from "../assets/image bitcoin.png";

import Chart from "./Chart";


const PriceChart = () => {
  return (
    <Fragment>
      <div className="w-full max-w-60 my-20">
        <div className="flex justify-between items-center">
          <img src={BitcoinImage} alt="bitcoin-image" className="ml-2 mr-2" />
          <h1 className="text-2xl mr-1 space-x-2">BitCoin</h1>
          <div className="space-x-2">
            <h1 className="mr-1">BTC</h1>
          </div>
          <button className="w-[80px] h-[40px] gap-0 rounded-md border-[1px] bg-gray-500 text-white ml-3">
            Rank#1
          </button>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-40 ml-2">
          <h2 className="text-2xl mt-3 mb-3">$46,953.04</h2>
        </div>
        <div className="flex items-center space-x-2 border border-gray-200 rounded-md shadow-sm">
          <div className="flex items-center ">
         
            <span className="text-lg font-semibold text-green-400 ">2.51%</span>
          </div>
          
        </div>
        <div className="text-sm text-gray-500 mt-3 ml-2">(24H)</div>
      </div>

      
      <div className="w-[820px] h-[20px] text-gray-500 flex justify-between items-center flex-nowrap">
        <h1 className="whitespace-nowrap font-bold text-black ml-3">
          BitCoin Price Chart (USD)
        </h1>

        
        <div className="flex">
          <ul className="hidden lg:flex justify-between gap-8 ml-8">
            <li>1H</li>
            <li>24H</li>
            <li>7D</li>
            <li>1M</li>
            <li>3M</li>
            <li>6M</li>
            <li>1Y</li>
            <li>All</li>
          </ul>
          {/* here need to give card bujsen  */}
        </div>
      </div>

     
      <Chart />
    
      
    </Fragment>
  );
};

export default PriceChart;




