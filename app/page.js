import Hero from "../components/Hero/Hero";
import DestinationSection from "../components/DestinationSection/DestinationSection";
import { indiaDestinations, internationalDestinations } from "../data/destinations.jsx";

export const metadata = {
  title: 'Travel Unbounded | Experiential Travel Across India and Beyond',
  description: 'Travel Unbounded offers curated travel experiences across India and the world, focusing on culture, adventure, and personalized journeys.',
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
          <Hero />
          <section className="mt-16 w-full">
            <h2 className="p-2">Indian Destinations</h2>
            <DestinationSection title="India Destinations" destinations={indiaDestinations} />
          </section>
          <section className="mt-16 w-full">
            <h2 className="p-2">International Destinations</h2>
            <DestinationSection title="International Destinations" destinations={internationalDestinations} />
          </section>

          <section className=' mt-16 w-full text-center'>
            <h2>Ready to start your journey?</h2>
            <p className="mb-4">Let us design a trip built around you</p>
            <a href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"> Plan Your Trip</a>    
          </section>


        </main>
      </div>
    </>
  );
}
