import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    value: 3
  });

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkill);
    setNewSkill({
      name: "",
      value: 3
    });
  }

  return (
    <form onSubmit={handleAddSkill} className="NewSkillForm">
      <label>Skill</label>
      <input
        value={newSkill.name}
        onChange={(evt) => setNewSkill({ ...newSkill, name: evt.target.value })}
        placeholder="New Skill"
        required
        pattern=".{3,}"
      />
      <label>Level</label>
      <select
        value={newSkill.value}
        onChange={(evt) =>
          setNewSkill({ ...newSkill, value: evt.target.value })
        }
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">Add Skill</button>
    </form>
  );
}
