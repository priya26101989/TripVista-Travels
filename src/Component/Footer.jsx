import { Link } from "react-router-dom";

function Footer() {
return ( <footer className="bg-gray-950 text-gray-300"> <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">


    {/* Company Info */}
    <div>
      <h2 className="mb-4 text-2xl font-bold text-white">
        Trip<span className="text-cyan-400">Vista</span>
      </h2>

      <p className="leading-7 text-gray-400">
        Discover beautiful destinations and create unforgettable
        memories with TripVista Travels. Your journey begins here!
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">
        Quick Links
      </h3>

      <ul className="space-y-3">
        <li>
          <Link to="/" className="transition hover:text-cyan-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="transition hover:text-cyan-400">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="transition hover:text-cyan-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="transition hover:text-cyan-400">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">
        Our Services
      </h3>

      <ul className="space-y-3">
        <li>Flight Booking</li>
        <li>Hotel Booking</li>
        <li>Holiday Packages</li>
        <li>Tour Planning</li>
        <li>Adventure Trips</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">
        Contact Info
      </h3>

      <ul className="space-y-3 text-gray-400">
        <li>📍 India</li>
        <li>✉️ info@tripvista.example</li>
        <li>🌐 TripVista Travels</li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="border-t border-gray-800 px-6 py-5 text-center">
    <p className="text-sm text-gray-400">
      © {new Date().getFullYear()} TripVista Travels. All rights reserved.
    </p>
    <p className="mt-2 text-sm text-gray-500">
      Explore More. Travel Better.
    </p>
  </div>
</footer>


);
}

export default Footer;
