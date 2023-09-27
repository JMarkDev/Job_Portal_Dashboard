import React from 'react'
import ApplicantSidebar from '../../components/ApplicantSidebar'
const ApplicantSettings = () => {
  return (
    <div className='fixed_page bg-applicant'>
        <div className='flex'>
          <ApplicantSidebar />
          <div>
          <div className='content absolute top-0'>
            <div >
            <h1 className='text-lg p-4 -mt-4'>Settings</h1>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ApplicantSettings
