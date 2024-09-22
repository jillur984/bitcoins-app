import PriceCard from "./PriceCard";
import BitcoinImage from "../assets/image bitcoin.png";
import Polygon from "../assets/Polygon.png";
import PriceChart from "./PriceChart";
import Trending from "./Trending";

const Header = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between px-4">
      {/* Left Section */}
      <div className="w-full md:max-w-[65%]">
        <div className="mb-5">
          <div className="flex items-center mb-5">
            <img
              src={BitcoinImage}
              alt="bitcoin-image"
              className="w-10 h-10 ml-2 mr-2"
            />
            <h1 className="text-2xl mr-2">BitCoin</h1>
            <h1 className="text-xl mr-4">BTC</h1>
            <button className="px-4 py-2 rounded-md border bg-gray-500 text-white">
              Rank#1
            </button>
          </div>

          <div className="flex items-center mb-5">
            <h2 className="text-3xl mr-3">$46,953.04</h2>
            <span className="text-xs flex items-center font-semibold text-green-400 bg-green-50 border border-green-400 px-2 py-1 rounded">
              <img
                src={Polygon}
                alt="polygon"
                className="w-3 h-2 align-middle mr-1"
              />
              2.51%
            </span>
            <span className="text-sm text-gray-500 ml-2">(24H)</span>
          </div>
        </div>

        {/* Responsive Price Chart */}
        <div className="w-full mx-auto">
          <PriceChart />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[35%] flex flex-col items-center space-y-4 mt-10 md:mt-0">
        <PriceCard />
        <Trending />
      </div>
    </div>
  );
};

export default Header;
