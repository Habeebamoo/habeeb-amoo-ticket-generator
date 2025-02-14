import { useRef, useEffect, useState } from "react";
import ticketImg from "../images/ticket.png";
import domtoimage from "dom-to-image-more";

export default function SuccessScreen({ imageFile }) {
  const divRef = useRef(null);
  const formData = JSON.parse(localStorage.getItem("user-data")) || {};
  const ticketType = JSON.parse(localStorage.getItem('ticket-type')) || "";
  const ticketsNo = JSON.parse(localStorage.getItem("ticketsNo"));

  let status;

  if(ticketType == "button 1") {
    status = <small>Free</small>
  } else if(ticketType == "button2") {
    status = <small>VIP</small>
  } else {
    status = <small>VVIP</small>
  }

  function downloadImage() {
    if(divRef.current) {
      setTimeout(() => {
        domtoimage.toPng(divRef.current, {
          cacheBust: true,
          useCORS: true
        }).then((dataUrl) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = "downloaded-image.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        }).catch((err) => console.log('Error: getting image from div', err));
      }, 500)
    }
  }

  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <h1>Ready</h1>
        <p>Step 3/3</p>
      </div>
      <div className="progress-container">
        <div className="progress-bar-3"></div>
      </div>
      <div className="ticket-box">
        <div className="final-header-intro">
          <h1>Your Ticket is Booked!</h1>
          <p>You can download or check your email for a copy</p>
        </div>
        <div className="ticket-image" ref={divRef}>
          <img 
            src={ticketImg} 
            className="ticket-image-svg"
          />
          <div className="header">
            <h4 className="heading">Techember Fest "25</h4>
            <p><small>04 Rumens road, Ikoyi Lagos</small></p>
            <p><small>March 15 2025 | 7:00pm</small></p>
            <div className="ticket-profile">
              <img 
                src={imageFile} 
                crossOrigin="anonymous"
              />
            </div>
            <div className="ticket-details-form">
              <div className="row">
                <div className="left">
                  <small className="label">Name</small>
                  <small className="value">{formData.name}</small>
                </div>
                <div className="right">
                  <small className="label">Email</small>
                  <small className="value truncate">{formData.email}</small>
                </div>
                <div className="left">
                  <small className="label">Ticket</small>
                  <small className="value">{status}</small>
                </div>
                <div className="right">
                  <small className="label">Amount</small>
                  <small className="value">{ticketsNo}</small>
                </div>
              </div>
              <div className="request-message">
                <small className="label">Special Request</small>
                <small className="value">
                  {formData.message}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="final-buttons">
          <button className="book-btn">Book Another Ticket</button>
          <button className="download-btn" onClick={downloadImage} disabled={!imageFile}>Download Ticket</button>
        </div>
      </div>
    </div>
  )
}
