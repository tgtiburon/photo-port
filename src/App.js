
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  // If we wrote it without JSX
  // Returns JSX   -> Javascript XML
  // React.createElement("div", {} [
  // React.createElement("h1", {}, "Ginger"),
  // React.createElement("p", {}, "Breed: Brittany Spaniel")
 // ])
 // Same as 
 // <div>
    // <h1>Ginger</h1>
    // <p>bree: Brittany Spaniel</p>
 //</div>
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
