import lorem from '../../assets/img/lorem-ipsum-logo-teamplet-design-template-27e21a1ab02717b60482278b29321db8_screen.jpg'

const company = [
  {
    id: 1, 
    companyTitle: "Highspeed Studios", 
    description: "Internet Service Porvider"
  },
  {
    id: 2, 
    companyTitle: "Highspeed Studios", 
    description: "Internet Service Porvider"
  },
  {
    id: 3, 
    companyTitle: "Highspeed Studios", 
    description: "Internet Service Porvider"
  },
  {
    id: 4, 
    companyTitle: "Highspeed Studios", 
    description: "Internet Service Porvider"
  },
  {
    id: 5, 
    companyTitle: "Highspeed Studios", 
    description: "Internet Service Porvider"
  },
  {
    id: 6, 
    companyTitle: "Highspeed Studios", 
    description: "Internet Service Porvider"
  },
]

const Companies = () => {
  return (
    <div className='dashboard'>
    <div className="job_card flex flex-wrap -m-3">
    {
      company.map((item) => (
      <div key={item.id} className=" w-full:w-1/4 md:w-1/2 lg:w-1/3 w-full">
        <div className="rounded-lg bg-white m-3 py-20 flex flex-col justify-center
        items-center">
            <img src={lorem} alt="lorem" className="h-20 w-20 rounded-lg"/>
            <h1 className="text-xl mt-6">{item.companyTitle}</h1>
            <p className="text-notfound-p mt-3">{item.description}</p>
        </div>
      </div>
      ))
    }
  </div>
    </div>
  )
}

export default Companies
