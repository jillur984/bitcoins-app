import { Fragment, useState } from "react";

const Summarybar = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Overview");

  // Tabs data
  const tabs = [
    "Overview",
    "Fundamental",
    "NewsInsights",
    "Sentiments",
    "Team",
    "Technical",
    "Tokenomics",
  ];

  return (
    <Fragment>
      <div className=" flex  leading-2 justify-c md:flex-row  w-[400px]  gap-3 align-middle md:gap-3 md:w-[881px] h-[48px] text-gray-700 list-none mt-2 mb-10 cursor-pointer">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative ${
              activeTab === tab ? "font-bold text-blue-600" : ""
            }`} // Apply styles for active tab
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600" />
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Summarybar;
