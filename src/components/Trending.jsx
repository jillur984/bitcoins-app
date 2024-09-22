import BitcoinImage from "../assets/image bitcoin.png";
import Polygon from "../assets/Polygon.png";

const Trending = () => {
  return (
   <div>
    <div className="w-[427px]">
     <h2 className="ml-8 mt-3 mb-2 text-2xl">Trending Coins (24H)</h2>
    <div className="ml-4">
    <div className="flex justify-between">
     <div className="flex justify-between mx-3 gap-1 mb-2">
     <img src={BitcoinImage} className="w-5 h-6 rounded-full" />
     <h2 >Etheruram(ETH)</h2>
     </div>
      <span className="flex gap-2 mr-16 w-10 h-2"><img src={Polygon} />8.21%</span>
     </div>
     <div className="flex justify-between">
     <div className="flex justify-between mx-3 gap-1 mb-2">
     <img src={BitcoinImage} className="w-5 h-6 rounded-full" />
     <h2 >BitCoin(BTH)</h2>
     </div>
      <span className="flex gap-2 mr-16 w-10 h-2"><img src={Polygon} />8.21%</span>
     </div>
     <div className="flex justify-between">
     <div className="flex justify-between mx-3 gap-1 mb-2">
     <img src={BitcoinImage} className="w-5 h-6 rounded-full" />
     <h2 >Polygon(MATIC)</h2>
     </div>
      <span className="flex gap-2 mr-16 w-10 h-2"><img src={Polygon} />8.21%</span>
     </div>
    </div>
   </div>
   </div>
   

  )
}

export default Trending