
import './LandingPage.css'; // Import the custom CSS
import { FiUsers, FiZap } from "react-icons/fi";

import { FaCode } from "react-icons/fa";

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
        <div className="hero-title">
          Collaborate_Code_Create
        </div>
        < div  className="hero-description">
          Experience powerful coding environments with your peer.  Build amazing projects in one place.
        </div>
        < span  className="hero-button">.__Explode__.</ span >

        {/* Feature Cards */}
        <div className="feature-cards">
          <div className="feature-card">
            <div className="icon-container">
               <FaCode  size={20}/>
            </div>
            <h3 className="feature-title">Real-time Editing</h3>
            <p className="feature-description">
               Code with perfect synchronization.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
               <FiUsers size={20} / >
            </div>
            <h3 className="feature-title">Team Collaboration</h3>
            <p className="feature-description">
              Work together seamlessly .
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
            <FiZap size={20}/>
            </div>
            <h3 className="feature-title">Instant Preview</h3>
            <p className="feature-description">
              Live preview functionality.
            </p>
          </div>
          
        </div>
      </main>
      </div>
    </div>
  );
}
