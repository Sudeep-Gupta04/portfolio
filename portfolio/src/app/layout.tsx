import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import NavigationPill from "@/components/NavigationPill";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudeep Gupta - Software Engineer Portfolio",
  description:
    "Full-stack developer & AI researcher building practical software across systems, integrations, and research-led security. Based in Gandhinagar, Gujarat.",
  keywords: [
    "Sudeep Gupta",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Spring Boot",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "Sudeep Gupta" }],
  openGraph: {
    title: "Sudeep Gupta - Software Engineer Portfolio",
    description:
      "Full-stack developer & AI researcher building practical software.",
    url: "https://sudeep-gupta04-portfolio.vercel.app",
    siteName: "Sudeep Gupta Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 1067,
        alt: "Sudeep Gupta - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudeep Gupta - Software Engineer Portfolio",
    description:
      "Full-stack developer & AI researcher building practical software.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body
        className="overflow-x-hidden bg-grid-pattern selection:text-[#1e1e1e]"
        style={{
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          backgroundColor: "var(--bg-base)",
          color: "var(--text-primary)",
        }}
      >
        <ThemeProvider>
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
          <NavigationPill />
        </ThemeProvider>
      </body>
    </html>
  );
}
