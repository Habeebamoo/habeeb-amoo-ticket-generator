import { useState } from "react";

export default function TicketCard({ onNext }) {
  const [button, setButton] = useState("button1");

  function handleClick(buttonIndex) {
    setButton(buttonIndex);
    localStorage.setItem('ticket-type', JSON.stringify(buttonIndex))
  }

  function saveTicketsNo() {
    const ticketsNo = document.querySelector('#select');
    const num = ticketsNo.value;
    localStorage.setItem('ticketsNo', JSON.stringify(num))
  }


  return (
    <main className="ticket-container">
    <div className="ticket-header">
      <h1>Ticket Selection</h1>
      <p>Step 1/3</p>
    </div>
    <div className="progress-container">
      <div className="progress-bar"></div>
    </div>
    <div className="ticket-box">
      <div className="header-intro">
        <h1>Techember Fest "25</h1>
        <p className="text">Join us for an unforgetable experience at Event Name! Secure your spot now.</p>
        <p>Event Location || March 15 2025 | 7:00pm</p>
      </div>
      <div className="hr"></div>
      <div className="form">
        <p>Select Ticket Type: </p>
        <div className="ticket-options">
          <div className={`ticket-button ${button == "button1" ? "clicked" : ""}`} onClick={() => handleClick('button1')}>
            <p>REGULAR ACCESS</p>
            <span>Free</span>
          </div>
          <div className={`ticket-button ${button == "button2" ? "clicked" : ""}`}  onClick={() => handleClick('button2')}>
            <p>VIP ACCESS</p>
            <span>$50</span>
          </div>
          <div className={`ticket-button ${button == "button3" ? "clicked" : ""}`} onClick={() => handleClick('button3')}>
            <p>VVIP ACCESS</p>
            <span>$150</span>
          </div>
        </div>
        <p>Number of Tickets:</p>
        <select id="select" onClick={saveTicketsNo}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <div className="buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="next-btn" onClick={onNext}>{button == "button1" ? "Get My Free Ticket" : "Proceed to Payment"}</button>
        </div>
      </div>
    </div>
  </main>
  )
}