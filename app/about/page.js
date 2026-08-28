import OfficeCard from "@/components/OfficeCard";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Travel Unbounded",
  description: "Learn about Travel Unbounded, our story, offices, and why travelers trust us.",
};

const offices = [
  {
    id: 1,
    city: "Bengaluru",
    address: "541, 7th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru - 560008",
  },
  {
    id: 2,
    city: "Kochi",
    address: "LR Towers, S Janatha Road, Palavivatton, Kochi - 682025",
  },
  {
    id: 3,
    city: "Nairobi",
    address: "Westpark Towers, Muthithi Road, Nairobi, P.O. Box 6950, Postal Code 00100",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <section className="about-hero">
        <h1>About Travel Unbounded</h1>
        <p>India&apos;s Most Trusted Experiential Travel Experts</p>
      </section>

      <section className="mt-16">
        <h2>Our Story</h2>
        <p className="about-story">
          Travel Unbounded was founded with a simple belief: travel should be
          about people, culture, and experiences that stay with you long after
          the trip ends. We design journeys across India and the world,
          combining local expertise with genuine care for every traveler.
        </p>
      </section>



      <section className="mt-16">
        <h2>Our Locations</h2>
        <div className="office-grid">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      </section>
      <hr />
      <section className="mt-16">
        <WhyChooseUs />
      </section>

      <section className="mt-16 text-center">
        <h2>Ready to start your journey?</h2>
        <a href="/contact" className="hero-cta mt-4 inline-block">
          Plan Your Trip
        </a>
      </section>
    </main>
  );
}