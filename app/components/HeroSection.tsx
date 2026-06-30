"use client";
import Image from "next/image";
import ThemeToggle from "./ThemeToggleBtn";
import heroBg from "../../public/background.avif";
import profile_pic from "../../public/profile_pic.avif";
import { audiowide, edu, spaceGrotesk } from "../constants/custom_font";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { NavIcons } from "../constants/nav_icons";
import { useState } from "react";

import { HomeSection } from "../Section/HomeSection";
import { ProjectsSection } from "../Section/ProjectsSection";
import { ToolsSection } from "../Section/ToolsSection";
import { TestimonialsSection } from "../Section/TestimonialsSection";
import { ContactSection } from "../Section/ContactSection";
export const HeroSection = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const handleNavBtn = (val: string) => {
    setActiveNav(val);
  };

  console.log(activeNav);

  const about =
    "I build products, not just features. From planning and development to deployment, I enjoy taking ownership of the entire development process. I focus on creating fast, scalable, and user-friendly web applications using modern technologies like React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. I'm always learning, improving, and choosing the right tools to solve real business problems—not just following trends.";
  return (
    <div
      className={`h-fit w-full lg:w-[60%] flex flex-col items-center p-4 gap-3 ${spaceGrotesk.className} `}
    >
      {/* background */}
      <motion.div className="w-full h-60 lg:h-80 relative rounded-2xl overflow-hidden ">
        <Image
          src={heroBg}
          alt="bg"
          fill
          className="object-cover rounded-2xl mask-[linear-gradient(to_bottom,black_50%,transparent)] hover:scale-110 transition-all duration-800"
        />

        {/* profile picture */}
        <div className="absolute border-2 shadow-[2px_2px_10px_rgba(0,0,0,1)] border-zinc-500 rounded-full top-25 left-4 h-30 w-30 lg:h-40 lg:w-40 lg:top-35">
          <Image
            src={profile_pic}
            alt="profile"
            fill
            className="object-center rounded-full"
          />
        </div>
      </motion.div>

      {/* other information */}
      <div className="flex justify-between w-full px-2">
        {/* name and theme toggle */}
        <div className="text-2xl lg:text-3xl font-semibold">
          {"Sachin Bansal".split("").map((elem, index) => {
            return (
              <motion.h1
                key={index}
                className={`inline-block ${audiowide.className} font-bold`}
                initial={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {elem === " " ? "\u00A0" : elem}
              </motion.h1>
            );
          })}
        </div>
        <ThemeToggle />
      </div>

      {/* About */}
      <motion.div className="text-sm">
        {about.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.2,
                  delay: (wordIndex * 10 + charIndex) * 0.01,
                }}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </motion.div>

      {/* sub heading */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 6.2 }}
      >
        <p className={`text-lg text-decoration ${edu.className}`}>
          I believe great products come from ownership, curiosity, and attention
          to detail. If that&apos;s what you&apos;re looking for, let&apos;s
          connect.
        </p>
      </motion.div>

      {/* social media icons and resume and profile viewer */}
      <div className="w-full flex items-center justify-between mt-4">
        {/* icons */}
        <div className="flex gap-3">
          <span className="text-zinc-400 hover:text-(--foreground) transition-all duration-300 cursor-pointer">
            <FaLinkedin size={22} />
          </span>
          <span className="text-zinc-400 hover:text-(--foreground) transition-all duration-300 cursor-pointer">
            <FaGithub size={22} />
          </span>
          <span className="text-zinc-400 hover:text-(--foreground) transition-all duration-300 cursor-pointer">
            <FaXTwitter size={22} />
          </span>
          <span className="text-zinc-400 hover:text-(--foreground) transition-all duration-300 cursor-pointer">
            <IoMdMail size={22} />
          </span>
        </div>

        {/* side icon */}
        <div className="text-zinc-400 hover:text-(--foreground) transition-all duration-300 cursor-pointer">
          <AiOutlineDownload size={22} />
        </div>
      </div>

      {/* nav menu */}
      <nav className="flex justify-around w-full mt-4">
        {NavIcons.map((elem) => {
          return (
            <span
              onClick={() => handleNavBtn(elem)}
              key={elem}
              className={`cursor-pointer font-semibold ${activeNav === elem ? "text-primary-text" : "text-primary-text/30"} hover:text-primary-text transition-all duration-300 ${audiowide.className} text-sm`}
            >
              {elem}
            </span>
          );
        })}
      </nav>

      {/* Pages Section */}
      <section className="w-full mt-6">
        {/* home section */}

        {activeNav === "Home" && <HomeSection />}

        {/* Projects section */}

        {activeNav === "Projects" && <ProjectsSection />}

        {/* Tools section */}

        {activeNav === "Tools" && <ToolsSection />}

        {/* contact section */}

        {activeNav === "Contact" && <ContactSection />}

        {/* Testimonials section */}

        {activeNav === "Testimonials" && <TestimonialsSection />}
      </section>
    </div>
  );
};
