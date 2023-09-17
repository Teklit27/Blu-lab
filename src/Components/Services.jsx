// Services.js

import { FaCog, FaPaintBrush, FaSchool,FaGlobe } from 'react-icons/fa';

const services = [
  {
    title: 'Software Product Engineering  ',
    icon: <FaCog size={40} />,
    description:" Transform ideas into powerful software products. Our expert teams handle everything from concept to launch, focusing on innovation and user-centric design."
  },
  {
    icon: <FaPaintBrush size={40} />, 
    title: 'UI/UX Design',
    description: ' Craft captivating user experiences. Our designers create interfaces that engage users and leave a lasting impact.',
  },
  {
    icon: <FaSchool size={40} />,
    title: 'School Management System',
    description: 'Modernize education administration. Our system streamlines tasks and enhances communication for students, educators, and parents.',
  },
  {
    icon: <FaGlobe size={40} />,
    title: 'Web Solutions',
    description: 'Elevate your online presence. We deliver high-performance websites and e-commerce solutions tailored to your business needs.',
  },
]

export default function Services() {
  return (
    <section className=" py-14">
      <div className="px-4 md:px-32 text-center">
        <h2 className=" md:text-xl font-semibold text-indigo-500">Our Services</h2>
        <h2 className="text-lg md:text-2xl font-semibold mb-8 dark:text-slate-50">we provide best quality services</h2>
        
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