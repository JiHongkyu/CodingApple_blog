/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className='list'>
        <h4>{ 글제목[0] } <span className='like' onClick={() => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span></span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{ 글제목[2] } <span></span></h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(true) }}>{ 글제목[i] } <span className='like' onClick={() =>{
                let copy = [...like];
                copy[i] += 1;
                setLike(copy);
              }}>👍</span> {like[i]} </h4>
              <p>2월 17일 발행</p> 
            </div>
          )
        })
      }

      {
        modal === true ? <Modal 글제목={글제목}></Modal> : ''
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ props.change }>글수정</button>
    </div>
  )
}


export default App;
