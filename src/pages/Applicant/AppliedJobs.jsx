// import React from 'react'
// import ApplicantSidebar from '../../components/ApplicantSidebar'
// import AppliedJobsTable from '../../components/AppliedJobsTable'
// import { jobData } from '../Applicant/JobData'
// const AppliedJobs = () => {
//   return (
//     <div className='fixed_page bg-applicant sidebar'>
//         <div className='flex'>
//         <ApplicantSidebar />
//         <div className='p-10 -mt-10 w-full bg-white'>
//         <h1 className='text-lg mt-10 mb-4'>Applied Jobs:</h1>
//           <AppliedJobsTable jobData={jobData}/>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default AppliedJobs 
import React from 'react';
import Cards from '../../components/Cards';
import ApplicantSidebar from '../../components/ApplicantSidebar';
import profileImg from '../../assets/img/Seroy final.png';
import { 
  cardValues,
  jobData
} from '../Applicant/JobData';
import AppliedJobsTable from '../../components/AppliedJobsTable';
const AppliedJobs = () => {

  return (
    <>
      <div className='fixed_page bg-applicant'>
        <div className='flex'>
          <ApplicantSidebar />
          <div>
            <div className='content absolute top-0'>
              <div >
                  <h1 className='text-lg p-4 -mt-4'>Applied Jobs:</h1>
                  <div className='mt-5'>
                    <AppliedJobsTable jobData={jobData}/> 
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
