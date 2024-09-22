import { Fragment } from "react";
import johnSmith from "../assets/John Smith.png";
import johnSmith2 from '../assets/John Smith 2.png'

const Team = () => {
  return (
    <Fragment>
      <div>
        <h1 className="text-3xl mt-3 w-[821px] h-auto mx-3">Team</h1>
        <h2 className="text-justify mx-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          quod voluptatum voluptas tempore soluta reiciendis?
        </h2>
      </div>

      {/* Card 1 */}
      <div className="flex gap-5 mt-4 mx-6 p-4 bg-gray-300 shadow-lg rounded-lg w-[821px]">
        {/* Card for John Smith */}
        <div className="flex-shrink-0 m-auto mx-2">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit
          voluptate debitis, dolores inventore sequi ullam enim ab vero minus
          quo quibusdam nostrum et nisi blanditiis minima dignissimos vel! Culpa
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          obcaecati esse unde doloribus quis, deserunt animi dignissimos natus
          nobis inventore quam earum cumque aperiam optio ullam nostrum ratione,
          perspiciatis aut.
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex gap-5 mt-4 mx-6 p-4 bg-gray-300 shadow-lg rounded-lg w-[821px]">
        <div className="flex-shrink-0 m-auto mx-2">
          <img
            src={johnSmith2}
            alt="John Smith"
            className="w-20 h-20 rounded-md object-cover"
          />
          <h1 className="font-bold mt-2">John Smith</h1>
          <p className="text-sm text-gray-500">General Manager</p>
        </div>

        <div className="text-gray-700 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit
          voluptate debitis, dolores inventore sequi ullam enim ab vero minus
          quo quibusdam nostrum et nisi blanditiis minima dignissimos vel! Culpa
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          obcaecati esse unde doloribus quis, deserunt animi dignissimos natus
          nobis inventore quam earum cumque aperiam optio ullam nostrum ratione,
          perspiciatis aut.
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex gap-5 mt-4 mx-6 p-4 bg-gray-300 shadow-lg rounded-lg w-[821px]">
        <div className="flex-shrink-0 m-auto mx-2">
          <img
            src={johnSmith2}
            alt="John Smith"
            className="w-20 h-20 rounded-md object-cover"
          />
          <h1 className="font-bold mt-2">John Smith</h1>
          <p className="text-sm text-gray-500">General Manager</p>
        </div>

        <div className="text-gray-700 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit
          voluptate debitis, dolores inventore sequi ullam enim ab vero minus
          quo quibusdam nostrum et nisi blanditiis minima dignissimos vel! Culpa
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          obcaecati esse unde doloribus quis, deserunt animi dignissimos natus
          nobis inventore quam earum cumque aperiam optio ullam nostrum ratione,
          perspiciatis aut.
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
