import { Fragment } from "react";
import johnSmith from "../assets/John Smith.png";
import johnSmith2 from "../assets/John Smith 2.png";

const Team = () => {
  return (
    <Fragment>
      <div className="container mx-auto max-w-[830px] md:ml-6">
        <h1 className="text-2xl mb-2">Team</h1>
        <h2 className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          praesentium minima et cupiditate aliquid, atque recusandae eum
          voluptates rem accusamus provident architecto tempora, doloremque,
          ducimus excepturi quibusdam nobis maiores. Dolor.
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-4 md:gap-6 mx-3 md:mx-6 mt-4 max-w-[830px]">
        {/* Card 1 */}
        <div className="flex gap-5 p-4 bg-gray-300 shadow-lg rounded-lg">
          {/* Card for John Smith */}
          <div className="flex-shrink-0 m-auto">
            <img
              src={johnSmith}
              alt="John Smith"
              className="w-20 h-20 rounded-md object-cover"
            />
            <h1 className="font-bold mt-2">John Smith</h1>
            <p className="text-sm text-gray-500">General Manager</p>
          </div>

          {/* Description */}
          <div className="text-gray-700 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            velit voluptate debitis, dolores inventore sequi ullam enim ab vero
            minus quo quibusdam nostrum et nisi blanditiis minima dignissimos
            vel! Culpa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro obcaecati esse unde doloribus quis, deserunt animi dignissimos
            natus nobis inventore quam earum cumque aperiam optio ullam nostrum
            ratione, perspiciatis aut.
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-5 p-4 bg-gray-300 shadow-lg rounded-lg">
          <div className="flex-shrink-0 m-auto">
            <img
              src={johnSmith2}
              alt="John Smith"
              className="w-20 h-20 rounded-md object-cover"
            />
            <h1 className="font-bold mt-2">John Smith</h1>
            <p className="text-sm text-gray-500">General Manager</p>
          </div>

          <div className="text-gray-700 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            velit voluptate debitis, dolores inventore sequi ullam enim ab vero
            minus quo quibusdam nostrum et nisi blanditiis minima dignissimos
            vel! Culpa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro obcaecati esse unde doloribus quis, deserunt animi dignissimos
            natus nobis inventore quam earum cumque aperiam optio ullam nostrum
            ratione, perspiciatis aut.
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-5 p-4 bg-gray-300 shadow-lg rounded-lg">
          <div className="flex-shrink-0 m-auto">
            <img
              src={johnSmith2}
              alt="John Smith"
              className="w-20 h-20 rounded-md object-cover"
            />
            <h1 className="font-bold mt-2">John Smith</h1>
            <p className="text-sm text-gray-500">General Manager</p>
          </div>

          <div className="text-gray-700 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            velit voluptate debitis, dolores inventore sequi ullam enim ab vero
            minus quo quibusdam nostrum et nisi blanditiis minima dignissimos
            vel! Culpa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro obcaecati esse unde doloribus quis, deserunt animi dignissimos
            natus nobis inventore quam earum cumque aperiam optio ullam nostrum
            ratione, perspiciatis aut.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
