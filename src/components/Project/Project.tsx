import { Container } from "./styles";
import project from '../../assets/project.png'
import externalLink from "../../assets/git-external.png"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> Assessing the Safety of Municipal Drinking Water</h3>
              <p>
              A website designed to Calculate the Ph, Mineral and other substance value from the water 
of any source.This will help comsumer to avoid impure water.  
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Safety of Municipal Drinking Water.</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://github.com/RanjithaP26" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Crime prediction using machine learning</h3>
              <p>
              Description:  
This ia a Machine learning algorithm which monitors the live feed of the connected 
cameras and detects any of the crime is happening with the help of trained models. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Crime prediction.</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       
      </div>

       

      
      
    </Container>

    
  );
}