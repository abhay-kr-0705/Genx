import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">About GENx Club</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission & Vision</h2>
        <p className="text-lg mb-4">
          GENx Club aims to foster innovation, creativity, and technological advancement among students at Sereshah Engineering College. We envision a community of passionate tech enthusiasts who collaborate, learn, and grow together.
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide a platform for students to explore cutting-edge technologies, develop practical skills, and prepare for successful careers in the ever-evolving tech industry.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Domains</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Web Development: Creating stunning and functional websites using the latest technologies.</li>
          <li>App Development: Building mobile applications for iOS and Android platforms.</li>
          <li>AI & ML: Exploring the fascinating world of Artificial Intelligence and Machine Learning.</li>
          <li>Robotics & IoT: Designing and programming robots, and working with Internet of Things devices.</li>
          <li>Cybersecurity: Learning about protecting digital assets and systems from cyber threats.</li>
          <li>Competitive Programming: Sharpening coding skills and preparing for coding competitions.</li>
          <li>Creativity: Exploring the intersection of technology and creative arts.</li>
          <li>Outreach: Connecting with the tech community and organizing events.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p>Work with experienced peers and mentors from various fields.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Projects & Competitions</h3>
            <p>Participate in exciting projects and competitions – hackathons, Ideathons, and more.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Hands-on Workshops</h3>
            <p>Gain practical experience with our regular workshops and hands-on sessions.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Community & Networking</h3>
            <p>Connect with like-minded tech enthusiasts and industry experts.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Activities & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Annual Events</h3>
            <p>Participate in annual hackathons, Ideathons, and coding contests.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Workshops & Webinars</h3>
            <p>Learn directly from experts through special sessions.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Innovation Challenges</h3>
            <p>Test your skills in innovation and design sprints.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Project Showcases</h3>
            <p>Get featured and recognized for your best projects.</p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link href="/signup">
          <Button size="lg">Join GENx Club Today</Button>
        </Link>
      </div>
    </div>
  )
}

