import "@/styles/global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Header, MenuItem } from "@/components/TopNav/Header";

import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
 metadataBase: new URL(baseUrl),
 title: {
  default: "Next.js Portfolio Starter",
  template: "%s | Next.js Portfolio Starter",
 },
 description: "This is my portfolio.",
 openGraph: {
  title: "My Portfolio",
  description: "This is my portfolio.",
  url: baseUrl,
  siteName: "My Portfolio",
  locale: "en_US",
  type: "website",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

const geistSans = localFont({
 src: "./fonts/GeistVF.woff",
 variable: "--font-geist-sans",
 weight: "100 900",
});
const geistMono = localFont({
 src: "./fonts/GeistMonoVF.woff",
 variable: "--font-geist-mono",
 weight: "100 900",
});

// menu list
const menuList: MenuItem[] = [
 { label: "Home", link: "/", active: true },
 { label: "About", link: "/about", active: false },
 { label: "Contact", link: "/contact", active: false },
];

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange
    >
     <main className="flex flex-col w-full">
      <div>
       <Header menuList={menuList} />
      </div>
      {children}
      <Footer />
     </main>
    </ThemeProvider>
   </body>
  </html>
 );
}
