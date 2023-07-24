import logo from './logo.svg';
import './App.css';

function App() {
const apiUrl = 'http://localhost:8080/api/'
fetch(apiUrl)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    console.log('Data from the API:', data);
  })
  .catch(err=> {
    console.error('Fetch error:', err);
  });

   
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
      </header>
    </div>
  );
}

export default App;
