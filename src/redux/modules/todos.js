// 초기 상태값(state) 변수
const initialState = [
  {
    id: 0,
    title: "리액트 공부하기",
    content: "리액트 기초를 공부하기",
    isDone: false,
  },
  {
    id: 1,
    title: "자바스크립트 공부하기",
    content: "자바스크립트 심화를 공부하기",
    isDone: true,
  },
];

// 리듀서 : state에 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수
// 인자로 state와 action 두 가지를 받는다.

// switch = if문

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
