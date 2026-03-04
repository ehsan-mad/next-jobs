import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { JobProvider } from "./context/JobContext";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickHire - Discover more than 5000+ Jobs",
  description: "Great platform for the job seeker that searching for new career heights and passionate about startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} antialiased`} suppressHydrationWarning={true}>
        <JobProvider>
          {children}
        </JobProvider>
      </body>
    </html>
  );
}

