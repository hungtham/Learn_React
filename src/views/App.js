import logo from './logo.svg';
import './App.scss';

import Mycomponent from './example/Mycomponent';

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
        <Mycomponent />
        {/* <Mycomponent></Mycomponent> */}

      </header>
    </div>
  );
}

export default App;
