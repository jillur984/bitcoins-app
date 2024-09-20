import { Fragment } from "react"
import Navbar from "./components/Navbar"
import PriceChart from "./components/PriceChart"
import Perfomance from "./components/Perfomance"
import Fundamentals from "./components/Fundamentals"
import Sentiment from "./components/Sentiment"
import Analysis from "./components/Analysis"
import About from "./components/About"
import Tokenomics from "./components/Tokenomics"


const App = () => {
  return (
    <Fragment>
      <div>
      <Navbar/>
      </div>
      <div className="ml-8 w-full md:w-1/2 lg:w-[1328px] h-auto lg:h-[4399px] top-[132px] left-[56px] gap-5 opacity-100 font-inter ">
      
      <PriceChart/>
      <Perfomance/>
      <Fundamentals/>
      <Sentiment/>
      <Analysis/>
      <About/>
      <Tokenomics/>
      </div>
    </Fragment>
  )
}

export default App