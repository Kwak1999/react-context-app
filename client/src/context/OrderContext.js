import {createContext, useEffect, useMemo, useState} from "react";

// - createContext: 전역 상태를 만들 때 사용
// - useEffect: 상태 변화 감지 후 부수 효과 실행
// - useMemo: 메모이제이션으로 불필요한 연산 방지
// - useState: 상태 관리

// OrderContext 생성 – 전역 상태 공유용
export const OrderContext = createContext();

// OrderContextProvider 컴포넌트 정의
// props.children을 통해 하위 컴포넌트에게 context 제공
export function OrderContextProvider(props) {

    // 주문 수량을 저장할 상태
    // - products: 제품 수량 (Map)
    // - options: 옵션 수량 (Map)
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map()
    });

    // 각 subtotal 및 total 금액 저장 상태
    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0
    })

    // 각 항목별 가격
    const pricePerItem = {
        products: 1000, // 제품 1개당 가격
        options: 500,   // 옵션 1개당 가격
    }

    // 서브토탈 계산 함수
    // orderType: 'products' 또는 'options'
    // orderCounts: 현재 주문 수량 Map
    const calculateSubtotal = (orderType, orderCounts) => {
        let optionCount = 0;
        // Map의 values()를 순회하며 수량 합산
        for (const count of orderCounts[orderType].values()) {
            optionCount += count;
        }
        // 합산 수량 × 단가 반환
        return optionCount * pricePerItem[orderType];
    }

    // orderCounts 상태가 변할 때마다 totals 재계산
    useEffect(() => {
        const productsTotal = calculateSubtotal("products", orderCounts);
        const optionsTotal = calculateSubtotal("options", orderCounts);
        const total = productsTotal + optionsTotal;
        // totals 상태 업데이트
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total: total
        })
    }, [orderCounts]) // orderCounts 변경될 때마다 실행

    // Context에 내려줄 value 구성
    const value = useMemo(() => {
        // 수량 업데이트 함수
        function updateItemCount(itemName, newItemCount, orderType) {
            // 기존 orderCounts 복사
            const newOrderCounts = { ...orderCounts };
            // 해당 타입의 Map 추출
            const orderCountsMap = orderCounts[orderType];
            // Map에 새로운 수량 설정 (문자열→숫자 변환)
            orderCountsMap.set(itemName, parseInt(newItemCount));
            // 상태 업데이트
            setOrderCounts(newOrderCounts);
        }

        // value: [상태, 업데이트함수] 형태로 제공
        return [{ ...orderCounts, totals }, updateItemCount]
    }, [orderCounts, totals]) // orderCounts 또는 totals 변경 시 재계산

    // Context Provider 반환
    // value는 전역 상태와 업데이트 함수
    // {...props}로 children 전달
    return <OrderContext.Provider value={value} {...props} />
}