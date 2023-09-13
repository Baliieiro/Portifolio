import "../../styles/Projects.css";
import projects from "../../db.json";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Projects() {
  const [filterProjects, setFilterProject] = useState(projects);

  return (
    <div className="projetos">
      <h2>Meus projetos</h2>
      <span>
        <button onClick={(currentState) => setFilterProject(projects)}>
          Todos
        </button>
        <button
          onClick={(currentState) =>
            setFilterProject((currentState) =>
              projects.filter((project) => project.tecnology === "React")
            )
          }>
          React
        </button>
        <button
          onClick={(currentState) =>
            setFilterProject((currentState) =>
              projects.filter((project) => project.tecnology === "JavaScript")
            )
          }>
          JavaScript
        </button>
      </span>
      <div className="projetos_lista">
        {filterProjects.map((project) => (
          <div className="card" key={project.id}>
            <Link to={project.linkProject}>
              <img src={project.srcImage} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
