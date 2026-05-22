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

  <div className="search-box">
    <input type="text" placeholder="Search property..." />
    <button>Search</button>
  </div>

</nav>

      {/* Hero */}
      <section className="hero">
        <h3 style={{marginTop:"20px"}}>
  Contact: +91 9372384660
</h3>

        <h2>Find Your Dream Home</h2>

        <p>Buy, Rent and Sell Properties Easily</p>

      </section>

    </div>
  )
}

export default App