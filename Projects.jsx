import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      { id: 1, name: "Portfolio Website" },
      { id: 2, name: "E-commerce App" },
      { id: 3, name: "Todo App" },
    ]);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default Projects;