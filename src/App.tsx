function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-3xl font-bold text-blue-600">
            Dream Estate
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg">

            <a href="#" className="hover:text-blue-600">
              Home
            </a>

            <a href="#" className="hover:text-blue-600">
              Properties
            </a>

            <a href="#" className="hover:text-blue-600">
              About
            </a>

            <a href="#" className="hover:text-blue-600">
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-3xl">
            ☰
          </button>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070')"
        }}
      >

        <div className="bg-black/60 p-10 rounded-3xl text-center text-white w-full max-w-5xl mx-5">

          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Dream Home
          </h1>

          <p className="mt-5 text-lg md:text-xl">
            Luxury homes and villas at best prices
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-3xl p-6 grid md:grid-cols-4 gap-5 mt-10">

            <input
              type="text"
              placeholder="Location"
              className="border p-4 rounded-xl outline-none text-black"
            />

            <select className="border p-4 rounded-xl outline-none text-black">

              <option>Property Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>House</option>

            </select>

            <select className="border p-4 rounded-xl outline-none text-black">

              <option>Budget</option>
              <option>50 Lakh</option>
              <option>1 Crore</option>
              <option>2 Crore</option>

            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4">
              Search
            </button>

          </div>

        </div>

      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto py-20 px-5">

        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Luxury Villa
              </h3>

              <p className="text-gray-500 mt-2">
                Mumbai, India
              </p>

              <p className="text-blue-600 text-2xl font-bold mt-4">
                ₹2.5 Crore
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Modern House
              </h3>

              <p className="text-gray-500 mt-2">
                Pune, India
              </p>

              <p className="text-blue-600 text-2xl font-bold mt-4">
                ₹1.8 Crore
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Premium Apartment
              </h3>

              <p className="text-gray-500 mt-2">
                Delhi, India
              </p>

              <p className="text-blue-600 text-2xl font-bold mt-4">
                ₹95 Lakh
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App