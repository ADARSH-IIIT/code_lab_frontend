import React, { useState } from 'react';
import './Join_Session_Page.css';
import { useNavigate } from 'react-router-dom';


const Join_Session_Page = () => {
  const [  sessionCode, setSessionCode] = useState( '' );

  const navigator = useNavigate()


  const handleSession = () => {
  
    if (!  sessionCode ||   sessionCode.length <= 8) {
      console.error("Error: The input length must be greater than 8 characters.");
      return;
    }
  
    // Check if the input is a valid link
    try {
      const url = new URL(  sessionCode);
      console.log("This is a link:", url.href);
      window.open(url.href , "_self")
    } catch (error) {
      // If it's not a valid URL, it's a string
      console.log("OK: This is a valid string but not a link.");
      navigator(`/main_platform/${  sessionCode}`)
    }
  };







  const handleCreateProject = () => {
    console.log('Creating new project');
  };






  return (
    <div className="project-page">
      <div className="content-container">
        <h1 className="title">Join_Session._.</h1>
        
        <div className="join-section">
          <input
            type="text"
            value={  sessionCode}
            onChange={(e) => setSessionCode(e.target.value)}
            className="project-input"
            placeholder="Enter project code or link"
          />
          <button onClick={handleSession} className="button join-button">
            Continue
          </button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <button onClick={handleCreateProject} className="button create-button">
          Create New Session
        </button>
      </div>
    </div>
  );
};

export default Join_Session_Page