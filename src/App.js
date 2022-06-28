import './App.css';
import pfp from "./pfp.png"
import linkedin from "./linkedinLogo.png"
import twitterLogo from "./twitterLogo.png"
import githubLogo from "./githubLogo.png"

function App() {
  return (
    <div className="mainSetting"> 
      <header>
      <img src={pfp} alt="HippoPFP" className= "headerimg"></img>
      </header>
      <div className="bodyContent">
        <h2 className="name"> Hippo Alpha</h2>
        <h3 className="title"> React Guru</h3>
        <p2 className="website"> www.renegadehippos.com</p2>
        <div className="button-wrapper">
        <a href="mailto:renegadehippos@protonmail.com" target="_blank" rel="noopener noreferrer">
        <button className="email-button">Email</button>
        </a>
        <a href="https://linkedin.com/hippo__alpha" target="_blank" rel="noopener noreferrer">
        <button className="linkedin-button" ><img src={linkedin} alt="linkedinSmall" className="linkedin-small"></img>Linkedin</button>
        </a>
        </div>
        <div className="mid-body">
          <h2 className="about">About</h2>
          <p2 className="about-content">I am a frontend developer with a
           particular interest in making things simple and automating daily tasks. 
           I try to keep up with security and best practices, and am always looking for new things to learn.</p2>
           <h2 className="interests">Interests</h2>
          <p2 className="interests-content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p2>
      </div>
      </div>
      <footer>
      <a href="https://twitter.com/hippo__alpha" target="_blank" rel="noopener noreferrer">
        <img src={twitterLogo} alt="twitter-logo" className="twitter-logo" />
        </a>
      <a href="https://github.com/HippoAlpha" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="github-logo" className="github-logo" />
      </a>
      </footer>
    </div>
  );
}

export default App;
