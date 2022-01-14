import React from 'react';
import { useAlert } from './AlertContext';

export default function UseContextLesson() {
  const {show}=useAlert()
  return (
    <>
      <h1>Hello from Context</h1>
      <button onClick={()=>show('AHTUNG')}>Show Alert</button>
    </>
  );
}
