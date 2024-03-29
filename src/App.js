import React, { useState } from 'react';
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {
        글제목.map((a, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>{ 글제목[i] }</h4>
              <span onClick={() => {
                let copy = [...따봉];
                copy[i] += 1;
                따봉변경(copy);
              }}>👍</span> { 따봉[i] }
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      { modal === true ? <Modal 글제목={글제목[title]}></Modal> : null }
      <input type="text" onInput={(e) => { 입력값변경(e.target.value) }}/>
      <button onClick={() => {
        if(입력값.trim() === "") {
          return null;
        } else {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }
      }}>글발행</button>
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;