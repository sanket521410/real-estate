import { useState } from "react"
import "./App.css"

function App() {

  const isAdmin = window.location.href.includes("admin")

  const [properties, setProperties] = useState([
    {
      title: "Luxury Villa",
      location: "Mumbai",
      price: "₹2.5 Cr",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",

      description:
        "Luxury villa with premium interior and swimming pool.",

      bhk: "3 BHK",
      floor: "12th Floor",
      furnished: "Fully Furnished",
      old: "2 Years",
      parking: "Available",
      water: "24 Hours",

      railway: "2 KM",
      hospital: "1 KM",
      school: "500 M"
    }
  ])

  const [search, setSearch] = useState("")
  const [selectedProperty, setSelectedProperty] = useState<any>(null)

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const [bhk, setBhk] = useState("")
  const [floor, setFloor] = useState("")
  const [furnished, setFurnished] = useState("")
  const [old, setOld] = useState("")
  const [parking, setParking] = useState("")
  const [water, setWater] = useState("")

  const [railway, setRailway] = useState("")
  const [hospital, setHospital] = useState("")
  const [school, setSchool] = useState("")

  const addProperty = () => {

    const newProperty = {
      title,
      location,
      price,
      image,
      description,
      bhk,
      floor,
      furnished,
      old,
      parking,
      water,
      railway,
      hospital,
      school
    }

    setProperties([...properties, newProperty])

    setTitle("")
    setLocation("")
    setPrice("")
    setImage("")
    setDescription("")

    setBhk("")
    setFloor("")
    setFurnished("")
    setOld("")
    setParking("")
    setWater("")

    setRailway("")
    setHospital("")
    setSchool("")
  }

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <h1 className="logo">
          Dream Estate
        </h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            Search
          </button>

        </div>

      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-overlay">

          <h2>
            Find Your Dream Home ✨
          </h2>

          <p>
            Luxury Properties For Modern Lifestyle
          </p>

          <h3>
            📞 +91 9876543210
          </h3>

        </div>

      </section>

      {/* Admin Panel */}
      {isAdmin && (

        <section className="form-section">

          <h2>
            Add Property
          </h2>

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

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              placeholder="BHK"
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
            />

            <input
              type="text"
              placeholder="Floor"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />

            <input
              type="text"
              placeholder="Furnished"
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
            />

            <input
              type="text"
              placeholder="Property Old"
              value={old}
              onChange={(e) => setOld(e.target.value)}
            />

            <input
              type="text"
              placeholder="Parking"
              value={parking}
              onChange={(e) => setParking(e.target.value)}
            />

            <input
              type="text"
              placeholder="Water"
              value={water}
              onChange={(e) => setWater(e.target.value)}
            />

            <input
              type="text"
              placeholder="Railway Distance"
              value={railway}
              onChange={(e) => setRailway(e.target.value)}
            />

            <input
              type="text"
              placeholder="Hospital Distance"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
            />

            <input
              type="text"
              placeholder="School Distance"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />

            <button onClick={addProperty}>
              Add Property
            </button>

          </div>

        </section>

      )}

      {/* Property Cards */}
      <section className="cards">

        {filteredProperties.map((property, index) => (

          <div
            className="card"
            key={index}
            onClick={() => setSelectedProperty(property)}
          >

            <img src={property.image} alt="" />

            <div className="card-content">

              <h3>{property.title}</h3>

              <p>{property.location}</p>

              <span>{property.price}</span>

            </div>

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
              ✕
            </button>

            <img
              src={selectedProperty.image}
              alt=""
            />

            <h2>
              {selectedProperty.title}
            </h2>

            <p>
              {selectedProperty.location}
            </p>

            <h3>
              {selectedProperty.price}
            </h3>

            <p className="desc">
              {selectedProperty.description}
            </p>

            <div className="details-grid">

              <div>🏠 {selectedProperty.bhk}</div>
              <div>🏢 {selectedProperty.floor}</div>
              <div>🛋️ {selectedProperty.furnished}</div>
              <div>📅 {selectedProperty.old}</div>
              <div>🚗 {selectedProperty.parking}</div>
              <div>💧 {selectedProperty.water}</div>

              <div>🚉 {selectedProperty.railway}</div>
              <div>🏥 {selectedProperty.hospital}</div>
              <div>🏫 {selectedProperty.school}</div>

            </div>

            <div className="contact-buttons">

              <a
                href="tel:+919876543210"
                className="contact-btn"
              >
                📞 Call
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="contact-btn"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App