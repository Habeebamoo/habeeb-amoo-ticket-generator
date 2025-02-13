import { useState, useEffect } from "react";
import TicketCard from "./components/TicketCard";
import AttendeeForm from "./components/AttendeeForm";
import SuccessScreen from "./components/SuccessScreen";

function Ticket() { 
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("user-data");
    return savedData ? JSON.parse(savedData) : {};
  })

  return (
    <>
      {step == 1 && <TicketCard onNext={() => setStep(2)} />}
      {step == 2 && <AttendeeForm onNext={() => setStep(3)} onPrev={() => setStep(1)} setFormData={setFormData} />}
      {step == 3 && <SuccessScreen />}
    </>
  )
}

export default Ticket;