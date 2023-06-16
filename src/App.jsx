import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부하기",
      isDone: false,
    },
  ]);

  // if문으로 isdone이 true면 위, 아니면 아래로!!

  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [nextId, setNextid] = useState(1);
  const initialState = { id: 1, title: "", content: "", isDone: false };

  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  const [inputTodo, setInputTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setInputTodo({ ...inputTodo, [name]: value, ["id"]: nextId });
  };

  // 등록 버튼 클릭 시 실행되는 부분
  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    setCards([...cards, inputTodo]);
    setInputTodo(initialState);
    setNextid(nextId + 1);
  };

  // 삭제 버튼 클릭 시 실행되는 부분
  const clickRemoveButtonHandler = (id) => {
    const newCards = cards.filter(function (card) {
      return card.id !== id;
    });
    setCards(newCards);
  };

  // 완료 버튼 클릭 시 실행되는 부분
  const clickcompleteButtonHandler = (id) => {
    const completeCard = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isDone: !card.isDone };
      } else {
        return { ...card };
      }
    });
    setCards(completeCard);
  };

  return (
    <div className="main">
      {/* 메인 헤더 부분 */}
      <header className="main_header">My Todo List</header>

      {/* 투두리스트 카드 등록 부분 */}
      <form onSubmit={clickAddButtonHandler} className="todo_form">
        <div className="todo_input">
          <span>제목</span>
          <input
            name="title"
            type="text"
            value={inputTodo.title}
            onChange={onChangeHandler}
          />
          <span>내용</span>
          <input
            name="content"
            type="text"
            value={inputTodo.content}
            onChange={onChangeHandler}
          />
        </div>
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </form>

      {/* 투두리스트 나열 부분 */}
      <div className="todo_list">
        <h2 className="todo-_title">Working..🔥</h2>
        <div className="todo_container">
          {/* <div className="todo_card"> */}
          {cards.map(function (item) {
            if (item.isDone === false) {
              return (
                <Card
                  item={item}
                  key={item.id}
                  removeFunction={clickRemoveButtonHandler}
                  completeFunction={clickcompleteButtonHandler}
                />
              );
            }
          })}
          {/* </div> */}
        </div>
        {/* <div className="app-style">
            {users.map(function (item) {
              return (
                <User
                  key={item.id}
                  item={item}
                  removeFunction={clickRemoveButtonHandler}
                />
              );
            })}
          </div> */}
        <h2 className="card-_title">Done!🎉</h2>
        <div className="todo_container">
          {cards.map(function (item) {
            if (item.isDone === true) {
              return (
                <Card
                  item={item}
                  key={item.id}
                  removeFunction={clickRemoveButtonHandler}
                  completeFunction={clickcompleteButtonHandler}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
