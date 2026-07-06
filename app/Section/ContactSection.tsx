"use client";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { audiowide } from "../constants/custom_font";
import { toast } from "sonner";
import { motion } from "motion/react";
import Link from "next/link";
export const ContactSection = () => {
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (): Promise<void> => {
    try {
      setIsEmailSending(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        messageData,
        process.env.NEXT_PUBLIC_KEY as string,
      );
      toast.success("mail send Successfully");
    } catch (error) {
      console.log("send email error : ", error);
      // toast.error(error.)
    } finally {
      setIsEmailSending(false);
      setMessageData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
  };
  return (
    <>
      {/* heading */}
      <div className="w-fit">
        <h4 className={`font-bold text-xl ${audiowide.className}`}>Contact</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 125">
          <path
            d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
            fill="var(--decoration)"
          ></path>
        </svg>
      </div>

      {/* contact data */}
      <div className="border rounded-2xl border-primary-text/15 backdrop-blur-[.15rem] p-4 mt-8">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          {/* form data */}

          {/* name input */}
          <input
            value={messageData.name}
            onChange={(e) =>
              setMessageData({ ...messageData, name: e.target.value })
            }
            required
            type="text"
            placeholder="Enter Name"
            className="bg-primary-text/5 h-10 rounded-lg pl-2 outline-0"
          />

          {/* email input */}
          <input
            value={messageData.email}
            required
            onChange={(e) =>
              setMessageData({ ...messageData, email: e.target.value })
            }
            type="email"
            placeholder="Enter Email"
            className="bg-primary-text/5 h-10 rounded-lg pl-2 outline-0"
          />

          {/* message input  */}
          <textarea
            value={messageData.message}
            required
            onChange={(e) =>
              setMessageData({ ...messageData, message: e.target.value })
            }
            className="bg-primary-text/5 rounded-lg p-2 h-40 outline-0"
            placeholder="Message"
          ></textarea>

          <button
            className={`bg-primary-text/5 flex justify-center items-center py-2 rounded-lg gap-2 ${isEmailSending ? "cursor-not-allowed" : "cursor-pointer"} hover:bg-primary-text/15`}
            disabled={isEmailSending}
          >
            <div>{isEmailSending ? "Sending" : "Send"}</div>

            {isEmailSending && (
              <div className="animate-spin">
                <PiSpinnerBold size={24} />
              </div>
            )}
          </button>
        </form>

        {/* icons */}
        <div className="p-2 mt-4">
          <h6 className="border-b w-fit text-primary-text/70 py-2 font-bold border-primary-text/40">
            Let&apos;s Connect{" "}
          </h6>

          <div className="flex gap-4 mt-4">
            {/* linkedin */}
            <Link href="https://www.linkedin.com/in/sachin-bansal-69138b286/">
              <motion.div
                className="relative p-2 rounded-full bg-primary-text/80 overflow-hidden"
                initial="hidden"
                whileHover="visible"
              >
                <motion.div
                  className="h-15 w-15 bg-[#0A66C2] absolute top-[.35rem] left-[-7]"
                  variants={{
                    hidden: { y: 40 },
                    visible: { y: -12 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                ></motion.div>
                <div className="relative z-50">
                  <FaLinkedinIn size={20} className="text-icon-bg" />
                </div>
              </motion.div>
            </Link>

            {/* twitter */}
            <Link href="https://x.com/sachinkhatri007">
              <motion.div
                className="relative p-2 rounded-full bg-primary-text/80 overflow-hidden"
                initial="hidden"
                whileHover="visible"
              >
                <motion.div
                  className="h-15 w-15 bg-[#1DA1F2] absolute top-[.35rem] left-[-7]"
                  variants={{
                    hidden: { y: 40 },
                    visible: { y: -12 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                ></motion.div>
                <div className="relative z-50">
                  <RiTwitterXLine size={20} className="text-icon-bg" />
                </div>
              </motion.div>
            </Link>

            {/* github */}
            <Link href="https://github.com/sachin55551010">
              <motion.div
                className="relative p-2 rounded-full bg-primary-text/80 overflow-hidden"
                initial="hidden"
                whileHover="visible"
              >
                <motion.div
                  className="h-15 w-15 bg-[#0F766E] absolute top-[.35rem] left-[-7]"
                  variants={{
                    hidden: { y: 40 },
                    visible: { y: -12 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                ></motion.div>
                <div className="relative z-50">
                  <FaGithub size={20} className="text-icon-bg" />
                </div>
              </motion.div>
            </Link>

            {/* email */}

            <a href="mailto:sachin.dev1309@gmail.com">
              <motion.div
                className="relative p-2 rounded-full bg-primary-text/80 overflow-hidden"
                initial="hidden"
                whileHover="visible"
              >
                <motion.div
                  className="h-15 w-15 bg-[#EA4335] absolute top-[.35rem] left-[-7]"
                  variants={{
                    hidden: { y: 40 },
                    visible: { y: -12 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                ></motion.div>
                <div className="relative z-50">
                  <BiLogoGmail size={20} className="text-icon-bg" />
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
