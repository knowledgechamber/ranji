import { Container } from './styles'
import icon from '../../assets/Iconr.png'
import linkedin from '../../assets/linkedin_3665214.png'
import githubIcon from '../../assets/git-external.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>Thanks for visiting my site</span>
        <span></span>
      </a>
      <div>
        <p>
          with regards <img src={icon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ranjithap26/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/RanjithaP26"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        
       
      </div>
    </Container>
  )
}
