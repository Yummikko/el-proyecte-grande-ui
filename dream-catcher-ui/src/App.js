import logo from './logo.svg';
import './App.css';
import AddDreamer from './components/AddDreamer';
import Navbar from './components/Navbar';
import PopularDreams from './components/PopularDreams';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PopularDreams />
          <Navbar/>
          <Login/>
          <AddDreamer/>
        </div>
      </header>
    </div>
  );
}

export default App;
