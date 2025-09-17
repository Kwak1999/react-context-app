import React, {useContext} from 'react';
import Type from '../../components/Type'
import {OrderContext} from "../../context/OrderContext";

// props: setstep – 페이지 이동(단계 전환) 함수
const OrderPage = ({ setstep }) => {
    // OrderContext에서 주문 데이터만 가져오기
    // (updateItemCount는 사용 안 하므로 배열 첫 번째 요소만 사용)
    const [orderData] = useContext(OrderContext);

    return (
        <div>
            {/* 페이지 제목 */}
            <h1>Travel Products</h1>

            {/* 제품 선택 영역 */}
            <div>
                <Type orderType="products" />
            </div>

            {/* 옵션 선택 및 총 가격 영역 */}
            <div style={{ display: 'flex', marginTop: '20' }}>
                {/* 옵션 영역 */}
                <div style={{ width: '50%' }}>
                    <Type orderType="options" />
                </div>

                {/* 총 가격 및 주문 버튼 영역 */}
                <div style={{ width: '50%' }}>
                    {/* 총 가격 표시 */}
                    <h2>Total Price: {orderData.totals.total}</h2>
                    {/* 주문 버튼 – 클릭 시 setstep(1) 호출로 다음 단계로 이동 */}
                    <button onClick={() => setstep(1)}>주문</button>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;