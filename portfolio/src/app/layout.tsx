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
  title: "Sudeep Gupta - Portfolio",
  description: "Software Engineer Portfolio",
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
