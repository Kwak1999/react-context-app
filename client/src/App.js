import './App.css';
import SummaryPage from "./pages/SummaryPage";
import OrderPage from "./pages/OrderPage";
import CompletePage from "./pages/CompletePage";
import {useState} from "react";

function App() {
    const [step, setStep] = useState(0);

  return (
    <div style={{padding: '4rem'}}>
        {step === 0 && <OrderPage setstep={setStep} />}
        {step === 1 && <SummaryPage setstep={setStep} />}
        {step === 2 && <CompletePage setstep={setStep} />}
    </div>
  );
}

export default App;
