import { Skills } from "../../utils/dataSkills";

const SkillList = () => {
  return (
    <div className="rounded shadow-lg border ">
      <div className="px-4 pb-4 pt-2">
        <ul className="flex flex-wrap justify-center">
          {Skills.map((skill, idx) => {
            return (
              <li
                className="first:ml-0 ml-3 pt-2 text-teal text-2xl"
                id={skill.title}
                key={idx}
              >
                {skill.icon}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillList;
