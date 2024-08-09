import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header';
import Navbar from './navbar';
import About from './about';
import Experience from './exp';
import Works from './works';
import Contacts from './contacts';

const App: React.FC = () => {
  
  return (
      <>
      <BrowserRouter>
      <Header title="Esther Teodoro" />
      <Navbar activeLink="home" />
      <main>
        <Routes>
          <Route path="/home" element={<App />}>

          </Route>

          <Route path="#sobre" element={<About />}>

          </Route>
          <Route path="#exp" element={<Experience />}>

          </Route>
          <Route path="#trabalhos" element={<Works />}>

          </Route>
          <Route path="#contato" element={<Contacts />}>

          </Route>
        </Routes>
      </main>
    </BrowserRouter>
    <div className='aboutexp'>
    <About/>
    <Experience />
    </div>
    <Works />
    <Contacts />
    </>
  );
};

export default App;