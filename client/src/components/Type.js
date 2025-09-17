import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "./ErrorBanner";
import {OrderContext} from "../context/OrderContext"

const Type = ({orderType}) => {

    // 상태값 정의
    const [items, setItems] = useState([]);     // 서버에서 가져온 제품/옵션 목록
    const [error, setError] = useState(false);  // 에러 발생 여부
    // OrderContext에서 상태와 함수 가져오기
    const [orderData, updateItemCount] = useContext(OrderContext);

    // 디버깅용: 현재 주문 데이터 출력
    console.log("orderData", orderData.totals);

    // orderType이 변경될 때마다 해당 데이터를 서버에서 로드
    useEffect(() => {
        loadItems(orderType);
    }, [orderType])

    // 서버에서 제품/옵션 데이터를 가져오는 함수
    const loadItems = async (orderType) => {
        try {
            // axios를 이용해 API 요청
            const response = await axios.get(`http://localhost:4000/${orderType}`)
            // 가져온 데이터 상태에 저장
            setItems(response.data);
            console.log(response.data);
        } catch (error) {
            // 에러 발생 시 상태 true
            setError(true);
        }
    }

    // orderType이 'products'면 Products 컴포넌트, 아니면 Options 컴포넌트 사용
    const ItemComponent = orderType === "products" ? Products : Options;

    // 가져온 items 배열을 순회하며 해당 컴포넌트로 렌더링
    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath} // Options에는 사용 안 됨
            // 수량/체크 여부 변경 시 OrderContext에 업데이트
            updateItemCount={(itemName, newItemCount) =>
                updateItemCount(itemName, newItemCount, orderType)
            }
        />
    ))

    // 에러 발생 시 ErrorBanner 렌더링
    if (error) {
        return (<ErrorBanner message="에러 발생" />)
    }

    return (
        <div>
            {/* 주문 종류 안내 */}
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            {/* 총 가격은 OrderContext의 totals에서 가져옴 */}
            <p>총 가격: {orderData.totals[orderType]}</p>

            {/* 아이템 목록 영역 */}
            <div
                style={{
                    display: 'flex',
                    // 옵션일 때는 column, 제품일 때는 row로 배치
                    flexDirection: orderType === "options" ? "column" : "row"
                }}
            >
                {optionItems}
            </div>
        </div>
    )
};

export default Type;