import React, { Component, useEffect, useRef, useState } from 'react';

export default function UseRefLesson() {
  const [value, setValue] = useState('init');

  const renderCount = useRef(1);
  const btnRef = useRef<HTMLButtonElement>(null!);
  const prevValue = useRef(0);

  useEffect(() => {
    prevValue.current = renderCount.current;
    renderCount.current++;
    console.log(btnRef.current?.value);
  });

  const focus = (): void => {
    btnRef.current.textContent = 'qqqqqq';
  };
  return (
    <>
      <h1>Renders: {renderCount.current}</h1>
      <h2>Prev:{prevValue.current}</h2>
      <button ref={btnRef} onClick={focus}>
        ЙЙЙЙ
      </button>
      <button onClick={() => setValue(value + renderCount.current)}>
        {value}
      </button>
    </>
  );
}
