import "./App.css"

function App() {

  const properties = [
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
    },
    {
      title: "Beach House",
      location: "Goa",
      price: "₹4 Cr",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    }
  ]

  return (
    <div className="app">

      <nav className="navbar">

        <h1>Real Estate</h1>

        <div className="search-box">
          <input type="text" placeholder="Search property..." />
          <button>Search</button>
        </div>

      </nav>

      <section className="hero">

        <h2>Find Your Dream Home</h2>

        <p>Buy, Rent and Sell Properties Easily</p>

        <h3 style={{ marginTop: "20px" }}>
          Contact: +91 9876543210
        </h3>

      </section>

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