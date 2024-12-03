"use client";

import Nav from "../components/Nav";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Store() {
  const pathname = usePathname();

  const navTheme =
    pathname === "/store"
      ? "bg-transparent text-white"
      : "bg-zinc-900 text-black";

  return (
    <div className="bg-zinc-900 h-screen">
      <Nav theme={navTheme} />
      <p className="text-white">Here you go!</p>
      <div className="relative">
        <Image
          src="/img/porkrind-background.png"
          alt="Porkrind Shop Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
