import React, { Component, useEffect, useMemo, useState } from 'react';

function complexCompute(num: number): number {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function UseMemoLesson() {
  const [counter, setCounter] = useState(0);
  const [colored, setColored] = useState(false);

  const styles: { color: string } = useMemo(
    () => ({
      color: colored ? 'dark red' : 'black',
    }),
    [colored]
  );

  const computed: number = useMemo(() => complexCompute(counter), [counter]);

  useEffect(() => {
    console.log('style');
  }, [styles]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2>Computed: {computed}</h2>
      <h3>Color: {styles.color}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button onClick={() => setColored(!colored)}>WARNING</button>
    </>
  );
}

export default UseMemoLesson;
