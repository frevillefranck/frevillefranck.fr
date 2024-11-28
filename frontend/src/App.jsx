import Home from './pages/Home';
import { Legal } from './pages/Legal';
import './styles/index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Legal" element={<Legal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
