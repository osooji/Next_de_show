import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/header";
// import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "TRPG charaseet",
  description: "create charaseet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="w-screen h-screen text-black">
        {children}
      </body>
    </html>
  );
}
