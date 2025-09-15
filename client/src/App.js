import './App.css';
import SummaryPage from "./pages/SummaryPage";
import OrderPage from "./pages/OrderPage";
import CompletePage from "./pages/CompletePage";

function App() {
  return (
    <div style={{padding: '4rem'}}>
        <CompletePage />
        <OrderPage />
        <SummaryPage />
    </div>
  );
}

export default App;
