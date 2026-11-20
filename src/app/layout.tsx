import type { Metadata } from "next";
import { Geist_Mono, Radio_Canada_Big, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const radioCanada = Radio_Canada_Big({
  variable: "--font-radio-canada",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aetherfield | Sustainability insights, built for business",
  description:
    "Track impact, reduce emissions, and accelerate progress with clarity and confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSerif.variable} ${radioCanada.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
