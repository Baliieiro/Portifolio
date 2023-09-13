import { useState } from "react";
import photo from "/src/assets/Photo.png";
import "../../styles/About.css";

const urlDownload = "http://www.w3.org/2000/svg";
export default function About() {
  const [download, setDownload] = useState("");

  return (
    <div className="about">
      <div className="info">
        <h2>Sobre mim</h2>
        <span>
          <p>
            Olá! Sou Daniel e este é o meu espaço. Sou apaixonado por
            tecnologia, aqui compartilho minha jornada, insights e paixões.
            Desde 2022, tenho explorado o mundo da programação e aprendido
            muito. Acredito em trabalho em equipe, trabalhar com pessoas de
            diferentes origens e habilidades para atingir um objetivo em comum,
            amo atividades físicas e judô. Neste espaço, compartilho minhas
            experiências profissionais e pessoais. Vamos aprender e crescer
            juntos?! <br />
            Com gratidão, Daniel
          </p>
        </span>
        <button>
          <a href="/src/assets/Curriculo.pdf" download>
            Baixar CV
          </a>
        </button>
      </div>
      <article>
        <img src={photo} alt="foto de Daniel" />
      </article>
    </div>
  );
}
