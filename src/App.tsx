import { useState } from "react"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<any>(null)

  const properties = [
    {
      title: "Luxury Villa",
      location: "Mumbai, India",
      price: "₹2.5 Crore",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070",
      description:
        "Beautiful luxury villa with swimming pool and modern design."
    },

    {
      title: "Modern House",
      location: "Pune, India",
      price: "₹1.8 Crore",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      description:
        "Premium modern house with large garden and parking."
    },

    {
      title: "Premium Apartment",
      location: "Delhi, India",
      price: "₹95 Lakh",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070",
      description:
        "Luxury apartment in prime city location."
    }
  ]

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

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div className="md:hidden bg-white px-5 pb-5 flex flex-col gap-4 text-lg">

            <a href="#">Home</a>
            <a href="#">Properties</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

          </div>

        )}

      </nav>

      {/* Hero */}
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

      {/* Property Cards */}
      <section className="max-w-7xl mx-auto py-20 px-5">

        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {properties.map((property, index) => (

            <div
              key={index}
              onClick={() => setSelectedProperty(property)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >

              <img
                src={property.image}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {property.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {property.location}
                </p>

                <p className="text-blue-600 text-2xl font-bold mt-4">
                  {property.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Popup */}
      {selectedProperty && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-5">

          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative">

            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-5 right-5 bg-black text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedProperty.image}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">

              <h2 className="text-4xl font-bold">
                {selectedProperty.title}
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                {selectedProperty.location}
              </p>

              <p className="text-blue-600 text-3xl font-bold mt-5">
                {selectedProperty.price}
              </p>

              <p className="mt-5 text-gray-700 leading-7">
                {selectedProperty.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App