import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";
import { VerificationWrapperCloud } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Priyanshu Agrawal | Full Stack Web Developer",
  description:
    "Priyanshu Agrawal — Full Stack Web Developer specializing in React, Next.js, and the MERN stack.",
  icons: {
    icon: "/meta_icon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <VerificationWrapperCloud>
            {children}
          </VerificationWrapperCloud>
        </ThemeProvider>
      </body>
    </html>
  );
}
