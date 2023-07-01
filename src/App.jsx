import React from 'react';
import { ContextProvider, usePage } from './Components/utils/global.context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  const {pageState} = usePage();
  const appClassName = pageState.theme ? 'dark-theme' : 'light-theme';


  return (
    <Router>
      <div className={`app ${appClassName}`}>
        <Navbar />
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dentista/:id" element={<Detail/>} />
          <Route path="/favs" element={<Favs/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;