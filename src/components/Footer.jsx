import { Link } from "react-router-dom";
import "/src/styles/Footer.css";
import Instagram from "/src/assets/instagram.png";
import Linkedin from "/src/assets/logotipo-do-linkedin.png";
import Github from "/src/assets/github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="redes-sociais">
        <Link to={"https://www.instagram.com/balieiro_daniel/"}>
          <img src={Instagram} alt="Instagram" />
        </Link>
        <Link to={"https://www.linkedin.com/in/daniel-balieiro-392207228/"}>
          <img src={Linkedin} alt="Lindedin" />
        </Link>
        <Link to={"https://github.com/Baliieiro"}>
          <img src={Github} alt="Github" />
        </Link>
      </div>
      <p> feito por Daniel</p>
    </footer>
  );
}
