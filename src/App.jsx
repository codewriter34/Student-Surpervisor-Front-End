import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './index.css';
import SupervisorFinder from './SupervisorFinder';
import PopularStats from './popularStats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-supervisor" element={<SupervisorFinder />} />
        <Route path="/popular-stats" element={<PopularStats />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
