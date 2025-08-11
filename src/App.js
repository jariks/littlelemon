import Header from './components/Header';
import Main from './components/Main';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reserve" element={<Reservation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
