import Frame from '../assets/Frame.png';

const PriceCard = () => {
  return (
    <div className="bg-blue-500 h-[515px] ml-40   w-[426px] rounded-xl shadow-lg p-6 flex flex-col justify-between">
      {/* Title */}
      <h1 className="text-2xl font-bold text-white mb-4">
        Get Started with KoinX for Free
      </h1>
      
      {/* Description */}
      <p className="text-white text-sm leading-relaxed mb-6">
        A range of features that you can equip for free, KoinX allows you to be 
        more educated and aware of your tax reports.
      </p>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img src={Frame} alt="Pricing features" className="w-36 h-auto object-contain" />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
          Get Started For Free
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
