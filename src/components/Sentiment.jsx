import { Fragment } from "react";
import SentimentIcon from "../assets/Sentiment1.png";

const Sentiment = () => {
  return (
    <Fragment>
      <h1 className="text-3xl">SentiMent</h1>
      <h2>Key Events</h2>
      <div className="flex gap-4 ">
        {/* Card 1 */}
        <div className="w-[456px] h-[250px] justify-center p-[18px] pb-[38px] bg-gray-100 rounded-lg flex">
          <img
            src={SentimentIcon}
            alt="Sentiment Icon"
            className="w-20 h-20 mb-4"
          />
          <div className="flex-grow">
            <h1 className="font-bold text-gray-800 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              veniam unde magnam, rem totam dicta.
            </h1>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              animi earum debitis id quis delectus voluptatem culpa ipsum harum
              reprehenderit alias consequatur, quia quae placeat dolor, nemo
              eveniet officiis voluptate.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[456px] h-[250px] justify-center p-[18px] pb-[38px] bg-gray-100 rounded-lg flex">
          <img
            src={SentimentIcon}
            alt="Sentiment Icon"
            className="w-20 h-20 mb-4"
          />
          <div className="flex-grow">
            <h1 className="font-bold text-gray-800 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              veniam unde magnam, rem totam dicta.
            </h1>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              animi earum debitis id quis delectus voluptatem culpa ipsum harum
              reprehenderit alias consequatur, quia quae placeat dolor, nemo
              eveniet officiis voluptate.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sentiment;
