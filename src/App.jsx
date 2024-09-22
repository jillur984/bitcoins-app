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
import Like from "./components/Like";

const App = () => {
  return (
    <Fragment>
      <Navbar />
     
      <div className="container  px-4">
        <Header />
        <Summarybar />
        <Perfomance />
        <Fundamentals />
        <Sentiment />
        <Analysis />
        <About />
        <Tokenomics />
        <Team />
        <Like />
      </div>
    </Fragment>
  );
};

export default App;
