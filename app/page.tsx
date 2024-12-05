import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-12 grid-rows-12 h-screen">
        {/* DLC Title Text */}
        <h1 className="text-4xl col-start-5 col-span-4 row-start-3 justify-self-center font-extrabold">
          Meet Ms Chalice in the new DLC!
        </h1>
        {/* DLC Image */}
        <Image
          className="col-start-5 col-span-4 row-start-4 row-span-7 justify-self-center"
          src="/img/ms-chalice-dlc-poster.png"
          alt="Ms Chalice DLC Poster"
          height={400}
          width={400}
        />

        {/* Buy Now Button */}
        <button className="w-3/6 h-2/5 bg-purple-800 hover:bg-purple-950  text-white font-extrabold rounded col-start-6 col-span-2 row-start-8 row-span-2 self-center  justify-self-center">
          BUY NOW
        </button>

        {/* Sheet Music Div */}
        <div></div>
      </main>
    </div>
  );
}
