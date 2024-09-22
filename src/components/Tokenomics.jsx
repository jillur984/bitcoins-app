import { Fragment } from "react";
import Circle from "./Circle";
import Team from "./Team";

const Tokenomics = () => {
  return (
    <Fragment>
      <div className="w-[833px]">
        <h1 className="text-2xl mb-2">Tokenomic</h1>
        <h2 className="mb-2">Initial Distribution</h2>
        <div className="flex items-center gap-2">
          <Circle/>
          <div className="">
            <div className="flex items-center mb-1 gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center mb-1 gap-1">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Foundation: 20%</span>
            </div>
          </div>
          
        </div>
        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laborum corrupti earum? Aliquid voluptatibus odio error officia veniam fugit, molestias explicabo ab rerum, ipsa itaque facere natus veritatis vel. Fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo blanditiis accusantium dicta ipsam consequatur, placeat voluptates sunt odit aut eius, facere incidunt omnis exercitationem alias tempore amet! Numquam, tempore.</p>
      </div>
      
    </Fragment>
  );
};

export default Tokenomics;
