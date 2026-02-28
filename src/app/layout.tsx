import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hu Xinting | AI Product Manager",
  description: "I build AI products that actually work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-white text-black min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
