import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage01';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="max-w-[2048px] w-full h-full border-8"> 
        <NavBar/>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
