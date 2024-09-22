import BitcoinImage from "../assets/image bitcoin.png";

const Like = () => {
  return (
    <div className="container max-w-[65%] mt-6 mx-auto">
      <h3 className="mb-4 text-2xl text-center">You May Also Like</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md text-left"
            >
              <div className="flex items-center mb-2">
                <img
                  src={BitcoinImage}
                  alt="Bitcoin"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-green-600">+0.52%</span>
              </div>
              <p className="text-xl font-bold">$319.34</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Like;
