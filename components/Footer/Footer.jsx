import Link from "next/link";
import './Footer.css';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className='footer-header'>Travel Unbounded</h3>
                    <p className="footer-description">
                        Curated journeys built around people, cultures, and unforgettable
                        experiences. We believe in the power of travel to transform lives and create lasting memories.
                    </p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-header">Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-header">Contact Us</h3>
                    <div className="footer-contact">
                        <p>Email: hello@travelunbounded.com</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Address: 123 Travel St, Adventure City, World</p>
                    </div>
                </div>
                <div >© 2026 Travel Unbounded. All rights reserved.</div>
            </div>
        </footer>
    );
}