import { Fragment } from "react";

const Performance = () => {
  return (
    <Fragment>
      <h1 className="text-3xl mb-4 text-left">Performance</h1>

      {/* Container with 65% width */}
      <div className="w-11/12 ml-6 md:w-[65%]  ">
        {/* Today's Low and High */}
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="flex flex-col items-center">
            <h1 className="text-lg">Today's Low</h1>
            <div className="text-2xl">46,930.22</div>
          </div>

          <div className="relative flex-grow mx-4">
            <div className="flex items-center justify-center">
              <div className="h-1 w-9/12 sm:w-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-center">
                  <span className="text-sm md:text-lg font-semibold">
                    $48,637.83
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-lg">Today's High</h1>
            <div className="text-2xl">49,343.22</div>
          </div>
        </div>

        {/* 52W Low and High */}
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="flex flex-col items-center">
            <h1 className="text-lg">52W Low</h1>
            <div className="text-2xl">46,930.22</div>
          </div>

          <div className="relative flex-grow mx-4">
            <div className="h-1 mx-auto w-9/12 sm:w-full bg-gradient-to-r from-green-500 to-yellow-500 shadow-lg"></div>
          </div>

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
