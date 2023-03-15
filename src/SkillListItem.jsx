import "./SkillListItem.css";

export default function SkillListItem({ skill, index }) {
  return (
    <li
      className={"SkillListItem"}
      style={{ backgroundColor: index % 2 ? "silver" : "yellow" }}
    >
      <div className="index">{index + 1}</div>
      {skill.name}
      <div className="level">{skill.level}</div>
    </li>
  );
}
