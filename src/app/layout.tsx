import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todi & Partners Ltd – Medical Consultancy & Equipment Supply",
  description:
    "Delivering precision, authority, and reliability to healthcare institutions through top-tier equipment and expert advisory services. Headquartered in Abuja, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-brand-background text-brand-on-background antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
