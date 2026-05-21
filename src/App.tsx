import { useState } from "react"

function App() {

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

          <div className="hidden md:flex gap-8 text-lg">

            <a href="#">Home</a>
            <a href="#">Properties</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

          </div>

        </div>

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