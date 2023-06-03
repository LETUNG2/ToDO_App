import logo from './logo.svg'
import './App.scss'
import MyComponent from './Example/MyComponent.js'

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world with React JS (Tung Milo)
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
