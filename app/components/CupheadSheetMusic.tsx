import Image from "next/image";
import Link from "next/link";

interface CupheadSheetMusicProps {
  title: string;
  link: string;
  availableNow: string;
  image: string;
  linkText: string;
}

export default function CupheadSheetMusic({
  title,
  link,
  availableNow,
  image,
  linkText,
}: CupheadSheetMusicProps) {
  return (
    <section className="bg-blue-300 w-full  h-[40vh] grid grid-cols-2 grid-rows-3">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center row-start-1 col-start-1 self-center">
        {title}
      </h2>

      {/* Website Link */}
      <Link
        className="w-fit justify-self-center text-center text-6xl font-extrabold text-purple-800 hover:text-purple-950 col-start-1 row-start-2 self-center"
        href={link}
        target="_blank"
      >
        <p>{linkText}</p>
      </Link>

      {/* Available Now */}
      <p className="text-center text-3xl font-extrabold  col-start-1 row-start-3 self-center">
        {availableNow}
      </p>

      {/* Cuphead Marching Band Image */}
      <Image
        className="col-start-2 row-start-1 row-span-3 justify-self-end self-center mr-[5vw]"
        src={image}
        alt="Cuphead Marching Band"
        width={600}
        height={600}
      />
    </section>
  );
}
