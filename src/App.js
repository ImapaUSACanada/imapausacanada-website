<<<<<<< HEAD
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
    return (
        <div>
            <Navbar />
            <LandingPage />
        </div>
    );
=======
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="homepage">
      <header>
        <div className="logo">
          <img src="/logo.jpg" alt="IMAPA Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#departments">Departments</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>IMAPA USA-Canada</h1>
          <p>Ikatan Mahasiswa Papua di USA dan Canada</p>
        </div>
      </section>
    </div>
  );
>>>>>>> eabc939 (Updated HomePage with UI)
}

export default App;
