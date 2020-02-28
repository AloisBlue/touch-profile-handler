import React from 'react';
import './App.css';
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import Landing from "./components/layout/landing"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Landing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
