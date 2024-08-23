import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Veil DEV",
  description: "The Veil TEST CLIENT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className + " bg-stone-800"}>{children}</body>
    </html>
  );
}
