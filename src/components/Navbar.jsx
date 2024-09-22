import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="w-full fixed sm:flex-row h-[px] px-14 py-2 md:flex justify-between items-center border-b-[1px] border-gray-300 shadow-customBlue opacity-100">
        <p className="text-lg font-semibold text-blue-800 hidden md:block">
          KOIN<span className="text-yellow-600">%</span>
          <span className="text-black align-super text-sm">TM</span>
        </p>

        <div className="flex items-center ">
          <ul className="flex space-x-6 text-black">
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

          <button className="ml-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>

      <div className="pt-[80px] px-14">
        <span className="text-gray-500">
          CryptoCurrencies &gt;&gt;
          <span className="text-black font-md">Bitcoin</span>{" "}
        </span>
      </div>
    </Fragment>
  );
};

export default Navbar;
