
import './App.css'
import About from './components/About';


import Body from './components/Body'

import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Cart from './components/Cart';




function App ()  {
 

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}




export default App
