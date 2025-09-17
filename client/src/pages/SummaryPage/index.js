import React, {useState} from 'react';

// 체크박스 상태 관리
// - false: 체크 안됨
// - true: 체크됨
const [checked, setChecked] = useState(false);

return (
    <div>
        {/* 주문 최종 확인 폼 */}
        <form>
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

export default SummaryPage;