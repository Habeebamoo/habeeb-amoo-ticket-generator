import { useState } from "react";
import Header from "./components/Header";
import Ticket from "./Ticket";
import About from "./components/About";

function App() {
  const [aboutSection, setAboutSection] = useState('event');

  function goToAbout() {
    setAboutSection('about')
  }

  function goToEvents() {
    setAboutSection('event')
  }

  return (
    <>
      <Header toAbout={goToAbout} toEvents={goToEvents}/>
      <main className="container">
        {aboutSection == "event" && <Ticket />}
        {aboutSection == "about" && <About />}
      </main>
    </>
  )
}

export default App;