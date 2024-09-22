import { Fragment } from "react";
import PerfomanceIcon from "../assets/perfomance.svg";

const Fundamentals = () => {
  return (
    <Fragment>
      {/* Header with title and icon */}
      <div className="flex">
        <h2 className="text-3xl mb-2 ml-4">Fundamental</h2>
        <img src={PerfomanceIcon} alt="Performance Icon" className="ml-2" />
      </div>

      {/* Responsive container */}
      <div className="container flex flex-col md:flex-row justify-between mt-8 w-[65%] ml-4">
        {/* First column */}
        <div className="w-full sm:w-[100%] md:w-[48%] space-y-4 mb-6">
          {/* Row 1: Bitcoin Price */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Bitcoin Price
            </h1>
            <h2 className="text-lg text-gray-800">$16,815.46</h2>
          </div>

          {/* Row 2: 24H Low/High */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              24H Low/High
            </h1>
            <h2 className="text-lg text-gray-800">$16,382.07 / $16,874.12</h2>
          </div>

          {/* Row 3: 7D Low/High */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">7D Low/High</h1>
            <h2 className="text-lg text-gray-800">$16,382.07 / $16,874.12</h2>
          </div>

          {/* Row 4: Trading Volume */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Trading Volume
            </h1>
            <h2 className="text-lg text-gray-800">$23,249,202,782</h2>
          </div>

          {/* Row 5: Market Cap Rank */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Market Cap Rank
            </h1>
            <h2 className="text-lg text-gray-800">#1</h2>
          </div>
        </div>

        {/* Second column */}
        <div className="w-full sm:w-[100%] md:w-[48%] space-y-4 mb-6">
          {/* Row 1: Market Cap Dominance */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Market Cap Dominance
            </h1>
            <h2 className="text-lg text-gray-800">38.343%</h2>
          </div>

          {/* Row 2: Volume / Market Cap */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Volume / Market Cap
            </h1>
            <h2 className="text-lg text-gray-800">0.0718</h2>
          </div>

          {/* Row 3: All-Time High */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              All-Time High
            </h1>
            <div className="flex flex-col items-end">
              <span className="text-justify">$69,044.77 -75.6%</span>
              <h2 className="text-justify text-gray-800">
                Nov 10, 2021 (about 1 year)
              </h2>
            </div>
          </div>

          {/* Row 4: All-Time Low */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <h1 className="text-lg font-semibold text-gray-700">
              All-Time Low
            </h1>
            <div className="flex flex-col items-end">
              <span className="text-justify">$67.81 24729.1%</span>
              <h2 className="text-justify text-gray-800">
                Jul 06, 2013 (over 9 years)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Fundamentals;
