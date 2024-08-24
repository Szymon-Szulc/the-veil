import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Veil DEV",
  description: "The Veil TEST CLIENT",
};

export default function DashLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className + " bg-stone-800 bg-dark-forrest bg-cover bg-center"}></body>
    </html>
  );
}
