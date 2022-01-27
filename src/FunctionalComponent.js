import React, { useState } from 'react';
import './style.css';

function App(props) {
  const [counter, setCounter] = useState(0);

  const handlerClick = (event) => setCounter(counter + 1);

  function handlerMouseEnter(event) {
    return console.log('handlerMouseEnter focused');
  }

  const handlerMouseLeave =(event) => {
    console.log('handlerMouseLeave out of focus');
  }

  const handlerClickPrevent = (event) => {
    event.preventDefault()
    console.log("handlerClickPrevent clicked but no transition done")
};

  return (
    <>
      <button
        onClick={handlerClick}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        Функциональный компонент нажали {counter} раз
      </button>
      <br />
      <a href="https://github.com/Aleksey-Danchin/react-youtube-tutorial" onClick={handlerClickPrevent}>Ссылка с запретом перехода</a>
    </>
  );
}

export default App;
