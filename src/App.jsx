
import './App.css'
import About from './components/About';


import Body from './components/Body'

import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';




function App ()  {
 

  return (
    <Provider store={appStore}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
}




export default App
