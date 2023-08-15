import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import About from './components/About';
import Footer from './components/Footer';
import CoinDetails from './components/CoinDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/about" element={<About />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
