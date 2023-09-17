// Services.js

import { FaCog, FaChartLine, FaLock } from 'react-icons/fa';

const services = [
  {
    icon: <FaCog size={40} />,
    title: 'Custom Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <FaChartLine size={40} />, 
    title: 'Analytics & Reporting',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <FaLock size={40} />,
    title: 'Secure Infrastructure',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <FaLock size={40} />,
    title: 'Secure Infrastructur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function Services() {
  return (
    <section className=" py-14">
      <div className="px-4 md:px-32 text-center">
        <h2 className=" md:text-xl font-semibold text-indigo-500">Our Services</h2>
        <h2 className="text-lg md:text-2xl font-semibold mb-8 ">we provide best quality services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {services.map(service => (
            <div key={service.title} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-4 rounded-full flex bg-gray-700 text-white`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-medium">{service.title}</h4>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  )
}