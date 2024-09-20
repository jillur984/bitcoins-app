import { Fragment } from "react"
import PerfomanceIcon from '../assets/perfomance.svg'

const Fundamentals = () => {
  return (
    <Fragment>
      <div className="flex">
      <h2 className="text-3xl mb-2 ml-4">Fundamental</h2>
      <img src={PerfomanceIcon} alt="" className="ml-2"  />
      </div>
      <div className="w-[820px] h-[270px] gap-12 flex justify-between ml-4">
      
      <div className="w-full h-[270px] space-y-4 mb-6">
  {/* Row 1: Bitcoin Price */}
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">Bitcoin Price</h1>
    <h2 className="text-lg text-gray-800">$16,815.46</h2>
  </div>

  {/* Row 2: 24H Low/High */}
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">24H Low/High</h1>
    <h2 className="text-lg text-gray-800">$16,382.07 / $16,874.12</h2>
  </div>

  {/* Row 3: 7D Low/High */}
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">7D Low/High</h1>
    <h2 className="text-lg text-gray-800">$16,382.07 / $16,874.12</h2>
  </div>

  {/* Row 4: Trading Volume */}
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">Trading Volume</h1>
    <h2 className="text-lg text-gray-800">$23,249,202,782</h2>
  </div>

  {/* Row 5: Market Cap Rank */}
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">Market Cap Rank</h1>
    <h2 className="text-lg text-gray-800">#1</h2>
  </div>
</div>


<div className="w-full h-[270px] space-y-4">
  
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-400">Markup Cap</h1>
    <h2 className="text-lg text-gray-800">$323,507,290,047</h2>
  </div>

  
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">MarkCup Cap DOminance</h1>
    <h2 className="text-lg text-gray-800">38.343%</h2>
  </div>

  
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <h1 className="text-lg font-semibold text-gray-700">Volume / Market Cap</h1>
    <h2 className="text-lg text-gray-800">0.0718</h2>
  </div>

  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
  <h1 className="text-lg font-semibold text-gray-700">All-Time High</h1>
  
  {/* Div to stack the price and date below each other */}
  <div className="flex flex-col items-end">
    <span className="text-justify">$69,044.77 -75.6%</span>
    <h2 className="text-justify text-gray-800">Nov 10, 2021 (about 1 year)</h2>
  </div>
</div>

<div className="flex justify-between items-center border-b border-gray-300 pb-2">
  <h1 className="text-lg font-semibold text-gray-700">All-Time Low</h1>
  
  {/* Div to stack the price and date below each other */}
  <div className="flex flex-col items-end">
    <span className="text-justify">$67.81 24729.1%</span>
    <h2 className="text-justify text-gray-800">Jul 06, 2013 (over 9 years)</h2>
  </div>
</div>
</div>
</div>
 
  




    </Fragment>
  )
}

export default Fundamentals