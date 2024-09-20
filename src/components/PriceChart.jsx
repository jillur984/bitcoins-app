import { Fragment } from "react";
import BitcoinImage from "../assets/image bitcoin.png";
import PolyGon from "../assets/PolyGon 2.svg";
import Chart from "./Chart";
import Summarybar from "./Summarybar";

const PriceChart = () => {
  return (
    <Fragment>
      <span>CryptoCurrencies &gt;&gt; Bitcoin</span>
      <div className="w-full max-w-60 my-20">
        <div className="flex justify-between items-center">
          <img src={BitcoinImage} alt="bitcoin-image" className="ml-2 mr-2" />
          <h1 className="text-2xl mr-1 space-x-2">BitCoin</h1>
          <div className="space-x-2">
            <h1 className="mr-1">BTC</h1>
          </div>
          <button className="w-[80px] h-[40px] gap-0 rounded-md  border-[1px] bg-gray-500 text-white ml-3">
            Rank#1
          </button>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-40 ml-2">
          <h2 className="text-2xl">$46,953.04</h2>
        </div>
        <div className="flex items-center space-x-2 p-2 border border-gray-200 rounded-md shadow-sm">
          <div className="flex items-center">
            <img src={PolyGon} alt="polygon" className="mr-2" />
            <span className="text-lg font-semibold text-gray-800">2.51%</span>
          </div>
          <div className="text-sm text-customGray">(24H)</div>
        </div>
      </div>
      <div className="w-[820px] h-[20px] text-gray-500 flex justify-between items-center flex-nowrap">
        <h1 className="whitespace-nowrap font-bold text-black ml-3">
          BitCoin Price Chart (USD)
        </h1>

        <div className="flex">
          <ul className="flex space-x-2">
            <li>1H</li>
            <li>24H</li>
            <li>7D</li>
            <li>1M</li>
            <li>3M</li>
            <li>6M</li>
            <li>1Y</li>
            <li>All</li>
          </ul>
        </div>
      </div>
    <Chart/>
    <Summarybar/>

    </Fragment>
  );
};

export default PriceChart;
