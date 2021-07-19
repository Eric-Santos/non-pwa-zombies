import './App.css';
import zombies from './bkg-videos/zombies.webm'

function App() {
  return (
    <div className="App">
      <video src={zombies} autoPlay loop></video>
    </div>
  );
}

export default App;
