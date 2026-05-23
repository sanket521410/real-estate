import { useState, useEffect } from "react"

import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore"

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage"

import { db, storage } from "./firebase"

import "./App.css"

function App() {

  const isAdmin = window.location.href.includes("admin")

  const [properties, setProperties] = useState<any[]>([])

  const [search, setSearch] = useState("")
  const [selectedProperty, setSelectedProperty] = useState<any>(null)

  const [currentImage, setCurrentImage] = useState(0)

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [images, setImages] = useState<any[]>([])

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

      const querySnapshot = await getDocs(
        collection(db, "properties")
      )

      const propertyList:any = []

      querySnapshot.forEach((doc) => {

        propertyList.push(doc.data())

      })

      setProperties(propertyList)
    }

    fetchProperties()

  }, [])

  // ADD PROPERTY

  const addProperty = async () => {

    const uploadedImages:any = []

    for (const file of images) {

      const storageRef = ref(
        storage,
        `properties/${Date.now()}-${file.name}`
      )

      await uploadBytes(storageRef, file)

      const downloadURL =
        await getDownloadURL(storageRef)

      uploadedImages.push(downloadURL)
    }

    const newProperty = {

      title,
      location,
      price,
      description,

      images: uploadedImages,

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

    await addDoc(
      collection(db, "properties"),
      newProperty
    )

    setProperties([...properties, newProperty])

    alert("Property Added 🔥")

    setTitle("")
    setLocation("")
    setPrice("")
    setDescription("")

    setImages([])

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

  // SEARCH

  const filteredProperties = properties.filter((property) =>

    property.location
      ?.toLowerCase()
      .includes(search.toLowerCase())

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
            📞 +91 9372384660
          </h3>

        </div>

      </section>

      {/* Admin */}

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

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="file"
              multiple
              onChange={(e:any) =>
                setImages([...e.target.files])
              }
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

      {/* Cards */}

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

            <img
              src={property.images?.[0]}
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

            {/* IMAGE SLIDER */}

            <div className="slider">

              <button
                className="slider-btn"
                onClick={() =>
                  setCurrentImage(
                    currentImage === 0
                      ? selectedProperty.images.length - 1
                      : currentImage - 1
                  )
                }
              >
                ⬅
              </button>

              <img
                src={selectedProperty.images[currentImage]}
                alt=""
                className="slider-image"
              />

              <button
                className="slider-btn"
                onClick={() =>
                  setCurrentImage(
                    currentImage === selectedProperty.images.length - 1
                      ? 0
                      : currentImage + 1
                  )
                }
              >
                ➡
              </button>

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

          </div>

        </div>

      )}

    </div>
  )
}

export default App