import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuphead Fanmade School project",
  description:
    "This is a school exam project about Cuphead. We hold no rights to Cuphead; this is purely forS educational purposes and developer practice.",
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
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
