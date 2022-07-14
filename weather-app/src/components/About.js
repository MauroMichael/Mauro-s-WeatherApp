import React from "react";
import foto from './foto.jpg'
import "./About.css";

function About() {
  return (
    <div className="about-content">
      <h1>Vecchiarelli Ptaskin Mauro</h1>
      <h2 className="about-name">About Me</h2>
      <div className="about-container">
        <div className='about-text'>
                <p className="about-me">
                I specialize in Full Stack Development. I have the ability to develop
                web projects with the predictability that they are scalable and
                modularizable so that I can program as a team.
                </p>
                <p className="about-me">
                Have I learned how to program and do I know everything there is to
                know? Never!!. You should never lose your sense of wonder and
                curiosity as a developer, and that's my motto. Explaining and teaching
                others gives me as much satisfaction as learning new things.
                </p>
                <p className="about-me">
                Computer Science is my universe where I seek an answer to all unknowns
                with passion and enthusiasm. Having been an Account Manager of an IT
                company, I felt always fascinated with the requesting projects,
                their development and results.
                </p>
        </div>
        <img className="foto" src={foto} alt='Foto'/>
      </div>
    </div>
  );
}

export default About;
