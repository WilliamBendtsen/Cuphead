import Image from "next/image";
import Link from "next/link";

interface DlcAdvertisementProps {
  title: string;
  image: string;
  buttonText: string;
}

export default function DlcAdvertisement({
  title,
  image,
  buttonText,
}: DlcAdvertisementProps) {
  return (
    <section className="flex flex-col items-center gap-y-[5vh] mt-[10vh]">
      {/* Title Text */}
      <h1 className="text-4xl text-center font-cuphead-vogue-extra-bold">
        {title}
      </h1>

      {/* Image */}
      <Image src={image} alt="Ms Chalice DLC Poster" height={400} width={400} />

      {/* Buy Now Button */}
      <Link
        target="_blank"
        href="https://www.nintendo.com/us/store/products/cuphead-and-the-delicious-last-course-switch/"
        className="w-[10vw] h-[5vh] bg-purple-800 hover:bg-purple-950 text-white font-extrabold rounded inline-flex items-center justify-center"
      >
        {buttonText}
      </Link>
    </section>
  );
}
