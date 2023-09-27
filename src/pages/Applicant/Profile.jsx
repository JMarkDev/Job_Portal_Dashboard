import React from 'react'
import ApplicantSidebar from '../../components/ApplicantSidebar'
import profileImg from '../../assets/img/Seroy final.png';
const Profile = () => {
  return (
    <div className='fixed_page bg-applicant'>
        <div className='flex'>
          <ApplicantSidebar />
          <div>
          <div className='content absolute top-0'>
            <div >
            <h1 className='text-lg p-4 -mt-4'>My Profile</h1>
            </div>
              <form className='py-50 px-70'>
              <div className=' bg-form-bg lg:flex rounded'>
              <div className='px-8 flex flex-col items-center border-r-2 border-b-table-border'>
              <img src={profileImg} className='rounded-full mt-10 mb-5'/>
              <h1 className='text-lg'>James Reid</h1>
              <p className='text-sm text-gray-600'>sample@gmail.com</p>
            </div>
           <div className='flex flex-wrap p-10'> 
               <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>First Name*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Last Name*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Location*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Mobile Number*</label>
                  <input type='number' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Email*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Website Link*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Current Job Place*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Designation*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Qualification*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='lg:w-50% w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Language*</label>
                  <input type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                </div>
              </div>
              <div className='w-100%'>
                <div className='mt-0 mx-3 mb-5'>
                  <label className='block text-sm font-medium text-gray-700'>Description*</label>
                  <textarea type='text' className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-40 sm:text-sm'/>
                  </div>
              </div>
              <div className='mt-5 mx-3'>
                <button className='bg-primary text-white px-5 py-2 rounded-md hover:bg-bg-btn'>Save Profile</button>
              </div>
            </div>
              </div>
           
            </form>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
