import './App.css';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import Pages from './Pages';
import Contact from './Components/Contact/ContactPage';
import AboutUs from './Components/AboutUs/AboutUs';
import TreeRemoval from './Components/TreeRemoval/TreeRemoval';
import TreeTrimming from './Components/TreeTrimming/TreeTrimming';
import Landscaping from './Components/Landscaping/Landscaping';
import FenceBuilding from './Components/FenceBuilding/FenceBuilding';
import OtherService from './Components/OtherService/OtherService';

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/Tree-Removal" element={<TreeRemoval/>} />
        <Route path="/Tree-Trimming" element={<TreeTrimming/>} />
        <Route path="/Landscaping" element={<Landscaping/>} />
        <Route path="/Privacy-Fence-Building" element={<FenceBuilding/>} />
        <Route path="/Other-Services" element={<OtherService/>} />

      </Routes>
    </Router>
   
  );
}

export default App;
