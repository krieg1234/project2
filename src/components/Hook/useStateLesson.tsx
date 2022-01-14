import React, { useState } from 'react';

function computeInitialCounter(): number {
  console.log('computing....');
  return Math.trunc(Math.random() * 20);
}

function UseStateHook(): JSX.Element {
  const [counter, setCounter] = useState(() => computeInitialCounter());
  const [state, setState] = useState({
    title: 'COUNTER',
    date: Date.now(),
  });

  function increment(): void {
    // setCounter(counter + 1);
    setCounter((prevState) => {
      return prevState + 1;
    });
  }

  function decrement(): void {
    setCounter(counter - 1);
  }

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setState((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input onChange={inputHandler}></input>
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </>
  );
}

export default UseStateHook;
