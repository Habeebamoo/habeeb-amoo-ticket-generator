import { useState, useEffect } from "react";
import TicketCard from "./components/TicketCard";
import AttendeeForm from "./components/AttendeeForm";
import SuccessScreen from "./components/SuccessScreen";

function Ticket() { 
  const [step, setStep] = useState(1);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("user-data");
    return savedData ? JSON.parse(savedData) : {};
  })

  return (
    <>
      {step == 1 && <TicketCard onNext={() => setStep(2)} />}
      {step == 2 && <AttendeeForm onNext={() => 
        setStep(3)} onPrev={() => setStep(1)} 
        setFormData={setFormData} 
        imageFile={imageFile} 
        setImageFile={setImageFile} 
      />}
      {step == 3 && <SuccessScreen 
        imageFile={imageFile} 
      />}
    </>
  )
}

export default Ticket;