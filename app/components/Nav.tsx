import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <Link href="/">HOME</Link>
            <Link href="/store">STORE</Link>
            <Link href="/cuphead-verse">CUPHEAD-VERSE</Link>
            <Link href="/behind-the-scenes">BEHIND THE SCENES</Link>
        </nav>
    )
}