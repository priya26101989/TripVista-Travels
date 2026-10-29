// import { useState } from "react";




import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-extrabold tracking-tight text-blue-700">
          TripVista<span className="text-orange-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/contact"
            className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Book a Trip
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-4 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white"
          >
            Book a Trip
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

