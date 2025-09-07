import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
// import Header from "@/components/header";
// import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "TRPG SWbasic",
  description: "ソードワールドのシステムを作ってみました。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="w-screen h-screen text-black bg-cyan-50 border-amber-400 text-medium">
        <Header />
        <div className="h-[calc(100vh-175px)] mt-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
