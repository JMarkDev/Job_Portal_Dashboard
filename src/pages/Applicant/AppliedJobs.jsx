import React from 'react'
import ApplicantSidebar from '../../components/ApplicantSidebar'

const AppliedJobs = () => {
  return (
    <div className='fixed_page bg-applicant'>
        <div className='flex'>
        <ApplicantSidebar />
        <div>
          <h1>Applied Jobs</h1>
        </div>
      </div>
    </div>
    
  )
}

export default AppliedJobs 
