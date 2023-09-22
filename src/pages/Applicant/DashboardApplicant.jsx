import React from 'react';
import Cards from '../../components/Cards';
import ApplicantSidebar from '../../components/ApplicantSidebar';
import profileImg from '../../assets/img/Seroy final.png';

const DashboardApplicant = () => {
  const cardValues = [
    { name: 'Total Applied', value: 100, bgColor: 'primary' },
    { name: 'Saved Jobs', value: 100, bgColor: 'secondary' },
    { name: 'Message', value: 100, bgColor: 'tertiary' },
    { name: 'Review CV', value: 100, bgColor: 'quaternary' },
  ];

  const jobData = [
    { 
      id: 1,
      jobTitle: 'Web Developer',
      location: 'New-York, USA',
      salary: '$60-$90',
      appliedDate: '12/12/2021',
      company: 'Google',
      status: 'Viewed',
    },
    { 
      id: 2,
      jobTitle: 'Software Engineer',
      location: 'New-York, USA',
      salary: '$60-$90',
      appliedDate: '12/12/2021',
      company: 'Amazon',
      status: 'Success',
    },
    { 
      id: 3,
      jobTitle: 'Software Developer',
      location: 'New-York, USA',
      salary: '$60-$90',
      appliedDate: '12/12/2021',
      company: 'Google',
      status: 'Interview',
    },
    { 
      id: 4,
      jobTitle: 'Web Developer',
      location: 'New-York, USA',
      salary: '$60-$90',
      appliedDate: '12/12/2021',
      company: 'Google',
      status: 'Cancelled',
    },
  ]

  const statusData = jobData.map((job) => {
      if (job.status === 'Viewed') {
        return 'primary';
      } else if (job.status === 'Success') {
        return 'secondary';
      } else if (job.status === 'Interview') {
        return 'tertiary';
      } else {
        return 'cancel';
      }
})

  return (
    <>
      <div className='fixed_page bg-applicant'>
        <div className='flex'>
          <ApplicantSidebar />
          <div>
            <div className='content absolute top-0'>
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
                <table className='w-full border-collapse'>
                  <thead >
                    <tr className='text-center bg-gray-200'>
                      <th className='px-4 py-2'>Job Title</th>
                      <th className='px-4 py-2'>Apply Date</th>
                      <th className='px-4 py-2'>Company</th>
                      <th className='px-4 py-2'>Status</th>
                    </tr>
                  </thead>
                  
                  <tbody>

                  { jobData.map((job) => (
                    <tr key={job.id} className='text-table-color text-center border-b-2 border-b-table-border'>
                    <td className='px-4 py-2'>
                      <h1 className='text-left text-lg font-bold'>{job.jobTitle}</h1>
                      <p className='text-left'>{job.location}</p>
                      <p className='text-left'>Salary: <span className='font-bold'>{job.salary}</span> / Per Hour</p>
                    </td>
                    <td className='px-4 py-2'>{job.appliedDate}</td>
                    <td className='px-4 py-2'>{job.company}</td>
                    <td className='px-4 py-2 '>
                      <p className={`text-white ${statusData[job.id - 1]} p-2 text-sm rounded`}>{job.status}</p>
                    </td>
                  </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApplicant;
