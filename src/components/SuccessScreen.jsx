export default function SuccessScreen() {
  const formData = JSON.parse(localStorage.getItem("user-data")) || {};
  const ticketType = JSON.parse(localStorage.getItem('ticket-type')) || "";

  let status;

  if(ticketType == "button 1") {
    status = <>Type: Free</>
  } else if(ticketType == "button2") {
    status = <>Type: VIP</>
  } else {
    status = <>Type: VVIP</>
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
        <div className="ticket-image">
          <img src="/public/ticket.svg" className="ticket-image-svg" />
          {formData.image && 
          <div className="ticket-profile">
            <img  src={formData.image} />
          </div>
          }
          <h1 className="heading">Techember<span>Fest "25</span></h1>
          <div className="text">
            <p>04 Ruments Road, Ikoyi Lagos</p>
            <p>March 15 2025 | 7:00pm</p>
          </div>
          <p>{status}</p>
        </div>
        <div className="final-buttons">
          <button className="book-btn">Book Another Ticket</button>
          <button className="download-btn">Download Ticket</button>
        </div>
      </div>
    </div>
  )
}