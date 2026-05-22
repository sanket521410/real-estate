import { useState } from "react"
import "./App.css"

function App() {

  const [properties, setProperties] = useState([
    {
      title: "Luxury Villa",
      location: "Mumbai",
      price: "₹2.5 Cr",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    },
    {
      title: "Modern Apartment",
      location: "Pune",
      price: "₹90 Lakh",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ])

  const [search, setSearch] = useState("")
  const [selectedProperty, setSelectedProperty] = useState<any>(null)

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const addProperty = () => {

    if (!title || !location || !price || !image) {
      alert("Fill all fields")
      return
    }

    const newProperty = {
      title,
      location,
      price,
      image
    }

    setProperties([...properties, newProperty])

    setTitle("")
    setLocation("")
    setPrice("")
    setImage("")
  }

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <h1>Real Estate</h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search property..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Search</button>

        </div>

      </nav>

      {/* Hero */}
      <section className="hero">

        <h2>Find Your Dream Home</h2>

        <p>Buy, Rent and Sell Properties Easily</p>

        <h3 style={{ marginTop: "20px" }}>
          Contact: +91 9876543210
        </h3>

      </section>

      {/* Add Property */}
      <section className="form-section">

        <h2>Add Property</h2>

        <div className="form">

          <input
            type="text"
            placeholder="Property Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button onClick={addProperty}>
            Add Property
          </button>

        </div>

      </section>

      {/* Cards */}
      <section className="cards">

        {filteredProperties.map((property, index) => (

          <div
            className="card"
            key={index}
            onClick={() => setSelectedProperty(property)}
          >

            <img src={property.image} alt="" />

            <h3>{property.title}</h3>

            <p>{property.location}</p>

            <span>{property.price}</span>

          </div>

        ))}

      </section>

      {/* Popup */}
      {selectedProperty && (

        <div className="popup">

          <div className="popup-content">

            <button
              className="close-btn"
              onClick={() => setSelectedProperty(null)}
            >
              X
            </button>

            <img src={selectedProperty.image} alt="" />

            <h2>{selectedProperty.title}</h2>

            <p>{selectedProperty.location}</p>

            <h3>{selectedProperty.price}</h3>

          </div>

        </div>

      )}

    </div>
  )
}

export default App