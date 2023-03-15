import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
  const SkillListItems = skills.map((s, idx) => (
    <SkillListItem skill={s} index={idx} key={idx} />
  ));

  return <ul>{SkillListItems}</ul>;
}
