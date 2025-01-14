import { Skills } from "../../utils/dataSkills";

const SkillList = () => {
  return (
    <div className="rounded shadow-lg border w-[85%] md:w-[80%]">
      <div className="px-2 md:px-4 pb-4 pt-2">
        <ul className="flex flex-wrap md:justify-center gap-2 md:gap-3">
          {Skills.map((skill, idx) => {
            return (
              <li
                className="pt-2 text-teal text-lg md:text-2xl"
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
