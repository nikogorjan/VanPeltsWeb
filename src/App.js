import './App.css';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import Pages from './Pages';
import Contact from './Components/Contact/ContactPage';

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
   
  );
}

export default App;
