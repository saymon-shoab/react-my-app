import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['Anoar','Jafor','Alongir','Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>
        <Counter></Counter>
        <Product></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="saymon" job="dorshok"></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  //const handleIncrease = ;
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Product(props) {
  const productStyle= {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
    return (
      <div style={productStyle}>
        <h3>Name:</h3>
        <h2></h2>
        <button>Buy Now</button>
      </div>
    )  
}

function Person(props) {
  const personStyle={
    border:'1px solid yellow',
    width:'400px',
    margin:'20px'
  }
  return (
    <div style={personStyle}>
       <h1>My Name:{props.name}</h1>
       <h3>My Profession:{props.job}</h3>
    </div>
  )
 
}

export default App;
