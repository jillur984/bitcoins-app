import { Fragment } from "react";
import bitcoin1 from "../assets/Bitcoincard1.png";
import bitcoin2 from "../assets/Bitcoincard2.png";

const BitCoinCard = () => {
  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row gap-4 max-w-[830px] mx-auto ">
        {/* First Card */}
        <div className="flex bg-gradient-to-r from-blue-500 to-blue-200 items-start bg-slate-700 p-4 rounded-lg w-full sm:w-1/3 h-32">
          <img src={bitcoin1} alt="Bitcoin" className="w-20 h-20 mr-4" />
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-white text-lg font-semibold">
              Calculate Your Tax Liability
            </h2>
            <button className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-sm rounded hover:bg-emerald-400 transition">
              Check Now →
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex bg-gradient-to-r from-orange-500 to-orange-300 items-start bg-slate-700 p-4 rounded-lg w-full sm:w-1/3 h-32">
          <img src={bitcoin2} alt="Bitcoin" className="w-20 h-20 mr-4" />
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-white text-lg font-semibold">
              Calculate Your Profile
            </h2>
            <button className="mt-2 px-3 py-1 bg-white text-slate-700 text-sm rounded hover:bg-emerald-400 transition">
              Check Now →
            </button>
          </div>
        </div>
      </div>

      {/* New Passage Section */}
      <div className="mt-6">
        <p className="text-black text-base">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper du.
        </p>
      </div>
    </Fragment>
  );
};

export default BitCoinCard;
