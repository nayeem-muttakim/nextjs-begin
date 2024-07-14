import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Container} from "@/components/bootstrap";
import NavBar from "./NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Started",
  description: "Tutorial By Coding in Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
