import React, {useContext, useState} from 'react';
import {OrderContext} from "../../context/OrderContext";


const SummaryPage = ({setStep}) => {

    const [checked, setChecked] = useState(false);
    const [orderDetails] = useContext(OrderContext);

    const productArray = Array.from(orderDetails.products);
    const productList = productArray.map(([key, value]) => (
        <li key={key}>
            {value} {key}
        </li>
    ))

    const hasOptions = orderDetails.options.size > 0;
    let optionsDisplay = null;

    if(hasOptions) {
        const optionsArray = Array.from(orderDetails.options.keys());
        const optionList = optionsArray.map((key) => <li key={key}>{key}</li>)
        optionsDisplay = (
            <>
                <h2>옵션: {orderDetails.totals.options}</h2>
                <ul>{optionList}</ul>
            </>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setStep(2)
    }

    return (
        <div>
            <h1>주문 확인</h1>
            <h2>여행 상품: {orderDetails.totals.products}</h2>
            <ul>
                {productList}
            </ul>

            {optionsDisplay}

            {/* 주문 최종 확인 폼 */}
            <form onSubmit={handleSubmit}>
                {/* 체크박스 */}
                <input
                    type="checkbox"
                    checked={checked} // 상태와 연동
                    id="confirm-checkbox" // label과 연결하기 위한 id
                    onChange={(e) => setChecked(e.target.checked)} // 체크 상태 변경 시 상태 업데이트
                />{" "}
                {/* 확인 메시지 */}
                <label htmlFor='confirm-checkbox'>
                    주문하려는 것을 확인하셨나요?
                </label>
                <br />
                {/* 확인 버튼 */}
                {/* 체크박스가 체크되지 않으면 disabled 상태 */}
                <button disabled={!checked} type='submit'>
                    주문 확인
                </button>
            </form>
        </div>
    );
};

export default SummaryPage;