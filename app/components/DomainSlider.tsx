'use client'

import { useState, useEffect } from 'react'

const domains = [
  {
    name: 'Web Development',
    description: 'Learn to create stunning and functional websites using the latest web technologies.',
    lead: 'Supriya Kumari',
    coLead: 'Vikash Kumar Ranjan and Prakhar Prasad',
  },
  {
    name: 'App Development',
    description: 'Dive into mobile app development for iOS and Android platforms.',
    lead: 'TBA',
    coLead: 'Ankit Upadhyay',
  },
  {
    name: 'AI & ML',
    description: 'Explore the fascinating world of Artificial Intelligence and Machine Learning.',
    lead: 'TBA',
    coLead: 'TBA',
  },
  {
    name: 'Robotics & IoT',
    description: 'Build and program robots, and learn about the Internet of Things.',
    lead: 'Abhay Kumar',
    coLead: 'Ankita Chauhan',
  },
  {
    name: 'Cybersecurity',
    description: 'Learn about protecting digital assets and systems from cyber threats.',
    lead: 'Abhishek Kumar Jha',
    coLead: 'TBA',
  },
  {
    name: 'Competitive Programming',
    description: 'Sharpen your coding skills and prepare for coding competitions.',
    lead: 'Devika Kumari',
    coLead: 'Rakhee Kumari',
  },
  {
    name: 'Creativity',
    description: 'Explore the intersection of technology and creative arts.',
    lead: 'Abhishek Kumar',
    coLead: 'Braj Kumar',
  },
  {
    name: 'Outreach',
    description: 'Connect with the tech community and organize events.',
    lead: 'Abhiraj',
    coLead: 'Surichi Kumar',
  },
]

const DomainSlider = () => {
  const [currentDomain, setCurrentDomain] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDomain((prevDomain) => (prevDomain + 1) % domains.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const domain = domains[currentDomain]

  return (
    <div className="bg-gray-100 p-6 rounded-lg transition-all duration-500 ease-in-out">
      <h2 className="text-2xl font-semibold mb-4">{domain.name}</h2>
      <p className="text-lg mb-4">{domain.description}</p>
      <p className="mb-2"><strong>Lead:</strong> {domain.lead}</p>
      <p className="mb-4"><strong>Co-Lead:</strong> {domain.coLead}</p>
    </div>
  )
}

export default DomainSlider

