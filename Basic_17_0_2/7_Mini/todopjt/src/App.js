import React, { useState } from "react";
import style from "./style.module.css";

const App = () => {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // event 기본활동 막아줌
    if (toDo === "") return;
    setToDos((currentArray) => [...currentArray, toDo]); //자바스크립트 문법 이용 하는 것, 압축해제
    // 이를 통해 새 array를 리턴하는 것
    setTodo(""); //검색어 초기화
  };

  return (
    <div className={style.area}>
      <h1>My To Dos : ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="Write your to do..."
        />
        <input type="submit" value="제출하기" />
      </form>
      <hr />

      {/* 자바스크립트 문법 map을 이용, {} 안에 또다른 {}선언 이유 - 제대로 값 리턴 위해
        안하면 (즉 {item}이 아니라 item 으로 두면... item으로 그대로 나옴

        key값은 항상 고유값이어야함. 그리고 인덱스값으로 사용을 권장안함
      */}
      {toDos.map((item, index) => (
        <li key={index} className={style.item}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default App;
