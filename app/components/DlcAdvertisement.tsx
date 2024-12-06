import Image from "next/image";
import Link from "next/link";

export default function DlcAdvertisement() {
  return (
    <section className="flex flex-col items-center gap-y-[5vh] mt-[10vh]">
      {/* Title Text */}
      <h1 className="text-4xl text-center font-extrabold">
        Meet Ms Chalice in the new DLC!
      </h1>

      {/* Image */}
      <Image
        src="/img/ms-chalice-dlc-poster.png"
        alt="Ms Chalice DLC Poster"
        height={400}
        width={400}
      />

      {/* Buy Now Button */}
      <Link
        target="_blank"
        href="https://www.nintendo.com/us/store/products/cuphead-and-the-delicious-last-course-switch/"
        className="w-[10vw] h-[5vh] bg-purple-800 hover:bg-purple-950 text-white font-extrabold rounded inline-flex items-center justify-center"
      >
        BUY NOW
      </Link>
    </section>
  );
}
