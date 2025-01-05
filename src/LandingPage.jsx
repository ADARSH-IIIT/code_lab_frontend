import { useState } from 'react';
import './LandingPage.css'; // Import the custom CSS




export default function Page() {
  return (
    <div className="page-container">
      {/* Animated background spheres */}
      <div className="blob-1" />
      <div className="blob-2" />

      {/* Background gradients */}
      <div className="background-gradient" />
      <div className="radial-gradient" />



       <div  className='main-content'>
      {/* Header */}
      <header className="header">
              &lt;/&gt; Code_lab
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h2 className="hero-title">
          Collaborate_Code_Create
        </h2>
        <p className="hero-description">
          Experience powerful coding environments with our advanced editor. Write, test, and build amazing projects in one place.
        </p>
        <button className="hero-button">Start Coding</button>

        {/* Feature Cards */}
        <div className="feature-cards">
          <div className="feature-card">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="icon">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15 8c0 1.1-.9 2-2 2H7V8h6c1.1 0 2 .9 2 2zM7 12h6c1.1 0 2 .9 2 2v6H7v-6c0-1.1.9-2 2-2z" />
              </svg>
            </div>
            <h3 className="feature-title">Real-time Editing</h3>
            <p className="feature-description">
              See changes as they happen. Code with perfect synchronization.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="icon">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 4.41L16.59 9 15.17 10.41 12 7.24 8.83 10.41 7.41 9zM12 6v10h10V6zM6 16V6H4v10z" />
              </svg>
            </div>
            <h3 className="feature-title">Team Collaboration</h3>
            <p className="feature-description">
              Work together seamlessly with powerful collaboration tools.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="icon">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 6V4h7V2H12v2H9v4h5v9H9v2h5v4h-5c-2.21 0-4-1.79-4-4v-9c0-2.21 1.79-4 4-4h5z" />
              </svg>
            </div>
            <h3 className="feature-title">Instant Preview</h3>
            <p className="feature-description">
              See your code come to life with live preview functionality.
            </p>
          </div>
          
        </div>
      </main>
      </div>
    </div>
  );
}
