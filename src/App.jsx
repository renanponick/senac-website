import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/core/Footer';
import Header from './components/core/Header';
import Home from './page/Home';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
