import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "Javascript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  function addSkill(skill) {
    // Replace state, don't mutate it!!!
    setSkills([...skills, skill]);
  }

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {/* Pass skills as a prop */}
      {<SkillList skills={skills} />}
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
