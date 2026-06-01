import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure Cormorant Garamond - editorial luxury serif font
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Configure Plus Jakarta Sans - ultra-modern clean sans-serif font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Estate | Luxury Real Estate Portal",
  description: "Experience premium architectural masterpieces, private vertical sanctuaries, and bespoke culinary spaces. Showcase portal for the global elite.",
  keywords: ["Luxury Real Estate", "Billionaires Row Penthouse", "Palm Jumeirah Villa", "Elite Estate", "Bespoke Residences"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-matte-black text-off-white font-sans selection:bg-elite-gold selection:text-matte-black">
        {/* Transparent blur Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>
        
        {/* Premium Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}
