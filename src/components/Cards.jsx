import { FaUserAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mb-5">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="card_interviews flex justify-between items-center md:mr-3.5">
          <FaUserAlt className="icon ml-2 md:ml-8 h-10 w-10" />
          <div className="flex flex-col justify-center items-end p-5">
            <h2 className="text-lg text-white">Job Category</h2>
            <h1 className="font-bold text-2xl text-white">100</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
      <div className="card_apply flex justify-between items-center md:ml-3.5 md:mt-0 mt-7">
          <FaUserAlt className="icon ml-2 md:ml-8 h-10 w-10" />
          <div className="flex flex-col justify-center items-end p-5">
            <h2 className="text-lg text-white">Total Employer</h2>
            <h1 className="font-bold text-2xl text-white">100</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="card_profile flex justify-between items-center md:mr-3.5 mt-7">
          <FaUserAlt className="icon ml-2 md:ml-8 h-10 w-10" />
          <div className="flex flex-col justify-center items-end p-5">
            <h2 className="text-lg text-white">Total Candidates</h2>
            <h1 className="font-bold text-2xl text-white">100</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="card_message flex justify-between items-center md:ml-3.5 mt-7">
          <FaUserAlt className="icon ml-2 md:ml-8 h-10 w-10" />
          <div className="flex flex-col justify-center items-end p-5">
            <h2 className="text-lg text-white">Total job</h2>
            <h1 className="font-bold text-2xl text-white">100</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
