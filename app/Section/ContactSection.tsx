"use client";
import { useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import emailjs from "@emailjs/browser";
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
    } catch (error) {
      console.log("send email error : ", error);
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
    <div className="border rounded-2xl border-primary-text/15 backdrop-blur-[.15rem] p-4">
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
    </div>
  );
};
