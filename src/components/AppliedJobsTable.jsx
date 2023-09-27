import React from 'react'
import { statusData } from '../pages/Applicant/JobData'
const AppliedJobsTable = ({jobData}) => {
  return (
    <div>
                <table className='w-full border-collapse'>
                  <thead >
                    <tr className='text-center bg-gray-200'>
                      <th className='px-4 py-2 text-left'>Job Title</th>
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
  )
}

export default AppliedJobsTable
