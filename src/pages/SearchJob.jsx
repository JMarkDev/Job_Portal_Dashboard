import { MdLocationOn } from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import lorem from '../assets/img/lorem-ipsum-logo-teamplet-design-template-27e21a1ab02717b60482278b29321db8_screen.jpg'

const skillsBtn = [
  {id: 1, skills: "Suggestions"},
  {id: 2, skills: "Programmer"},
  {id: 3, skills: "UX Designer"},
  {id: 4, skills: "Developer"},
  {id: 5, skills: "Engineer"},
  {id: 6, skills: "Software Engineer"},
  {id: 7, skills: "Web Developer"},
]

const jobs = [
  {id: 1, company: "Company Name", 
  jobTitle: "Database Programmer", 
  salary: "₱140,000 - ₱150,000", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...", 
  setup: "REMOTE",
  location: "Cebu City"
  },
  {id: 2, company: "Company Name", 
  jobTitle: "Database Programmer", 
  salary: "₱140,000 - ₱150,000", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...", 
  setup: "REMOTE",
  location: "Cebu City"
  },
  {id: 3, company: "Company Name", 
  jobTitle: "Database Programmer", 
  salary: "₱140,000 - ₱150,000", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...", 
  setup: "REMOTE",
  location: "Cebu City"
  },
  {id: 4, company: "Company Name", 
  jobTitle: "Database Programmer", 
  salary: "₱140,000 - ₱150,000", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...", 
  setup: "REMOTE",
  location: "Cebu City"
  },
  {id: 5, company: "Company Name", 
  jobTitle: "Database Programmer", 
  salary: "₱140,000 - ₱150,000", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...", 
  setup: "REMOTE",
  location: "Cebu City"
  },
  {id: 6, company: "Company Name", 
  jobTitle: "Database Programmer", 
  salary: "₱140,000 - ₱150,000", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...", 
  setup: "REMOTE",
  location: "Cebu City"
  },
]

const SearchJob = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-white p-3 py-4 rounded-lg">
          <div className="flex justify-start items-center">
            <MdLocationOn className="text-primary text-3xl"/>
            <h1 className="font-sans text-lg ml-4">Around You</h1>
          </div>
          <div className="flex justify-between items-center"> 
            <input className="border border-gray-300 py-2 px-5 w-350 rounded-full text-custom-base" type="text" placeholder="Search by Title, Company or any jobs keywords..." />
          </div>
          <div className="flex justify-center items-center">
                <button className="text-sm text-primary flex mr-5 bg-filter-bg py-3 px-5 rounded-full">                
                  <BiFilter className="text-primary text-xl mr-2"/>
                  Filter
                </button>
                <button className="text-sm flex bg-primary text-white p-3 px-5 rounded-full">
                <AiOutlineSearch className="text-xl mr-2"/> 
                FIND
                </button>
          </div>
        </div>
        <div className="mt-3">
          {
            skillsBtn.map((item) => (
              <button key={item.id} className="bg-skills-bg py-2.5 px-4 border rounded-full text-primary mr-2 mt-2 text-sm">{item.skills}</button>
            ))
          }
        </div>
        <div className="job_card mt-10 flex flex-wrap">
          {
            jobs.map((item) => (
            <div key={item.id} className=" w-full:w-1/4 md:w-1/2 lg:w-1/3">
              <div className="rounded-lg bg-white m-3 p-6 ">
                  <img src={lorem} alt="lorem" className="h-20 w-20 rounded-lg float-right"/>
                  <p className="pb-2 text-notfound-p">{item.company}</p>
                  <h1 className="text-xl mb-2">{item.jobTitle}r</h1>
                  <h2 className="text-lg text-primary">{item.salary}</h2>
                  <p className="text-notfound-p my-5">{item.description}</p>
                  <div className="flex justify-between items-center my-1">
                    <Link to='/' className="bg-skills-bg py-2.5 px-4 rounded-full text-sm text-primary">{item.setup}</Link>
                    <h2 className="text-lg">{item.location}</h2>
                  </div>
              </div>
            </div>
            ))
          }
        </div>
      
    </div>
  )
}

export default SearchJob
