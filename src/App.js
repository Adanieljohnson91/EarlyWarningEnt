import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ApplicationViews from './views/ApplicationViews';
import './App.css';

function App() {
  return (
    <>
      <div className="header background">
        <Header />
      </div>
      <div className="main-view"> 
        <ApplicationViews />
      </div>
      <div className="footer background">
        <Footer />
      </div>
    </>
  );
}

export default App;
