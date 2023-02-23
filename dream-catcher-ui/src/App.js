import logo from './logo.svg';
import './App.css';
import AddDreamer from './components/AddDreamer';
import Navbar from './components/Navbar';
import PopularDreams from './components/PopularDreams';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PopularDreams />
          <Navbar/>
          <AddDreamer/>
        </div>
      </header>
    </div>
  );
}

export default App;
