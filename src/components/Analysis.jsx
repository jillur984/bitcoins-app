import { Fragment } from "react";

const Analysis = () => {
  return (
    <Fragment>
      <div className=" sm:mt-16">
        <h1 className="text-2xl">Analyst Estimate</h1>
      </div>
      <div className="w-[710px] h-[186px] mb-8 flex items-center">
        <div className="flex justify-center items-center bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg w-12 h-12">
          <span className="text-1xl text-white ml-1">76%</span>
        </div>

     
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
};

export default Analysis;
