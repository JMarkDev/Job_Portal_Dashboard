import { FaUserAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="card flex flex-wrap justify-center items-center">
        <div className="card_interviews flex justify-between items-center ">
            <FaUserAlt className="icon ml-8 h-10 w-10"/>
            <div className="flex flex-col justify-center items-end p-5">
            <h2 className="text-lg">Profile</h2>
            <h1 className="font-bold text-2xl">100</h1>
            </div>
        </div>
        <div className=" card_apply flex justify-between items-center">
        <FaUserAlt className="icon ml-8 h-10 w-10"/>
          <div className="flex flex-col justify-center items-end p-5">
          <h2 className="text-lg">Profile</h2>
          <h1 className="font-bold text-2xl">100</h1>
          </div>
        </div>
        <div className="card_profile flex justify-between items-center">
          <FaUserAlt className="icon ml-8 h-10 w-10"/>
          <div className="flex flex-col justify-center items-end p-5">
          <h2 className="text-lg">Profile</h2>
          <h1 className="font-bold text-2xl">100</h1>
          </div>  
        </div>
        <div className="card_message flex justify-between items-center">
          <FaUserAlt className="icon ml-8 h-10 w-10"/>
          <div className="flex flex-col justify-center items-end p-5">
              <h2 className="text-lg">Profile</h2>
              <h1 className="font-bold text-2xl">100</h1>
          </div>
        </div>
    </div>
  )
}

export default Cards
