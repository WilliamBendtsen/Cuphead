import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="top-0 left-0 w-full flex justify-around items-center p-4">
      <Link href="/">
        <Image
          src="/img/cuphead-logo.png"
          alt="Cuphead Logo"
          width={200}
          height={200}
        />
      </Link>
      <Link className="text-2xl font-extrabold" href="/store">
        STORE
      </Link>
      <Link className="text-2xl font-extrabold" href="/cuphead-verse">
        CUPHEAD-VERSE
      </Link>
      <Link className="text-2xl font-extrabold" href="/behind-the-scenes">
        BEHIND THE SCENES
      </Link>
    </nav>
  );
}
