export default function About() {
  return (
    <>
      <div className="ticket-container">
        <p>Event Ticket Booking UI - Open Source Practice Project</p>
        <p>Overview</p>
        <p>This is a beginner friendly yet practical Event Ticket Booking UI designed for developers to clone, explore and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and effectively</p>
        <p>The project consist of three-step ticket booking flow, and developers can extend it further by integrating payments solutions, user authentication (optional) and ticket validating system</p>
        <p>Flows & Features</p>
        <p>Ticket Selection</p>
        <ul>
          <li>Users can browse available tickets (Free & Paid)</li>
          <li>Ticket options are displayed in a list or card view</li>
          <li>For free tickets - clicking "Get Free Ticket" proceeds to Attendee details</li>
          <li>For paid tickets - clicking "Purchase Ticket" would idealy open a payment modal</li>
        </ul>
        <p>Attendee Details Form</p>
        <ul>
          <li>Users inputs thier Name, Email and optional Phone Number</li>
          <li>Profile picture upload with preview functionaity</li>
          <li>Ticket summary is visible to ensure users review thier details before submission</li>
        </ul>
        <p>Payment or Success Page</p>
        <ul>
          <li>If the ticket is free, the user is taken directly to Ticket Confirmation Page</li>
          <li>If the ticket is paid developers can integrate Stripe, Paypal or Flutter Wave to process payment before showing the confirmation page</li>
          <li>Upon successful booking users should receive</li>
          <li>A visual ticket preview with a unique QR CODE</li>
          <li>An option to download the ticket as pdf or save it to thier device</li>
          <li>An email confirmation containing ticket details</li>
        </ul>
        <p>How to build This 🚀</p>
        <p>This UI can be implemented using:</p>
        <p>Frontend (Next.js or React)</p>
        <ul>
          <li>Components breakdown</li>
          <li>TicketCard.tsx - Displays ticket details</li>
          <li>AttendeeForm.tsx - Captures user details</li>
          <li>PaymentModal.tsx - Handles payment processing</li>
          <li>SuccessScreen.tsx - Shows the final ticket preview</li>
          <li>State Management: React's Context API, Zustand, or Redux if needed</li>
          <li>File Handling: Users should be able to upload images (profile picture for ticket)  using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL()</li>
        </ul>
        <p>Backend (optional)</p>
        <ul>
          <li>if persistence is required, a backend can be built using:</li>
          <li>Node.js & Express or Firebase Functions</li>
          <li>Database: MongoDB, PostgreSQL or Firebase Firestore to store tickets records</li>
        </ul>
        <p>Payments Integration</p>
        <li>For Paid Events, developers should integrate</li>
        <li>Stripe Checkout (for international transactions)</li>
        <li>Paystack or Flutterwave for african users</li>
        <p>What You'll Learn</p>
        <li>File handling & validation (profile picture upload)</li>
        <li>Dynamic UI updates based on tickets selection</li>
        <li>Persisting booking using local state or a backend</li>
        <li>Integrating payment gateways for ticket purchase</li>
        <li>Creating and validating QR CODE for events check-in (Advanced).</li>
        <p>Need Help? Reach out</p>
        <div className="emoji-section">
          <span>💛</span>
          <h1>Enjoy</h1>
        </div>
        <div className="about-buttons">
          <button className="design-file-btn">Design File</button>
          <button className="github-btn">GitHub Code</button>
        </div>
      </div>
    </>
  )
}