import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <Navbar title="Textutils" about="About us" />
      <Routes>
      
      <Route  path="/" element={<TextForm heading="Enter your text to analyze:"/>} exact /> 
        
      
      <Route  path="/about" element={<About/>} exact /> 
      </Routes>
      </Router>
    </>
  );
}

export default App;
