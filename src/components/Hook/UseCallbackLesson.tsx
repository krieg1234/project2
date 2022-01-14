import React, { useMemo,useState, useCallback } from 'react';
import ItemsList from './itemsList';

export default function UseCallbackLesson() {
  const [counter, setCounter] = useState(0);
  const [colored, setColored] = useState(false);

  const styles: { color: string } = useMemo(
    () => ({
      color: colored ? 'dark red' : 'black',
    }),
    [colored]
  );

  const generateItemsFromAPI=useCallback(():string[]=>{
    return new Array(counter).fill('').map((_,i)=>`Element №${i+1}`)
  },[counter]) 

  return (
    <>
      <h1>Counter: {counter}</h1>      
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

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}
