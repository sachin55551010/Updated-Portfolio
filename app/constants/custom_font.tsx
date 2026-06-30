import { Space_Grotesk } from "next/font/google";
import { Edu_SA_Beginner } from "next/font/google";
import { Audiowide } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const edu = Edu_SA_Beginner({
  subsets: ["latin"],
  variable: "--font-space",
});
export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});
