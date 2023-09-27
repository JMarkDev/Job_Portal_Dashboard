import React from 'react';
import Cards from '../../components/Cards';
import ApplicantSidebar from '../../components/ApplicantSidebar';
import profileImg from '../../assets/img/Seroy final.png';
import { 
  cardValues,
  jobData
} from '../Applicant/JobData';
import AppliedJobsTable from '../../components/AppliedJobsTable';
const DashboardApplicant = () => {

  return (
    <>
      <div className='fixed_page bg-applicant'>
        <div className='flex'>
          <ApplicantSidebar />
          <div>
            <div className='content absolute top-0 -mt-4'>
              <div className='flex items-center w-full '>
                <img src={profileImg} className='w-20 rounded float-left mr-5' alt='Profile' />
                <div>
                  <h2 className='font-bold text-lg'>Hello, I'm</h2>
                  <h1 className='text-2xl text-primary font-bold'>Josiel Mark</h1>
                </div>
              </div>
              <div className='w-full pt-10'>
                <Cards cardValues={cardValues} />
              </div>
              <div>
                  <h1 className='text-lg mt-10 mb-4'>Current Applied Jobs:</h1>
                  <AppliedJobsTable jobData={jobData}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApplicant;
