import Link from "next/link";

export default function Nav() {
  return (
    <nav className="top-0 left-0 w-full z-50 flex justify-around items-center p-4">
      <Link href="/">HOME</Link>
      <Link href="/store">STORE</Link>
      <Link href="/cuphead-verse">CUPHEAD-VERSE</Link>
      <Link href="/behind-the-scenes">BEHIND THE SCENES</Link>
    </nav>
  );
}
