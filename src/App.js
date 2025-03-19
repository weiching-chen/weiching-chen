import './App.css';

import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from './component/Header'

import MainPage from './page/MainPage'
import P1Page from './page/P1Page'
import P2Page from './page/P2Page'
import P3Page from './page/P3Page'
import P4Page from './page/P4Page'
import P5Page from './page/P5Page'
import P6Page from './page/P6Page'
import P7Page from './page/P7Page'
import P8Page from './page/P8Page'
import P9Page from './page/P9Page'
import P10Page from './page/P10Page'
import P11Page from './page/P11Page'
import P12Page from './page/P12Page'
import P13Page from './page/P13Page'
import P14Page from './page/P14Page'
import P15Page from './page/P15Page'
import P16Page from './page/P16Page'
import P17Page from './page/P17Page'
import P18Page from './page/P18Page'
import P19Page from './page/P19Page'
import P20Page from './page/P20Page'
import P21Page from './page/P21Page'
import P22Page from './page/P22Page'
import P23Page from './page/P23Page'
import P24Page from './page/P24Page'

import CVPage from './page/CVPage'




function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename="/weiching-chen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/P1Page" element={<P1Page />} />
          <Route path="/P2Page" element={<P2Page />} />
          <Route path="/P3Page" element={<P3Page />} />
          <Route path="/P4Page" element={<P4Page />} />
          <Route path="/P5Page" element={<P5Page />} />
          <Route path="/P6Page" element={<P6Page />} />
          <Route path="/P7Page" element={<P7Page />} />
          <Route path="/P8Page" element={<P8Page />} />
          <Route path="/P9Page" element={<P9Page />} />
          <Route path="/P10Page" element={<P10Page />} />
          <Route path="/P11Page" element={<P11Page />} />
          <Route path="/P12Page" element={<P12Page />} />
          <Route path="/P13Page" element={<P13Page />} />
          <Route path="/P14Page" element={<P14Page />} />
          <Route path="/P15Page" element={<P15Page />} />
          <Route path="/P16Page" element={<P16Page />} />
          <Route path="/P17Page" element={<P17Page />} />
          <Route path="/P18Page" element={<P18Page />} />
          <Route path="/P19Page" element={<P19Page />} />
          <Route path="/P20Page" element={<P20Page />} />
          <Route path="/P21Page" element={<P21Page />} />
          <Route path="/P22Page" element={<P22Page />} />
          <Route path="/P23Page" element={<P23Page />} />
          <Route path="/P24Page" element={<P24Page />} />
          <Route path="/CVPage" element={<CVPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
