import Image from 'next/image'

const teamMembers = [
  { name: 'Supriya Kumari', role: 'Web Development Lead' },
  { name: 'Vikash Kumar Ranjan', role: 'Web Development Co-Lead' },
  { name: 'Prakhar Prasad', role: 'Web Development Co-Lead' },
  { name: 'Ankit Upadhyay', role: 'App Development Co-Lead' },
  { name: 'Abhay Kumar', role: 'Robotics & IoT Lead' },
  { name: 'Ankita Chauhan', role: 'Robotics & IoT Co-Lead' },
  { name: 'Abhishek Kumar Jha', role: 'Cybersecurity Lead' },
  { name: 'Devika Kumari', role: 'Competitive Programming Lead' },
  { name: 'Rakhee Kumari', role: 'Competitive Programming Co-Lead' },
  { name: 'Abhishek Kumar', role: 'Creativity Lead' },
  { name: 'Braj Kumar', role: 'Creativity Co-Lead' },
  { name: 'Abhiraj', role: 'Outreach Lead' },
  { name: 'Surichi Kumar', role: 'Outreach Co-Lead' },
]

export default function Team() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

