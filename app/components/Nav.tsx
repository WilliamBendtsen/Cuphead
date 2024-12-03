import Link from "next/link";

interface NavProps {
  theme: string; // Dynamic theme prop for changing navbar styles
}

export default function Nav({ theme }: NavProps) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-around items-center p-4 ${theme}`}
    >
      <Link href="/">HOME</Link>
      <Link href="/store">STORE</Link>
      <Link href="/cuphead-verse">CUPHEAD-VERSE</Link>
      <Link href="/behind-the-scenes">BEHIND THE SCENES</Link>
    </nav>
  );
}
