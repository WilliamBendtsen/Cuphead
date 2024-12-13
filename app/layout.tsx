import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanmade School Cuphead project",
  description:
    "This is a school exam project about Cuphead. We hold no rights to Cuphead; this is purely for educational purposes and developer practice.",
  metadataBase: new URL("https://cuphead-mmd.vercel.app"),
  keywords: [
    "Cuphead",
    "fan project",
    "school project",
    "game development",
    "frontend development",
  ],
  authors: [
    { name: "Rune Gerner Søresen", url: "https://runegstudio.dk/" },
    {
      name: "William Frøjk Bendtsen",
      url: "https://portfolie.williamskodeeventyr.dk/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
