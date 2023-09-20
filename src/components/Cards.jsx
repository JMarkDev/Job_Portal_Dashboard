import { FaUserAlt } from "react-icons/fa";

const Cards = ({ cardValues }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mb-5 -mt-3 -mx-3">
      {cardValues.map((item, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/2 ">
          <div 
            className={`rounded-lg ${item.bgColor} mx-3.5 my-3 py-3 flex justify-between items-center`}>
            <FaUserAlt className="icon ml-2 md:ml-8 h-10 w-10" />
            <div className="flex flex-col justify-center items-end p-5">
              <h2 className="text-lg text-white">{item.name}</h2>
              <h1 className="font-bold text-2xl text-white">{item.value}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
