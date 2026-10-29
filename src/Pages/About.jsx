function About() {
return ( <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50"> <section className="bg-gradient-to-r from-indigo-950 via-blue-800 to-teal-600 px-6 pt-20 pb-16 py-16 text-center text-white"> <h1 className="mb-4 text-4xl font-bold md:text-5xl">
About TripVista </h1> <p className="text-lg">
Your journey begins with us. </p> </section>


  <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
    <div>
      <h2 className="mb-5 text-3xl font-bold text-gray-800">
        Who We Are
      </h2>
      <p className="mb-4 leading-7 text-gray-600">
        TripVista Travels helps travelers discover beautiful destinations
        and enjoy memorable travel experiences.
      </p>
      <p className="leading-7 text-gray-600">
        Our goal is to make every trip comfortable, enjoyable, and
        easy to plan. From relaxing holidays to exciting adventures,
        we help you explore the world.
      </p>
    </div>

    <img
      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
      alt="Beautiful mountains"
      className="h-80 w-full rounded-2xl object-cover shadow-lg"
    />
  </section>

  <section className="bg-gradient-to-r from-sky-100/80 to-cyan-50 px-6 py-12 text-center">
    <h2 className="mb-8 text-3xl font-bold text-gray-800">
      Why Choose Us?
    </h2>

    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
      <div       className="rounded-xl border border-sky-100 bg-white/90 p-6 shadow">
        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Easy Planning
        </h3>
        <p className="text-gray-600">
          Plan your next holiday with ease.
        </p>
      </div>

      <div       className="rounded-xl border border-sky-100 bg-white/90 p-6 shadow">
        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Beautiful Destinations
        </h3>
        <p className="text-gray-600">
          Discover places worth exploring.
        </p>
      </div>

      <div       className="rounded-xl border border-sky-100 bg-white/90 p-6 shadow">
        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Memorable Trips
        </h3>
        <p className="text-gray-600">
          Create unforgettable travel memories.
        </p>
      </div>
    </div>
  </section>
</div>


);
}

export default About;
