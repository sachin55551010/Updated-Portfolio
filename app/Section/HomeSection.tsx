"use client";
import Link from "next/link";
import GithubGraph from "../components/Contributions";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { Skills } from "../components/Skills";

export const HomeSection = () => {
  return (
    <div className="">
      {/* github graph */}

      <div className="flex flex-col rounded-2xl gap-4 border border-zinc-500/30 p-2">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-1">
            <FaGithub />
            <h6 className="text-sm">Github Activity</h6>
          </div>

          <Link
            href="https://github.com/sachin55551010"
            className="flex items-center gap-1 text-sm"
          >
            Sachin
            <TbExternalLink />
          </Link>
        </div>

        <GithubGraph />
      </div>

      {/* skills */}
      <Skills />
    </div>
  );
};
