import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Form } from './components/Form/Form';

type TitleProps = {
  title: string;
  test?: string;
};

const Title = ({ title, test = 'test' }: TitleProps) => (
  <h1>
    Hello, world! {title} {test}
  </h1>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="Oleg" />
        <Form />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter title="BLABLABLA" />
      </header>
    </div>
  );
}

export default App;
