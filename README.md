# Travel Products Order App
React + Context API를 활용한 **포트폴리오용 미니 프로젝트**  
사용자가 여행 상품(Products)과 옵션(Options)을 선택하고, 총 금액을 확인한 뒤 주문을 완료하는 단순 주문 시스템입니다.

---

## 목차
- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [설치 및 실행](#설치-및-실행)
- [회고](#회고)

---

## 프로젝트 소개
이 프로젝트는 **React**와 **Context API**를 사용해 전역 상태 관리, 주문 수량 관리, 가격 합산 기능을 구현한 **미니 주문 앱**입니다.
- 사용자는 여행 상품과 옵션을 선택하고 실시간으로 가격을 확인할 수 있습니다.
- `OrderContext`를 통해 제품·옵션 수량 및 총 가격을 전역적으로 관리합니다.
- `axios`를 이용해 서버에서 데이터를 받아와 UI를 업데이트합니다.

---

## 기술 스택
| 분야            | 사용 기술                |
|-----------------|--------------------------|
| 프론트엔드       | React (CRA), Context API |
| 스타일링         | CSS (인라인 및 App.css)  |
| HTTP 요청       | Axios                    |
| 상태관리         | useState, useEffect, useContext, useMemo |

---

## 설치 및 실행
```bash
# 1. 프로젝트 클론
git clone https://github.com/Kwak1999/react-context-app.git

# 2. 패키지 설치
npm install
npm install axios

# 3. 개발 서버 실행
npm start
```
## 회고

