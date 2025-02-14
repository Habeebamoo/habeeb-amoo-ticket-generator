import ticketImg from "../images/ticket.png";
import ticket from "../images/ticket2.svg";

export default function SuccessScreen() {
  const formData = JSON.parse(localStorage.getItem("user-data")) || {};
  const ticketType = JSON.parse(localStorage.getItem('ticket-type')) || "";

  let status;

  if(ticketType == "button 1") {
    status = <small>Free</small>
  } else if(ticketType == "button2") {
    status = <small>VIP</small>
  } else {
    status = <small>VVIP</small>
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
          <img src={ticket} className="ticket-image-svg" />
          <div className="header">
            <h4 className="heading">Techember Fest "25</h4>
            <p><small>04 Rumens road, Ikoyi Lagos</small></p>
            <p><small>March 15 2025 | 7:00pm</small></p>
            {formData.image && 
              <div className="ticket-profile">
                <img  src={formData.image} />
              </div>
            }
            <div className="ticket-details-form">
              <div className="row">
                <div className="left">
                  <small className="label">Name</small>
                  <small className="value">{formData.name}</small>
                </div>
                <div className="right">
                  <small className="label">Email</small>
                  <div className="value truncate">{formData.email}</div>
                </div>
                <div className="left">
                  <small className="label">Ticket</small>
                  <small className="value">{status}</small>
                </div>
                <div className="right">
                  <small className="label">Amount</small>
                  <small className="value">1</small>
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
          <button className="download-btn">Download Ticket</button>
        </div>
      </div>
    </div>
  )
}

/*


          <div className="text">
            <p>04 Ruments Road, Ikoyi Lagos</p>
            <p>March 15 2025 | 7:00pm</p>
          </div>
          <p>{status}</p>
*/
