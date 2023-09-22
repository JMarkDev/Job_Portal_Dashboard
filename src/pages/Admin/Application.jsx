import { Link } from 'react-router-dom'
import { BiSortDown } from 'react-icons/bi' 
import { BsThreeDotsVertical } from 'react-icons/bs'

const applicationData = [
  {
    id: 1,
    date_applied: 'June 1, 2020',
    company: 'Mark Zuckerberg',
    type: 'Full Time',
    position: 'Frontend Developer',
    contact: '0912345678',
    status: 'Pending'
  },
  {
    id: 2,
    date_applied: 'June 1, 2020',
    company: 'Mark Zuckerberg',
    type: 'Full Time',
    position: 'Frontend Developer',
    contact: '0912345678',
    status: 'Pending'
  },
  {
    id: 3,
    date_applied: 'June 1, 2020',
    company: 'Mark Zuckerberg',
    type: 'Full Time',
    position: 'Frontend Developer',
    contact: '0912345678',
    status: 'Pending'
  },
  {
    id: 4,
    date_applied: 'June 1, 2020',
    company: 'Mark Zuckerberg',
    type: 'Full Time',
    position: 'Frontend Developer',
    contact: '0912345678',
    status: 'Pending'
  },
  {
    id: 5,
    date_applied: 'June 1, 2020',
    company: 'Mark Zuckerberg',
    type: 'Full Time',
    position: 'Frontend Developer',
    contact: '0912345678',
    status: 'Pending'
  },
]

const Application = () => {

  const handleStatus = (id) => {
    console.log(id)
  }

  return (
    <div className='dashboard'>
      <div className='flex justify-between lg:items-center flex-wrap'>
        <div className='pr-20'>
          <h1 className='font-bold font-sans'>Showing 45 Applicants</h1>
          <p className='text-sm mt-2 text-notfound-p'>Based your preference</p>
        </div>
        <div className='flex justify-between sm:items-start flex-grow sm:mt-3 flex-col sm:flex-row'>
        <div className='lg:ml-3 mb-3 sm:m-0'>
          <ul className='flex gap-3'>
            <li className='hover:bg-primary hover:text-white bg-skills-bg py-2.5 px-4 border rounded-full text-primary text-sm'>
              <Link to='/'>All</Link>
            </li>
            <li className='hover:bg-primary hover:text-white bg-skills-bg py-2.5 px-4 border rounded-full text-primary text-sm'>
              <Link to='/'>Pending</Link>
            </li>
            <li className='hover:bg-primary hover:text-white bg-skills-bg py-2.5 px-4 border rounded-full text-primary text-sm'>
              <Link to='/'>On-Hold</Link>
            </li>
            <li className='hover:bg-primary hover:text-white bg-skills-bg py-2.5 px-4 border rounded-full text-primary text-sm'>
              <Link to='/'>Candidate</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className='flex text-primary border border-primary rounded-full py-2.5 px-4 text-sm'>
            <BiSortDown className='text-xl mr-2' />
            Newest
          </button>
        </div>
        </div>
      </div>
      <div className='mt-10 -mx-4'>
        <div className='px-4'>
        <table className='w-full  bg-white'>
        <thead className='text-center'>
          <tr className='border-b border-b-border_table'>
            <th><input type='checkbox' className='w-5 h-5'/></th>
            <th className='py-3 text-sm'>ID</th>
            <th className='py-3 text-sm'>Date Applied</th>
            <th className='py-3 text-sm'>Company</th>	
            <th className='py-3 text-sm'>Type</th>	
            <th className='py-3 text-sm'>Position</th>	
            <th className='py-3 text-sm'>Contact</th>	
            <th className='py-3 text-sm'>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
        {applicationData.map((application) => (
          <tr key={application.id} className='border-b text-table-color border-b-border_table'>
            <td className='p-5'><input type='checkbox' className='w-5 h-5'/></td>
            <td className='text-sm'>{application.id}</td>
            <td className='text-sm'>{application.date_applied}</td>
            <td className='text-sm'>{application.company}</td>
            <td className='text-sm'>{application.type}</td>
            <td className='text-sm'>{application.position}</td>
            <td className='text-sm'>{application.contact}</td> 
            <td className='text-sm'>{application.status}</td>
            <td>
              <BsThreeDotsVertical className='m-auto text-xl'
                onClick={() => handleStatus(application.id)}
              />
            </td>
          </tr>
        ))}
          
        </tbody>
      </table>
        </div>

      </div>
    </div>
  )
}

export default Application
