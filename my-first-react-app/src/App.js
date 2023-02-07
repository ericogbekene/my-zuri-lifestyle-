import logo from './logo.svg';
import './App.css';
import ReactDom from "react-dom"

function App() {
  return (
    
<div className="App">
      <header className="App-header">
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
        <h1> Are you there </h1>
       </header>
       <div className = "next">
          <p> Next Line</p> 
          <ul>
            <li><a href = "#">  Home </a> </li>
            <li>  About </li>
            <li> Contact  </li>
          </ul>
          <p className = "main-line"> We are the Champions </p>
        </div>
       </div> 


     
  );
}

export default App;


