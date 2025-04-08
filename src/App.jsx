import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignInButton from './components/SignInButton';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <SignInButton />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
