import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="w-full fixed h-[80px] px-14 py-2 flex justify-between items-center border-b-[1px] border-gray-300 shadow-customBlue opacity-100">
        {/* Logo or Brand Name */}
        <p className="text-lg font-semibold text-blue-800">
          KOIN<span className="text-yellow-600">%</span>
        </p>

        {/* Navigation Links */}
        <div className="flex items-center ">
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-blue-700 cursor-pointer">
              <a href="/">Crypto Taxes</a>
            </li>
            <li className="hover:text-blue-700 cursor-pointer">
              <a href="/">Free Tools</a>
            </li>
            <li className="hover:text-blue-700 cursor-pointer">
              <a href="/">Resource Center</a>
            </li>
          </ul>

          {/* Get Started Button */}
          <button className="ml-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
