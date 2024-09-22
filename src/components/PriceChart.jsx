
import TestChart from "./TestChart"

const PriceChart = () => {
  return (
    <>
    <div className="max-w-[837px] max-h-460px mb-10">
    <div className="flex justify-between flex-row">
      <h2>BitCoin Price Chart</h2>
          <ul className="flex gap-3">
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
      <div>
        <div>
        <TestChart/>

        </div>
        <div>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default PriceChart