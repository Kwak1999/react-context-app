import './App.css';
import SummaryPage from "./pages/SummaryPage";
import OrderPage from "./pages/OrderPage";
import CompletePage from "./pages/CompletePage";
import {useState} from "react";

function App() {

    // 페이지 단계 관리
    // 0: 주문 페이지, 1: 요약/확인 페이지, 2: 완료 페이지
    const [step, setStep] = useState(0);

    return (
        <div style={{ padding: '4rem' }}>
            {/*
                step 상태값에 따라 각 페이지를 조건부 렌더링
                OrderPage → SummaryPage → CompletePage 순서
                각 페이지 컴포넌트에 setstep을 props로 전달해
                버튼 클릭 시 단계 변경 가능
            */}
            {step === 0 && <OrderPage setstep={setStep} />}
            {step === 1 && <SummaryPage setstep={setStep} />}
            {step === 2 && <CompletePage setstep={setStep} />}
        </div>
    );
}

export default App;
