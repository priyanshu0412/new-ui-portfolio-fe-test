import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { VerificationWrapperCloud } from "@/components";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Priyanshu Agrawal | Full Stack Developer",
  description: "Portfolio of Priyanshu Agrawal",
  icons: {
    icon: "/meta_icon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <VerificationWrapperCloud>{children}</VerificationWrapperCloud>
        </ThemeProvider>
      </body>
    </html>
  );
}
