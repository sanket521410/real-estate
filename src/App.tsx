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
    }
  ])

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

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <h1>Real Estate</h1>

      </nav>

      {/* Hero */}
      <section className="hero">

        <h2>Find Your Dream Home</h2>

        <p>Buy, Rent and Sell Properties Easily</p>

      </section>

      {/* Add Property Form */}
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

        {properties.map((property, index) => (

          <div className="card" key={index}>

            <img src={property.image} alt="" />

            <h3>{property.title}</h3>

            <p>{property.location}</p>

            <span>{property.price}</span>

          </div>

        ))}

      </section>

    </div>
  )
}

export default App