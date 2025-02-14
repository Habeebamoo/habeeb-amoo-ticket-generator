import logo from "../images/logo.svg"

function Header({ toAbout, toEvents }) {
  return (
    <>
      <header>
        <nav className="header-nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li onClick={toEvents} style={{ color: "white"}}>Events</li>
            <li>My Tickets</li>
            <li onClick={toAbout}>About Project</li>
          </ul>
          <button>My Tickets</button>
        </nav>
      </header>
    </>
  )
}

export default Header;
