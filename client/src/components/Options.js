import React from 'react';

// props로 name(옵션 이름), updateItemCount(상위 컴포넌트에서 전달된 수량 업데이트 함수)를 받아옴
const Options = ({ name, updateItemCount }) => {
    return (
        <form>
            {/*
                - onChange: 체크 상태가 바뀔 때 updateItemCount 호출
                - 체크 시 1, 해제 시 0으로 수량 전달
            */}
            <input
                type="checkbox"
                id={`${name} option`}
                onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
            />
            {/* label과 input 연결을 위해 htmlFor 속성 사용 */}
            <label htmlFor={`${name} option`}>{name}</label>
        </form>
    );
};

export default Options;