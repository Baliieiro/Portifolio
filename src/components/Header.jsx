import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}
