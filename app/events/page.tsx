import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Events() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Events & Workshops</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-lg">No events are currently scheduled. Check back soon for exciting workshops and hackathons!</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Past Events</h2>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Web Development Workshop (3 days)</h3>
            <p className="mb-2">Learn the basics of HTML, CSS, and JavaScript</p>
            <p className="text-sm text-gray-600">Date: December 21-23, 2024</p>
          </li>
        </ul>
      </section>

      <div className="text-center">
        <Link href="/contact">
          <Button size="lg">Suggest an Event</Button>
        </Link>
      </div>
    </div>
  )
}

