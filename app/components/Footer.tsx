import { FaHeart } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="w-[92%] lg:w-[57%] p-4 border-t border-primary-text/15 mt-6 backdrop-blur-[.15rem]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-sm text-primary-text/40">
          Designed & Developed by Sachin
        </span>
        <span>
          <FaHeart className="text-red-500" />
        </span>
      </div>
    </div>
  );
};
