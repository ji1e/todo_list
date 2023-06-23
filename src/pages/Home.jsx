import React, { useState } from "react";
import "../App.css";
import Button from "components/Button";
import Card from "components/Card";
import { styled } from "styled-components";

function Home() {
  // 초기값 state 변수 선언
  const [cards, setCards] = useState([
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
  ]);

  // 등록(입력)부분의 input과 연결되는 state 두가지
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");

  // input과 inputTitle state를 연결할 때 사용되는 함수
  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  // input과 inputContents state를 연결할 때 사용되는 함수
  const contentsChangeHandler = (event) => {
    setInputContents(event.target.value);
  };

  // 등록 시 추가되는 카드들의 id의 초기값을 정하고 +1 할 수 있게 state 만듦.
  const [nextId, setNextid] = useState(2);

  // 등록 버튼 클릭 시 실행
  const clickAddButtonHandler = (event) => {
    event.preventDefault(); // form 태그에 기본적으로 적용되는 새로고침 없애기.
    const newCard = {
      id: nextId,
      title: inputTitle,
      content: inputContents,
      isDone: false,
    };

    // 유효성검사(input이 빈칸이면 알림창 띄우기)
    if (inputTitle === "") {
      alert("제목을 입력해 주세요");
      return false;
    } else if (inputContents === "") {
      alert("내용을 입력해 주세요");
      return false;
    }

    setCards([...cards, newCard]);
    setNextid(nextId + 1);
    setInputTitle("");
    setInputContents("");
  };

  // 완료 버튼 클릭 시 실행
  const clickcompleteButtonHandler = (id) => {
    const completeCard = cards.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return { ...item };
      }
    });
    setCards(completeCard);
  };

  // 삭제 버튼 클릭 시 실행
  const clickRemoveButtonHandler = (id) => {
    const removeCards = cards.filter(function (item) {
      return item.id !== id;
    });
    setCards(removeCards);
  };

  return (
    <div className="main">
      {/* 메인 헤더 부분 */}
      <header className="main_header">My Todo List</header>

      {/* 투두리스트 카드 등록(입력) 부분 */}
      <form onSubmit={clickAddButtonHandler} className="todo_form">
        <div className="todo_input">
          <span>제목</span>
          <input
            name="title"
            type="text"
            value={inputTitle}
            onChange={titleChangeHandler}
          />
          <span>내용</span>
          <input
            name="content"
            type="text"
            value={inputContents}
            onChange={contentsChangeHandler}
          />
        </div>
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </form>

      {/* 투두리스트 나열 부분 */}
      <div className="todo_list">
        {/* 진행 중인 투두리스트들 */}
        <h2 className="todo_title">Working..🔥</h2>
        <div className="todo_container">
          {cards.map(function (item, index) {
            // map의 함수에 들어가는 첫번째 인자 : 배열 안의 요소를 하나씩 반환해줌.
            // map의 함수에 들어가는 두번째 인자 : index를 반환해줌.
            if (item.isDone === false) {
              return (
                // map을 쓸 때 : 모든 자식 요소들은 항상 자기만의 키값을 가져야 한다.
                // = map을 쓴 cards의 최상위 컴포넌트인 <Card>가 몇번째 요소인지 구분돼야함.
                // => Card에 key라는 속성을 이용하여 1.id를 넣거나 2.index를 넣어주기
                <Card
                  item={item}
                  key={index} // index가 0, 1, 2...늘어나며 자식 요소에 각각 key깂을 부여해줌.
                  completeFunction={clickcompleteButtonHandler}
                  removeFunction={clickRemoveButtonHandler}
                />
              );
            }
          })}
        </div>
        {/* 완료된 투두리스트들 */}
        <h2 className="todo_title">Done!🎉</h2>
        <div className="todo_container">
          {cards.map(function (item, index) {
            if (item.isDone === true) {
              return (
                <Card
                  item={item}
                  key={index}
                  completeFunction={clickcompleteButtonHandler}
                  removeFunction={clickRemoveButtonHandler}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
