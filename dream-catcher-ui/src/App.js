import './App.css';
import AddDreamer from './components/AddDreamer';
import Navbar from './components/Navbar';
import PopularDreams from './PopularDreams';


function App() {
  return (
    <div>
      <PopularDreams />
      <Navbar/>
      <AddDreamer/>
    </div>
  );
}

export default App;
