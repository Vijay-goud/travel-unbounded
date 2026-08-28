import Link from "next/link";
import './Hero.css';
export default function Hero() {
    return(
        <div className="hero">
            <p className="hero-eyebrow">Travel Unbounded</p>
            <h1 className='hero-title'>India's Most Trusted 
                Experiential Travel Experts
            </h1>
            <p className="hero-subtitle">Discover journeys built around people, culture and 
                forgettable experiences. 
            </p>
            <Link href="/contact" className="hero-cta">Plan Your Trip</Link>
        </div>
    )
}