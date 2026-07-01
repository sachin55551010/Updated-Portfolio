import Image from "next/image";
import cricket from "../../public/projects/cricket.png";
import omkar from "../../public/projects/omkar.png";
import hills from "../../public/projects/hills.png";
import expense from "../../public/projects/expense.png";
import chat from "../../public/projects/chat.png";
import emp from "../../public/projects/emp.png";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { useStateStore } from "../store/useStateStore";
export const ProjectList = () => {
  const { activeNav, setActiveNav } = useStateStore();
  return (
    <div className=" mt-4">
      {/* cricket tournament management application */}
      <div className="backdrop-blur-[.15rem] border border-primary-text/15 p-3 rounded-2xl ">
        {/* image */}
        <div>
          <Image src={cricket} alt="img" className="object-cover rounded-xl" />
        </div>

        <div>
          {/* live link and github link */}
          <div className="flex justify-between mt-4 border-t border-primary-text/15 pt-4">
            <Link
              href="https://hillscricketarena.vercel.app"
              className="text-sm flex items-center gap-1"
            >
              <h6>Open Site</h6>
              <TbExternalLink size={18} />
            </Link>
            <Link href="https://github.com/sachin55551010/Tournament_management_system_app">
              <FaGithub size={20} />
            </Link>
          </div>

          {/* name and status */}
          <div className="mt-4 flex justify-between items-center">
            <h4 className="font-bold">Hill Cricket Arena</h4>
            <div className="relative text-[.8rem] border border-green-400/40 bg-green-500/20 py-1 px-5 rounded-2xl text-green-400 overflow-hidden">
              Live
              <motion.div
                className="absolute h-10 w-3 bg-green-500/70 top-[-6]"
                initial={{ rotate: 30, x: -30 }}
                animate={{ x: 50 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Porject dexscription */}
        <p className="text-sm mt-4 text-primary-text/70">
          This SaaS platform aims to digitize and centralize local cricket
          tournaments across Himachal Pradesh and Uttarakhand by providing a
          single platform for organizers, players, teams, and fans. It solves
          the problem of fragmented tournament information by allowing users to
          discover upcoming, ongoing, and completed tournaments in one place,
          while enabling organizers to efficiently manage registrations, teams,
          fixtures, and overall tournament operations through a modern digital
          system.
        </p>

        {/* tools */}
        <div className="text-[.75rem] text-primary-text/50 flex flex-wrap mt-4 gap-2">
          <div>React.js,</div>
          <div>Tailwind CSS,</div>
          <div>Redux,</div>
          <div>RTK Query,</div>
          <div>Framer Motion,</div>
          <div>Node.js,</div>
          <div>Express.js,</div>
          <div>Google Outh,</div>
          <div>Socket.io,</div>
          <div>MongoDB,</div>
        </div>
      </div>

      {/* Omkar agro solution */}
      <div className="backdrop-blur-[.15rem] border border-primary-text/15 p-3 rounded-2xl mt-10">
        {/* image */}
        <div>
          <Image
            src={omkar}
            alt="img"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div>
          {/* live link and github link */}
          <div className="flex justify-between mt-4 border-t border-primary-text/15 pt-4">
            <Link
              href="https://omkar-agro-landscape.vercel.app"
              className="text-sm flex items-center gap-1"
            >
              <h6>Open Site</h6>
              <TbExternalLink size={18} />
            </Link>
            <Link href="https://github.com/sachin55551010/Omkar_Agro_Landscape">
              <FaGithub size={20} />
            </Link>
          </div>

          {/* name and status */}
          <div className="mt-4 flex justify-between items-center">
            <h4 className="font-bold">Omkar Agro Nursary & Landscapes</h4>
            <div className="relative text-[.8rem] border border-green-400/40 bg-green-500/20 py-1 px-5 rounded-2xl text-green-400 overflow-hidden">
              Live
              <motion.div
                className="absolute h-10 w-3 bg-green-500/70 top-[-6]"
                initial={{ rotate: 30, x: -30 }}
                animate={{ x: 50 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Porject dexscription */}
        <p className="text-sm mt-4 text-primary-text/70">
          Developed a fully responsive website for a nursery and landscaping
          business to strengthen its online presence and showcase products
          professionally. The website features a clean, user-friendly interface
          with dedicated product pages, reusable and scalable components, and is
          optimized for performance, SEO, and a seamless experience across all
          devices.
        </p>

        {/* tools */}
        <div className="text-[.75rem] text-primary-text/50 flex flex-wrap mt-4 gap-2">
          <div>React.js,</div>
          <div>Next.js,</div>
          <div>Typescript,</div>
          <div>Tailwind CSS,</div>
          <div>Framer Motion</div>
        </div>
      </div>

      {/* News Hills 24 */}
      <div className="backdrop-blur-[.15rem] border border-primary-text/15 p-3 rounded-2xl mt-10">
        {/* image */}
        <div>
          <Image
            src={hills}
            alt="img"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div>
          {/* live link and github link */}
          <div className="flex justify-between mt-4 border-t border-primary-text/15 pt-4">
            <div className="text-sm flex items-center gap-1">
              <h6>Not Live</h6>
            </div>
            <Link href="https://github.com/sachin55551010/Hills-News-24">
              <FaGithub size={20} />
            </Link>
          </div>

          {/* name and status */}
          <div className="mt-4 flex justify-between items-center">
            <h4 className="font-bold">Hills News 24</h4>
            <div className="relative text-[.8rem] border border-red-400/40 bg-red-500/20 py-1 px-5 rounded-2xl text-red-400 overflow-hidden">
              Building
              <motion.div
                className="absolute h-10 w-3 bg-red-500/70 top-[-6]"
                initial={{ rotate: 30, x: -30 }}
                animate={{ x: 80 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Porject dexscription */}
        <p className="text-sm mt-4 text-primary-text/70">
          Hills News 24 is a responsive news platform that displays Facebook
          page posts using the Facebook Graph API. To ensure data reliability,
          news is stored in MongoDB and images are backed up on Cloudinary,
          keeping content available even if the API or image links fail. The
          platform also enables businesses to promote their services through
          advertisements while increasing the news channel&apos;s online
          visibility and reach.
        </p>

        {/* tools */}
        <div className="text-[.75rem] text-primary-text/50 flex flex-wrap mt-4 gap-2">
          <div>React.js,</div>
          <div>Javascript,</div>
          <div>Tailwind CSS,</div>
          <div>Framer Motion,</div>
          <div>Node.js,</div>
          <div>Express.js,</div>
          <div>MongoDB,</div>
          <div>Facebook Graph API</div>
        </div>
      </div>

      {/* showing this section all projects */}
      {activeNav === "Projects" && (
        <>
          {/* expense tracking app */}
          <div className="backdrop-blur-[.15rem] border border-primary-text/15 p-3 rounded-2xl mt-10">
            {/* image */}
            <div>
              <Image
                src={expense}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div>
              {/* live link and github link */}
              <div className="flex justify-between mt-4 border-t border-primary-text/15 pt-4">
                <Link
                  href="https://expense-tracker-app-topaz.vercel.app"
                  className="text-sm flex items-center gap-1"
                >
                  <h6>Open Site</h6>
                  <TbExternalLink size={18} />
                </Link>
                <Link href="https://github.com/sachin55551010/Expense_Tracker_App">
                  <FaGithub size={20} />
                </Link>
              </div>

              {/* name and status */}
              <div className="mt-4 flex justify-between items-center">
                <h4 className="font-bold">Expense Tracker</h4>
                <div className="relative text-[.8rem] border border-green-400/40 bg-green-500/20 py-1 px-5 rounded-2xl text-green-400 overflow-hidden">
                  Live
                  <motion.div
                    className="absolute h-10 w-3 bg-green-500/70 top-[-6]"
                    initial={{ rotate: 30, x: -30 }}
                    animate={{ x: 50 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Porject dexscription */}
            <p className="text-sm mt-4 text-primary-text/70">
              A full-stack personal finance management application that helps
              users efficiently track their monthly income and expenses. It
              features an interactive dashboard displaying total income,
              expenses, and savings, along with monthly and yearly analytics
              through dynamic charts for better financial insights. Built with
              Next.js, Node.js, Express.js, PostgreSQL, and Prisma ORM, the
              application uses JWT authentication to provide secure user access
              while ensuring reliable and efficient data management.
            </p>

            {/* tools */}
            <div className="text-[.8rem] text-primary-text/50 flex flex-wrap mt-4 gap-2">
              <div>Next.js,</div>
              <div>Typescript,</div>
              <div>Tailwind CSS,</div>
              <div>Framer Motion,</div>
              <div>Zustand,</div>
              <div>Node.js,</div>
              <div>Express.js,</div>
              <div>PostgreSQL,</div>
              <div>Prisma</div>
            </div>
          </div>

          {/* Employee Management system */}
          <div className="backdrop-blur-[.15rem] border border-primary-text/15 p-3 rounded-2xl mt-10">
            {/* image */}
            <div>
              <Image
                src={emp}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div>
              {/* live link and github link */}
              <div className="flex justify-between mt-4 border-t border-primary-text/15 pt-4">
                <Link
                  href="https://expense-tracker-app-topaz.vercel.app"
                  className="text-sm flex items-center gap-1"
                >
                  <h6>Open Site</h6>
                  <TbExternalLink size={18} />
                </Link>
                <Link href="https://github.com/sachin55551010/Expense_Tracker_App">
                  <FaGithub size={20} />
                </Link>
              </div>

              {/* name and status */}
              <div className="mt-4 flex justify-between items-center">
                <h4 className="font-bold">Employee Task Management</h4>
                <div className="relative text-[.8rem] border border-green-400/40 bg-green-500/20 py-1 px-5 rounded-2xl text-green-400 overflow-hidden">
                  Live
                  <motion.div
                    className="absolute h-10 w-3 bg-green-500/70 top-[-6]"
                    initial={{ rotate: 30, x: -30 }}
                    animate={{ x: 50 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Porject dexscription */}
            <p className="text-sm mt-4 text-primary-text/70">
              A real-time task management application that enables
              administrators to assign, edit, prioritize, and track employee
              tasks. Employees can accept or reject assigned tasks, update their
              progress, and mark tasks as completed or pending. Built with
              React.js, Node.js, Express.js, MongoDB, and Socket.IO, the system
              provides instant live updates along with powerful search and
              filtering for efficient task management.
            </p>

            {/* tools */}
            <div className="text-[.75rem] text-primary-text/50 flex flex-wrap mt-4 gap-2">
              <div>React.js,</div>
              <div>Javascript,</div>
              <div>Tailwind CSS,</div>
              <div>Redux Toolkit,</div>
              <div>RTK Query,</div>
              <div>Framer Motion,</div>
              <div>Node.js,</div>
              <div>Express.js,</div>
              <div>MongoDB,</div>
            </div>
          </div>

          {/* chat app */}
          <div className="backdrop-blur-[.15rem] border border-primary-text/15 p-3 rounded-2xl mt-10">
            {/* image */}
            <div>
              <Image
                src={chat}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div>
              {/* live link and github link */}
              <div className="flex justify-between mt-4 border-t border-primary-text/15 pt-4">
                <Link
                  href="https://chat-app-three-chi.vercel.app/"
                  className="text-sm flex items-center gap-1"
                >
                  <h6>Open Site</h6>
                  <TbExternalLink size={18} />
                </Link>
                <Link href="https://github.com/sachin55551010/Chat_App">
                  <FaGithub size={20} />
                </Link>
              </div>

              {/* name and status */}
              <div className="mt-4 flex justify-between items-center">
                <h4 className="font-bold">Chat App</h4>
                <div className="relative text-[.8rem] border border-green-400/40 bg-green-500/20 py-1 px-5 rounded-2xl text-green-400 overflow-hidden">
                  Live
                  <motion.div
                    className="absolute h-10 w-3 bg-green-500/70 top-[-6]"
                    initial={{ rotate: 30, x: -30 }}
                    animate={{ x: 50 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Porject dexscription */}
            <p className="text-sm mt-4 text-primary-text/70">
              Developed a secure real-time messaging application where users can
              register, log in, and chat instantly with each other. Integrated
              Socket.IO for live message delivery and Cloudinary for seamless
              image sharing, while using JWT authentication to ensure secure
              user access and session management.
            </p>

            {/* tools */}
            <div className="text-[.75rem] text-primary-text/50 flex flex-wrap mt-4 gap-2">
              <div>React.js,</div>
              <div>Javascript,</div>
              <div>Tailwind CSS,</div>
              <div>Redux Toolkit,</div>
              <div>RTK Query,</div>
              <div>Framer Motion,</div>
              <div>Node.js,</div>
              <div>Express.js,</div>
              <div>MongoDB,</div>
              <div>Socket.io,</div>
            </div>
          </div>
        </>
      )}

      {/* sall the project button */}

      {activeNav !== "Projects" && (
        <div className="w-full flex items-center justify-center mt-8">
          <button
            onClick={() => setActiveNav("Projects")}
            className="border border-primary-text/15 px-4 py-2 rounded-lg"
          >
            See All Projects
          </button>
        </div>
      )}
    </div>
  );
};
