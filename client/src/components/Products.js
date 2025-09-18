import React from 'react';

const Products = ({ name, imagePath, updateItemCount }) => {
    // 콘솔에서 name과 imagePath 확인 (디버깅용)
    // console.log(name, imagePath);

    // 수량 입력값이 변경될 때 호출되는 핸들러
    const handleChange = (event) => {
        // 현재 input의 값 가져오기
        const currentValue = event.target.value;
        // 상위 컴포넌트에 제품명과 수량 전달
        updateItemCount(name, currentValue);
    }

    return (
        // 전체 컨테이너 div, 가운데 정렬
        <div style={{ textAlign: 'center' }}>
            {/* 제품 이미지 */}
            <img
                style={{ width: '75%' }} // 이미지 크기 조절
                src={`http://localhost:4000/${imagePath}`} // 이미지 경로 (백엔드 서버에서 제공)
                alt={`${name} product`} // 접근성: 이미지 대체 텍스트
            />

            {/* 수량 입력 폼 */}
            <form style={{ marginTop: '10px' }}>
                {/* 제품 이름 레이블 */}
                <label style={{ textAlign: 'right' }}>{name}</label>
                {/* 수량 입력 input */}
                <input
                    style={{ marginLeft: '7px' }}
                    type="number"      // 숫자만 입력 가능
                    name="quantity"    // input name
                    min="0"            // 최소값 0
                    defaultValue={0}   // 기본값 0
                    onChange={handleChange} // 변경 시 handleChange 호출
                />
            </form>
        </div>
    )
};

export default Products;