import Raact from "react";
import { Link } from "react-router-dom";
const MainStart = () => {
  return (
    <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40 mt-36'>
      <div className='w-full flex flex-col items-center relative z-10'>
        <h1 className='font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4'>
          挑戰心算王
        </h1>
        <Link
          to='/Options'
          className='block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10'
        >
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default MainStart;
