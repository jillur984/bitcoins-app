import { Fragment } from "react";

const Analysis = () => {
  return (
    <Fragment>
      <div className="md:mt-36 sm:mt-16">
        <h1 className="text-2xl">Analyst Estimate</h1>
      </div>
      <div className="w-[710px] h-[186px] flex items-center">
      
      <div className="flex justify-center items-center  w-24 h-24  bg-gray-200 rounded-full shadow-lg">
        <span className="text-xl text-green-500 font-bold items-center">76%</span>
      </div>

      {/* Right Section - Vertical Layout with Close Proximity */}
      <div className="flex flex-col ml-12">
        <div className="flex items-center mb-1">
          <h1 className="text-lg font-semibold">Buy</h1>
          <div className="h-1 bg-green-300 shadow-lg mx-2 w-64"></div>
          <h2 className="text-xl font-bold">76%</h2>
        </div>
        
        <div className="flex items-center mb-1">
          <h1 className="text-lg font-semibold">Hold</h1>
          <div className="h-1 bg-gray-300 shadow-lg mx-2 w-4"></div>
          <h2 className="text-xl font-bold">8%</h2>
        </div>
        
        <div className="flex items-center mb-1">
          <h1 className="text-lg font-semibold">Self</h1>
          <div className="h-1 bg-red-600 shadow-lg mx-2 w-10"></div>
          <h2 className="text-xl  font-bold">16%</h2>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Analysis;
