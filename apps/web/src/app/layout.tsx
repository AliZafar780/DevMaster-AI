import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMaster AI - Ultimate Developer Productivity Platform",
  description: "All-in-one platform for developers to track progress, manage notes, visualize data, store assets, and leverage AI for productivity. Free and open-source.",
  keywords: ["developer tools", "productivity", "project management", "AI", "kanban", "notes", "analytics"],
  authors: [{ name: "Ali Zafar" }],
  openGraph: {
    title: "DevMaster AI",
    description: "Ultimate Developer Productivity Platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
