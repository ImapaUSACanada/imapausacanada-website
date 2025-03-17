import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage'; // Import your AuthPage component

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/auth' element={<AuthPage />} />
            </Routes>
        </Router>
    );
}

export default App;
