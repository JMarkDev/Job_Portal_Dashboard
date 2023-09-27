export const cardValues = [
    { name: 'Total Applied', value: 100, bgColor: 'primary' },
    { name: 'Saved Jobs', value: 100, bgColor: 'secondary' },
    { name: 'Message', value: 100, bgColor: 'tertiary' },
    { name: 'Review CV', value: 100, bgColor: 'quaternary' },
  ];

export  const jobData = [
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
    { 
      id: 5,
      jobTitle: 'Software Engineer',
      location: 'New-York, USA',
      salary: '$60-$90',
      appliedDate: '12/12/2021',
      company: 'Amazon',
      status: 'Success',
    },
  ]

export  const statusData = jobData.map((job) => {
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