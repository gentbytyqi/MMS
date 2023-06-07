import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import MapComponent from './components/Map/MapComponent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <div className="content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="map-container">
          <MapComponent />
        </main>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
