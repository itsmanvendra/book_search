
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchReseult from './Components/SearchReseult';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <div className='App-body'>
        <SearchReseult />
      </div>
    </div>
  );
}

export default App;
