import instaIcon from "../resources/insta-white.png";
import linkedInIcon from "../resources/linkedIn-white.png";
import githubIcon from "../resources/github-white.png";
import twitterIcon from "../resources/twitter-white.png";

function Footer() {
  return (
    <section className="footer">
      <div className="plugs">
        <a
          className="git-plug"
          href="https://github.com/PolskaTag"
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={githubIcon} alt="Github"></img>
        </a>
        <a
          className="insta-plug"
          href="https://www.instagram.com/philip.lapinski/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={instaIcon} alt="Instagram"></img>
        </a>
        <a
          className="linkedIn-plug"
          href="https://www.linkedin.com/in/philip-lapinski/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={linkedInIcon} alt="LinkedIn"></img>
        </a>
        <a
          className="twitter-plug"
          href="https://twitter.com/philip_lapinski"
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={twitterIcon} alt="Twitter"></img>
        </a>
      </div>
      <div className="creds">
        <span>
          Designed & Built by Philip Lapinski <br />
        </span>
        <span>PhilipLapinski.PL@gmail.com</span>
      </div>
    </section>
  );
}

export default Footer;
