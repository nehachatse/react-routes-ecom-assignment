import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './Components/Routes/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
