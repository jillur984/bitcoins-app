import { Fragment } from "react";
import bitcoin1 from "../assets/Bitcoincard1.png";
import bitcoin2 from "../assets/Bitcoincard2.png";

const BitCoinCard = () => {
  return (
    <Fragment>
      <div className="flex gap-5">
        <div className="w-[410px] h-[150px] border-t-emerald-300 bg-slate-700 relative p-4 flex flex-col justify-between">
          <div className="flex items-center">
            <img src={bitcoin1} alt="Bitcoin" className="w-24 h-24 mr-4" />
            <div className="flex flex-col">
              <h2 className="text-white text-lg font-semibold">
                Calculate Your Profile
              </h2>
              <button className="mt-2 px-4 py-2 bg-white text-slate-700 rounded hover:bg-emerald-400 transition">
                Check Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-[410px] h-[150px] border-t-emerald-300 bg-slate-700 relative p-4 flex flex-col justify-between">
          <div className="flex items-center">
            <img src={bitcoin2} alt="Bitcoin" className="w-24 h-24 mr-4" />
            <div className="flex flex-col">
              <h2 className="text-white text-lg font-semibold">
                Calculate Your Profile
              </h2>
              <button className="mt-2 px-4 py-2 bg-white text-slate-700 rounded hover:bg-emerald-400 transition">
                Check Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Passage Section */}
      <div className="mt-8">
        <p className="text-black text-base">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper du
        </p>
      </div>
    </Fragment>
  );
};

export default BitCoinCard;
