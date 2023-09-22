import React from 'react'
import ApplicantSidebar from '../../components/ApplicantSidebar'

const Profile = () => {
  return (
    <div className='fixed_page bg-applicant'>
        <div className='flex'>
        <ApplicantSidebar />
        <div>
          <div className='p-10'>
            <h1>Profile</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
