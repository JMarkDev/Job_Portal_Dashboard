import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const ApplicantSidebar = () => {
  return (
    <div className='sidebar'>
    <h1 className="text-4xl text-center pt-4 font-serif text-white font-semibold">JobHunt</h1>
        <div className='w-250 h-450 bg-primary rounded'>
            <ul className='p-5 flex flex-col justify-center '>
                <li className='flex items-center p-2 text-lg'>
                    <Link to='/applicant-dashboard' className='flex items-center'>
                        <BiSolidDashboard className='mr-3'/>
                        Dashboard
                    </Link>
                </li>
                <li className='flex items-center p-2 text-lg'>
                <Link to='/applicant-profile' className='flex items-center'>
                    <BiSolidDashboard className='mr-3'/>
                    Profile
                </Link>
                </li>
                <li className='flex items-center p-2 text-lg'>
                <Link to='/applicant-applied-jobs' className='flex items-center'>
                    <BiSolidDashboard className='mr-3'/>
                    Applied Jobs
                </Link>
                </li>
                <li className='flex items-center p-2 text-lg'>
                <Link to='/applicant-settings' className='flex items-center'>
                    <BiSolidDashboard className='mr-3'/>
                    Settings
                </Link>
                </li>
                <li className='flex items-center p-2 text-lg'>
                <Link to='/login' className='flex items-center'>
                    <BiSolidDashboard className='mr-3'/>
                    Logout
                </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ApplicantSidebar
