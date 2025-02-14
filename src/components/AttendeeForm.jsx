import { useState } from "react";
import download from "../images/download.svg"

export default function AttendeeForm({ onNext, onPrev, setFormData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  function imageUpload(e) {
    const file = e.target.files[0];

    if(!file) {
      return;
    } else {
      setImage(URL.createObjectURL(file))
    };

    hideFileText()
  }

  function hideFileText() {
    const text = document.querySelector(".file-box-span");
    const icon = document.querySelector(".file-box-icon");
    icon.style.display = "none";
    text.style.display = "none";
  }

  function handleSave() {
    if(!name || !email || !image || !message) {
      setError("All fields are required");
      return;
    }

    const data = { name, email, message, image };
    localStorage.setItem("user-data", JSON.stringify(data));
    setFormData(data);
    onNext();
  }

  return (
    <main className="ticket-container">
      <div className="ticket-header">
      <h1>Attendee Details</h1>
      <p>Step 2/3</p>
    </div>
    <div className="progress-container">
      <div className="progress-bar-2"></div>
    </div>
      <div className="ticket-box">
      <div className="header-intro-state">
        <input type="file" id="fileInput" accept="image/*" onChange={imageUpload} hidden/>
        <label htmlFor="fileInput" className="file-box">
          <img src={download} className="file-box-icon"/>
          <span className="file-box-span">Drag & Drop or Click to upload</span>
          {image && <div className="attendee-img-container">
            <img src={image} />
          </div>}
        </label>
      </div>
      <div className="hr"></div>
      <div className="form">
        <div className="form-box">
          <label htmlFor="name">Enter your Name</label>
          <input 
            type="text" 
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-box">
          <label htmlFor="email">Enter your Email</label>
          <input 
            type="email" 
            id="email" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-box">
          <label htmlFor="message">About this project</label>
          <textarea 
            id="message" 
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="buttons">
          <button className="cancel-btn" onClick={onPrev}>Cancel</button>
          <button className="next-btn" onClick={handleSave}>Next</button>
        </div>
      </div>
      </div>
    </main>
  )
}
