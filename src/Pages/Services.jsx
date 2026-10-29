const services = [
{
icon: "✈️",
title: "Flight Booking",
description: "Explore flight options for your next destination.",
},
{
icon: "🏨",
title: "Hotel Booking",
description: "Find comfortable stays for your travel plans.",
},
{
icon: "🏝️",
title: "Holiday Packages",
description: "Discover exciting holiday packages for your vacation.",
},
{
icon: "🗺️",
title: "Tour Planning",
description: "Plan your itinerary and explore popular attractions.",
},
{
icon: "🚗",
title: "Transportation",
description: "Explore transportation options for your journey.",
},
{
icon: "🎒",
title: "Adventure Trips",
description: "Discover exciting outdoor activities and adventures.",
},
];

function Services() {
return ( <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-orange-50"> <section className="bg-gradient-to-r from-indigo-950 via-blue-800 to-teal-600 px-6 pt-20 pb-16 py-16 text-center text-white"> <h1 className="mb-4 text-4xl font-bold md:text-5xl">
Our Services </h1> <p className="text-lg">
Everything you need for a wonderful journey. </p> </section>


  <section className="mx-auto max-w-6xl px-6 py-16">
    <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
      Travel Services for You
    </h2>

    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border border-cyan-100 bg-white/90 p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="mb-4 text-5xl">{service.icon}</div>

          <h3 className="mb-3 text-xl font-bold text-blue-900">
            {service.title}
          </h3>

          <p className="leading-7 text-gray-600">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </section>
</div>


);
}

export default Services;
