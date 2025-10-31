import { Poppins } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: "Priyanshu Agrawal | Full Stack Web Developer",
  description: "Priyanshu Agrawal — Full Stack Web Developer specializing in React, Next.js, and the MERN stack. Building fast, modern, and responsive web experiences.",
  icons: {
    icon: "/meta_icon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
