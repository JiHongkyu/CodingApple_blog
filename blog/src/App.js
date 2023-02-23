/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, set입력값] = useState('');
  let input = document.querySelector('input');
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(true); setTitle(i); }}>{ 글제목[i] } <span className='like' onClick={(e) =>{
                e.stopPropagation();
                let copy = [...like];
                copy[i] += 1;
                setLike(copy);
              }}>👍</span> {like[i]} <button onClick={(e) => {
                e.stopPropagation();
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>글 삭제</button> </h4>
              <p>2월 17일 발행</p> 
            </div>
          )
        })
      }

      <input onChange={(e) => { set입력값(e.target.value); }} type="text" />
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        input.value = '';
      }} >글 추가</button>

      {
        modal === true ? <Modal 글제목={글제목} title={title} ></Modal> : ''
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ props.change }>글수정</button>
    </div>
  )
}

export default App;
