// import { Fragment } from "react";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Perfomance from "./components/Perfomance";
// import Fundamentals from "./components/Fundamentals";
// import Sentiment from "./components/Sentiment";
// import Analysis from "./components/Analysis";
// import About from "./components/About";
// import Tokenomics from "./components/Tokenomics";
// import Team from "./components/Team";
// import Summarybar from "./components/Summarybar";


// const App = () => {
//   return (
//     <Fragment>
//       <Navbar />

//       <div className="ml-8 md:w-1/2 w-[1328px] h-[4399px] top-[132px] left-[56px] gap-5 opacity-100 font-inter ">
//         <Header />

//         <Summarybar />

//         <Perfomance />
//         <Fundamentals />
//         <Sentiment />
//         <Analysis />
//         <About />
//         <Tokenomics />
//         <Team />
//       </div>
//     </Fragment>
//   );
// };

// export default App;


import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Perfomance from "./components/Perfomance";
import Fundamentals from "./components/Fundamentals";
import Sentiment from "./components/Sentiment";
import Analysis from "./components/Analysis";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import Summarybar from "./components/Summarybar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      {/* Add the container class for responsive behavior */}
      <div className="container mx-auto px-4">
        <Header />
        <Summarybar />
        <Perfomance />
        <Fundamentals />
        <Sentiment />
        <Analysis />
        <About />
        <Tokenomics />
        <Team />
      </div>
    </Fragment>
  );
};

export default App;
