import { Container } from "./styles";
import Ranjitha from "../../assets/about.png";
import htmlIcon from "../../assets/html-ico.png";
import cssIcon from "../../assets/css-ico.png";
import figma from "../../assets/figma.png";
import java from "../../assets/java.png";
import python from "../../assets/python-ico.png";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Ranjitha} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I am a proactive Computer Science Engineering student aspiring to be a Full stack Developer. 
With hands-on project experience, I bring a robust skill set in both frontend and backend 
development, complemented by a quick learning ability. I have successfully enhanced user 
engagement through user-friendly interfaces, utilizing cutting-edge technologies across the 
full stack. Eager to apply my skills and contribute to your organization, I am committed to 
staying updated with industry trends. Thank you for considering my application; I look 
forward to the opportunity to thrive within your esteemed team. 
          </p>
        </ScrollAnimation>
       
        

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={java} alt="Wordpress" />
            </ScrollAnimation>
          </div>

          

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          
        </div>
      </div>
      
    </Container>
  )
}
