import Image from "next/image";
import Link from "next/link";

interface DlcAdvertisementProps {
  title: string;
  image: string;
  buttonText: string;
  gif: string;
}

export default function DlcAdvertisement({
  title,
  image,
  buttonText,
  gif,
}: DlcAdvertisementProps) {
  return (
    <section className="flex flex-col items-center gap-y-[2vh] mt-[10vh]">
      {/* Title Text */}
      <h1 className="text-4xl text-center font-cuphead-vogue-extra-bold">
        {title}
      </h1>

      {/* Image */}
      <Image src={image} alt="Ms Chalice DLC Poster" height={400} width={400} />

      {/* Buy Now Button */}
      <div className="flex flex-col items-center">
        <Image src={gif} alt="Cuphead Running" height={80} width={80} />
        <Link
          href="/404"
          className="w-[10vw] h-[5vh] bg-purple-800 hover:bg-purple-950 text-white font-extrabold rounded inline-flex items-center justify-center"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
