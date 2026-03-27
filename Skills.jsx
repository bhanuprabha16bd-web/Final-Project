import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

function Skills() {
  const [skills, dispatch] = useReducer(reducer, ["HTML", "CSS"]);

  return (
    <div>
      <h1>Skills</h1>
      {skills.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
      <button
        onClick={() => dispatch({ type: "add", payload: "React" })}
      >
        Add Skill
      </button>
    </div>
  );
}

export default Skills;