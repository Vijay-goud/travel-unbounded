import DestinationCard from "../DestinationCard/DestinationCard";
import './DestinationSection.css';
export default function DestinationSection({ destinations }) {
    return (
        <section className="destination-section">
            <h1 className="destination-heading">Explore Our Destinations</h1>
            <div className="m-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
        </section>
    );
}   