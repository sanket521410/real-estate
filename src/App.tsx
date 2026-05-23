import { useState, useEffect } from "react"

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore"

import { db } from "./firebase"

import "./App.css"

function App() {

  const isAdmin =
    window.location.href.includes("admin")

  const [properties, setProperties] = useState<any[]>([])

  const [selectedProperty, setSelectedProperty] =
    useState<any>(null)

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const [currentImage, setCurrentImage] =
    useState(0)

  const [filter, setFilter] =
    useState("All")

  // FORM

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] =
    useState("")

  const [image, setImage] = useState("")

  const [type, setType] = useState("Flat")

  const [bhk, setBhk] = useState("")
  const [floor, setFloor] = useState("")
  const [furnished, setFurnished] = useState("")
  const [old, setOld] = useState("")
  const [parking, setParking] = useState("")
  const [water, setWater] = useState("")

  const [railway, setRailway] = useState("")
  const [hospital, setHospital] = useState("")
  const [school, setSchool] = useState("")

  // LOAD DATA

  useEffect(() => {

    const fetchProperties = async () => {

      try {

        const querySnapshot = await getDocs(
          collection(db, "properties")
        )

        const propertyList:any = []

        querySnapshot.forEach((docSnap) => {

          propertyList.push({
            id: docSnap.id,
            ...docSnap.data()
          })

        })

        setProperties(propertyList)

      } catch (error) {

        console.log(error)

      }

      setLoading(false)
    }

    fetchProperties()

  }, [])

  // ADD PROPERTY

  const addProperty = async () => {

    const newProperty = {

      title,
      location,
      price,
      description,
      image,
      type,

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

    try {

      const docRef = await addDoc(
        collection(db, "properties"),
        newProperty
      )

      setProperties([
        ...properties,
        {
          id: docRef.id,
          ...newProperty
        }
      ])

      alert("Property Added 🔥")

      setTitle("")
      setLocation("")
      setPrice("")
      setDescription("")
      setImage("")
      setType("Flat")

      setBhk("")
      setFloor("")
      setFurnished("")
      setOld("")
      setParking("")
      setWater("")

      setRailway("")
      setHospital("")
      setSchool("")

    } catch (error) {

      console.log(error)

      alert("Failed ❌")
    }

  }

  // DELETE

  const deleteProperty = async (id:any) => {

    try {

      await deleteDoc(
        doc(db, "properties", id)
      )

      setProperties(
        properties.filter((item) =>
          item.id !== id
        )
      )

      setSelectedProperty(null)

    } catch (error) {

      console.log(error)
    }

  }

  // FILTER

  const filteredProperties =
    properties.filter((property) => {

      const matchSearch =
        property.location
          ?.toLowerCase()
          .includes(search.toLowerCase())

      const matchType =
        filter === "All"
          ? true
          : property.type === filter

      return matchSearch && matchType
    })

  return (

    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">
          Dream Estate ✨
        </h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search City..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay">

          <h2>
            Find Your Dream Home
          </h2>

          <p>
            Luxury • Modern • Gen Z
          </p>

          <h3>
            📞 +91 9372384660
          </h3>

        </div>

      </section>

      {/* FILTERS */}

      <div className="filters">

        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Flat")}>
          Flat
        </button>

        <button onClick={() => setFilter("Villa")}>
          Villa
        </button>

        <button onClick={() => setFilter("Office")}>
          Office
        </button>

      </div>

      {/* ADMIN */}

      {isAdmin && (

        <section className="form-section">

          <h2>
            Add Property
          </h2>

          <div className="form">

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            >

              <option>
                Flat
              </option>

              <option>
                Villa
              </option>

              <option>
                Office
              </option>

            </select>

            <input
              type="text"
              placeholder="BHK"
              value={bhk}
              onChange={(e) =>
                setBhk(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Floor"
              value={floor}
              onChange={(e) =>
                setFloor(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Furnished"
              value={furnished}
              onChange={(e) =>
                setFurnished(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Property Old"
              value={old}
              onChange={(e) =>
                setOld(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Parking"
              value={parking}
              onChange={(e) =>
                setParking(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Water"
              value={water}
              onChange={(e) =>
                setWater(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Railway"
              value={railway}
              onChange={(e) =>
                setRailway(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Hospital"
              value={hospital}
              onChange={(e) =>
                setHospital(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="School"
              value={school}
              onChange={(e) =>
                setSchool(e.target.value)
              }
            />

            <button onClick={addProperty}>
              Add Property 🚀
            </button>

          </div>

        </section>

      )}

      {/* LOADING */}

      {loading ? (

        <h2 className="loading">
          Loading...
        </h2>

      ) : (

        <section className="cards">

          {filteredProperties.map((property, index) => (

            <div
              className="card"
              key={index}
              onClick={() => {
                setSelectedProperty(property)
                setCurrentImage(0)
              }}
            >

              <div className="wishlist">
                ❤️
              </div>

              <img
                src={property.image}
                alt=""
              />

              <div className="card-content">

                <h3>
                  {property.title}
                </h3>

                <p>
                  {property.location}
                </p>

                <span>
                  {property.price}
                </span>

              </div>

            </div>

          ))}

        </section>

      )}

      {/* POPUP */}

      {selectedProperty && (

        <div className="popup">

          <div className="popup-content">

            <button
              className="close-btn"
              onClick={() =>
                setSelectedProperty(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedProperty.image}
              alt=""
              className="slider-image"
            />

            <div className="dots">

              <span className="active-dot"></span>
              <span></span>
              <span></span>

            </div>

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
                href="tel:+919372384660"
                className="contact-btn"
              >
                📞 Call
              </a>

              <a
                href={`https://wa.me/917208615432?text=Hello%20I%20am%20interested%20in%20this%20property%20🏠%0A%0AProperty:%20${selectedProperty.title}%0ALocation:%20${selectedProperty.location}%0APrice:%20${selectedProperty.price}`}
                target="_blank"
                className="contact-btn"
              >
                💬 WhatsApp
              </a>

            </div>

            {isAdmin && (

              <button
                className="delete-btn"
                onClick={() =>
                  deleteProperty(
                    selectedProperty.id
                  )
                }
              >
                Delete Property
              </button>

            )}

          </div>

        </div>

      )}

    </div>
  )
}

export default App