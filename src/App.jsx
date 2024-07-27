import React from 'react';
import './App.css';
import TravelList from './components/TravelList';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-gradient-to-r from-[#2980b9] to-[#2c3e50]">
        <h1>Travel Destinations of India</h1>
      </header>
      <TravelList />
    </div>
  );
}

export default App;
