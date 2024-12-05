import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="flex flex-col gap-[10vh]">
        {/* DLC Advertisement Div */}
        <div className="flex flex-col items-center gap-y-[5vh] mt-[10vh]">
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
        </div>

        {/* Sheet Music Div */}
        <div className="bg-blue-400 w-full  h-[40vh] grid grid-cols-2 grid-rows-3">
          <Image
            className="col-start-2 row-start-1 row-span-3 justify-self-center items-center"
            src="/img/cuphead-marching-band.png"
            alt="Cuphead Marching Band"
            width={500}
            height={500}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center">
        {/* Logos */}
        <Image
          src="/img/footer-logos.png"
          alt="Footer Logos"
          style={{
            width: "80%",
          }}
          width={3000}
          height={3000}
        />

        {/* Footer Text */}
        <p className="font-sans text-sm max-w-[70vw] text-center m-[5vh]">
          © CUPHEAD is a trademark of StudioMDHR Entertainment Inc., all rights
          reserved. Xbox One and the Xbox logos are trademarks of the Microsoft
          group of companies and are used under license from Microsoft. Nintendo
          Switch is a trademark of Nintendo. “PlayStation Family Mark” and “PS4
          logo” are registered trademarks or trademarks of Sony Interactive
          Entertainment Inc. Steam and the Steam logo are trademarks and/or
          registered trademarks of Valve Corporation in the U.S. and/or other
          countries. The Apple logo is a trademark of Apple Inc., registered in
          the U.S. and other countries.
        </p>
      </footer>
    </>
  );
}
