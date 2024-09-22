import { Fragment } from "react";
import SentimentIcon from "../assets/Sentiment1.png";

const Sentiment = () => {
  return (
    <Fragment>
      <h1 className="text-3xl mb-4 text-left">Sentiment</h1>
      <h2 className="mb-2 text-left">Key Events</h2>

      {/* Container for responsiveness, set to 65% width, aligned to the left */}
      <div className="w-11/12 md:w-2/3">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 1 */}
          <div className="flex bg-gray-100 rounded-lg p-4 md:w-[456px]">
            <img
              src={SentimentIcon}
              alt="Sentiment Icon"
              className="w-20 h-20 mb-4"
            />
            <div className="flex-grow">
              <h1 className="font-bold text-gray-800 mb-2 text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                veniam unde magnam, rem totam dicta.
              </h1>
              <p className="text-gray-800 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis animi earum debitis id quis delectus voluptatem culpa
                ipsum harum reprehenderit alias consequatur, quia quae placeat
                dolor, nemo eveniet officiis voluptate.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-gray-100 rounded-lg p-4 md:w-[456px]">
            <img
              src={SentimentIcon}
              alt="Sentiment Icon"
              className="w-20 h-20 mb-4"
            />
            <div className="flex-grow">
              <h1 className="font-bold text-gray-800 mb-2 text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                veniam unde magnam, rem totam dicta.
              </h1>
              <p className="text-gray-800 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis animi earum debitis id quis delectus voluptatem culpa
                ipsum harum reprehenderit alias consequatur, quia quae placeat
                dolor, nemo eveniet officiis voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sentiment;
