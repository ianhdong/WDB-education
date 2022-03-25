import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import {useState} from 'react';
function App() {
  let x = 5;
  let item = ["apple", "banana", "oranges"];
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p>{x}</p>
      {item.map((item) => (
        <li>{item}</li>
      ))}
      <Button name="Add" click={() => setCount(count + 1)}/>
      <Button name="Subtract" click={() => setCount(count - 1)}/>
      <Counter count/>
    </div>
  );
}

export default App;
