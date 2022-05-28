import logo from './logo.svg';
import './App.scss';

import MyComponent from './example/MyComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello to ReactJS!
        </p>

        <MyComponent />


        {/* <Mycomponent></Mycomponent> */}

      </header>
    </div>
  );
}

export default App;
