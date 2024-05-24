import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/Profile2.png"
import { NavHashLink } from "react-router-hash-link"
import Li from '../../assets/linkedin_3665214.png'
import git from '../../assets/git-external.png'
import Hello from '../../assets/Hello.gif'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>RANJITHA</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Fresher</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"></p>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
        <div className="social-media">
        
        <a
          href="https://www.linkedin.com/in/ranjithap26/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Li} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/RanjithaP26"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} alt="GitHub" />
        </a>
       
     
      </div>
        </ScrollAnimation>

      </div>
     

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="illustration" />
        </ScrollAnimation>
      </div>
     
    </Container>

  )
}