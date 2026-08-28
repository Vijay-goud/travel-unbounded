import Link from "next/link";
import './Navbar.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-content">
                <Link href="/" className="navbar-logo">Travel Unbounded</Link>
                <nav className="navbar-links">
                    <Link href="/" className="navbar-link">Home</Link>
                    <Link href="/about" className="navbar-link">About</Link>
                    <Link href="/contact" className="navbar-link">Contact</Link>
                    <Link href="/contact" className="plan-your-trip">Plan Your Trip</Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}