import React from 'react'
import ApplicantSidebar from '../../components/ApplicantSidebar'
const ApplicantSettings = () => {
  return (
    <div className='fixed_page bg-applicant'>
        <div className='flex'>
        <ApplicantSidebar />
        <div>
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  )
}

export default ApplicantSettings
