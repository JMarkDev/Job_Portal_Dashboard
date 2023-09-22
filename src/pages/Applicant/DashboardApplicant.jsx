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
                  <thead>
                    <tr className='text-left bg-gray-200'>
                      <th className='px-4 py-2'>Job Title</th>
                      <th className='px-4 py-2'>Apply Date</th>
                      <th className='px-4 py-2'>Company</th>
                      <th className='px-4 py-2'>Status</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <tr className='text-left border-b border-b-border_table'>
                      <td className='px-4 py-2'>
                        <h1 className='text-lg font-bold'>Web Developer</h1>
                        <p>New-York, USA<br />Salary: $60-$90 / Per Hour</p>
                      </td>
                      <td className='px-4 py-2'>12/12/2021</td>
                      <td className='px-4 py-2'>Google</td>
                      <td className='px-4 py-2 '>
                        <span className='text-white bg-primary p-2 px-5 text-sm rounded'>Applied</span>
                      </td>
                    </tr>
                    <tr className='text-left border-b border-b-border_table'>
                      <td className='px-4 py-2'>
                        <h1 className='text-lg font-bold'>Web Developer</h1>
                        <p className='text-gray'>New-York, USA<br />Salary: $60-$90 / Per Hour</p>
                      </td>
                      <td className='px-4 py-2'>12/12/2021</td>
                      <td className='px-4 py-2'>Google</td>
                      <td className='px-4 py-2 '>
                        <span className='text-white bg-primary p-2 px-5 text-sm rounded'>Applied</span>
                      </td>
                    </tr>
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
