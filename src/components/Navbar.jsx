import { Fragment, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 z-50 w-full fixed h-[80px] px-14 py-2 md:flex justify-between items-center border-b-[1px] border-gray-300 shadow-lg opacity-100">
        <p className="text-lg font-semibold text-blue-200 hidden md:block">
          KOIN<span className="text-yellow-400">%</span>
          <span className="text-black align-super text-sm">TM</span>
        </p>

        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <span>&#10005;</span> // Close icon
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        <div
          className={`flex-col md:flex items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:flex-row`}
        >
          <ul className="flex space-x-6 text-white">
            <li className="hover:text-yellow-300 cursor-pointer">
              <a href="/">Crypto Taxes</a>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <a href="/">Free Tools</a>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <a href="/">Resource Center</a>
            </li>
          </ul>

          <button className="hidden ml-6 px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-400 md:block">
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
