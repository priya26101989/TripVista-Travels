
import { useEffect, useState } from "react";

const destinations = [
  {
    name: "Manali",
    country: "Himachal Pradesh, India",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Goa",
    country: "Goa, India",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jaipur",
    country: "Rajasthan, India",
    price: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
  },
];

const heroSlides = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=2000&q=85",
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) =>
        (currentSlide - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
  };

  return (
    <main>
      <section className="relative flex min-h-screen items-center bg-gray-900 pt-20">
        {heroSlides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="mb-5 font-semibold uppercase tracking-[0.3em] text-orange-400">
            Discover Your Next Adventure
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Explore The World,
            <span className="block text-orange-400">
              One Journey at a Time.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Discover beautiful destinations, unforgettable experiences, and
            travel packages designed to make every moment special.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#destinations"
              className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Explore Destinations →
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-gray-900"
            >
              Plan Your Trip
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 text-white">
            <div>
              <p className="text-3xl font-extrabold">50+</p>
              <p className="mt-1 text-sm text-gray-300">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">1,200+</p>
              <p className="mt-1 text-sm text-gray-300">Happy Travelers</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">4.9/5</p>
              <p className="mt-1 text-sm text-gray-300">Traveler Rating</p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 right-6 z-10 flex items-center gap-3"
          aria-label="Hero image slideshow"
        >
          <button
            type="button"
            onClick={showPreviousSlide}
            aria-label="Show previous image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-xl text-white transition hover:bg-white hover:text-gray-900"
          >
            ‹
          </button>
          {heroSlides.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeSlide}
              className={`h-3 rounded-full transition-all ${
                index === activeSlide
                  ? "w-8 bg-orange-400"
                  : "w-3 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={showNextSlide}
            aria-label="Show next image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-xl text-white transition hover:bg-white hover:text-gray-900"
          >
            ›
          </button>
        </div>
      </section>

      <section
        id="destinations"
        className="bg-gradient-to-b from-amber-50 via-white to-sky-50 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Handpicked for You
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Popular Destinations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Find your perfect escape, from peaceful mountains to sunny
              beaches and beautiful historic cities.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-medium text-orange-500">
                    {destination.country}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {destination.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-gray-600">
                      Starting from{" "}
                      <span className="font-extrabold text-blue-700">
                        {destination.price}
                      </span>
                    </p>

                    <a
                      href="/contact"
                      className="shrink-0 rounded-full bg-blue-700 px-4 py-2 font-semibold text-white transition hover:bg-blue-800"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
