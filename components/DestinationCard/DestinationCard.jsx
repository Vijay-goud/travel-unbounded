import "./DestinationCard.css";

export default function DestinationCard({ destination }) {
    return (
        <div className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-info">
                <h2>{destination.name}</h2>
                <p className="destination-description">{destination.description}</p>
                <p className="destination-price">Price: ₹{destination.price}</p>
            </div>
        </div>
    );
}