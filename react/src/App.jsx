import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Checkout from './pages/Checkout/Checkout';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Allcourses from './pages/Allcourses/Allcourses';
import CourseInfo from './pages/CourseInfo/CourseInfo';
import './App.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showNavbarFooter = location.pathname !== '/admin-panel';

  console.log('Current path:', location.pathname); // Debugging

  return (
    <div className="app">
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Allcourses" element={<Allcourses />} />
        <Route path="/course/:id" element={<CourseInfo />} />
        <Route path="/free-courses" element={<Allcourses filter="free" />} />
        <Route path="/premium-courses" element={<Allcourses filter="premium" />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
