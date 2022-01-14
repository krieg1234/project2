import React, { Component, useEffect, useState } from 'react';

export default function UseEfectHook() {
  const [type, setType] = useState(() => 'users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const mouseMovehandler = (e: MouseEvent) =>
    setPos({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    console.log('Component did mount');
    window.addEventListener('mousemove', mouseMovehandler);
    return () => {
      window.removeEventListener('mousemove', mouseMovehandler);
    };
  }, []);

  const clickHandler = (value: string) => () => {
    setType(value);
  };

  return (
    <>
      <h1>Resorce: {type}</h1>
      <button onClick={clickHandler('users')}>Users</button>
      <button onClick={clickHandler('todos')}>Todos</button>
      <button onClick={clickHandler('posts')}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
      <pre>{JSON.stringify(pos, null, 3)}</pre>
    </>
  );
}
