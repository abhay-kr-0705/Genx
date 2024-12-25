import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import ImageSlider from './components/ImageSlider'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to GENx Club</h1>
        <p className="text-xl mb-6">Empowering the next generation of tech innovators at Sereshah Engineering College</p>
        <Link href="/about">
          <Button size="lg">Learn More</Button>
        </Link>
      </section>

      <ImageSlider />

      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-lg">No events are currently scheduled. Check back soon for exciting workshops and hackathons!</p>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-4">News & Announcements</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Club Launch</h3>
          <p>We're excited to announce the launch of GENx Club with a brand new website and expanded focus areas!</p>
        </div>
      </section>
    </div>
  )
}

