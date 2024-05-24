import { Container } from "./styles";
import emailIcon from "../../assets/mail-ico.png";
import phoneIcon from "../../assets/phone-ico.png"

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ranjithap2603@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ranjithap2603@gmail.com">ranjithap2603@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919361176224"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919361176224">+91 9361176224</a>
        </div>  
      </div>
    </Container>
  )
}