import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import "./portfolio.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mercy Elliot (Dela) — Content Creator & Mobile Videographer",
  description:
    "Portfolio — content creation, mobile videography, and social media management. Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebasNeue.variable} ${playfair.variable}`}
    >
      <body className={dmSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
