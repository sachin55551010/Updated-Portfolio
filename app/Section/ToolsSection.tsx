import { FrontendSkills } from "../constants/frontend_skills";
import { BackendSkills } from "../constants/backend_skills";
import { ToolsDevops } from "../constants/tools_devops";
import Image from "next/image";
export const ToolsSection = () => {
  return (
    <div className="border border-primary-text/15 rounded-2xl p-4 grid grid-cols-4 lg:grid-cols-5 gap-5 place-items-center backdrop-blur-[.15rem]">
      {[...FrontendSkills, ...BackendSkills, ...ToolsDevops].map(
        (elem, index) => {
          return (
            <div
              key={index}
              className="w-17 h-17 flex flex-col items-center justify-center"
            >
              <div className="relative h-10 w-10 rounded-lg bg-badge p-2">
                <Image
                  src={elem.icon}
                  alt={elem.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h6 className="text-[.7rem] text-center">{elem.title}</h6>
            </div>
          );
        },
      )}
    </div>
  );
};
