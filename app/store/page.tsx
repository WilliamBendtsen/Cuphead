import Image from "next/image";
import Link from "next/link";

export default function Store() {
  return (
    <div className="h-screen relative">
      <div className="relative h-full flex justify-center items-end">
        {/* Porkrind Shop Background Image */}
        <Image
          className="relative z-0"
          src="/img/porkrind-background.png"
          alt="Porkrind Shop Background"
          layout="fill"
          objectFit="cover"
        />

        {/* Porkrind Shop Table */}
        <Image
          className="relative z-30"
          src="/img/porkrind-table.png"
          alt="Porkrind Shop Table"
          width={1200}
          height={200}
        />

        {/* Porkrind Character Model */}
        <Image
          className="absolute bottom-72 pb-5 right-48 z-40"
          src="/img/porkrind.png"
          alt="Porkrind"
          width={400}
          height={400}
        />

        {/* Mugman Marching Character Model +  Sheet Music Popup */}
        <div className="group">
          <Image
            className="absolute bottom-14 left-56 z-10 transition-all group-hover:z-20"
            src="/img/porkrind-sheet-music-picture.png"
            alt="Sheet Music Picture"
            width={500}
            height={400}
          />

          <Link
            href="https://www.nintendo.com/us/store/products/cuphead-and-the-delicious-last-course-switch/"
            className="group"
          >
            <Image
              className="absolute bottom-72 pb-1 z-40 group-hover:scale-110 hover:transition-all duration-500"
              style={{ left: "calc(675px)" }}
              src="/img/mugman-marching.png"
              alt="Mugman Marching"
              width={200}
              height={200}
            />
          </Link>
        </div>

        {/* Ms. Chalice Character Model +  DLC Popup */}
        <div className="group">
          <Image
            className="absolute bottom-14 left-56 z-10 transition-all group-hover:z-20"
            src="/img/porkrind-dlc-picture.png"
            alt="DLC Picture"
            width={500}
            height={400}
          />

          <Link
            href="https://www.nintendo.com/us/store/products/cuphead-and-the-delicious-last-course-switch/"
            className="group"
          >
            <Image
              className="absolute bottom-72 pb-5 left-60 z-40 group-hover:scale-110 hover:transition-all duration-500"
              style={{ left: "calc(500px)" }}
              src="/img/ms-chalice.png"
              alt="Ms. Chalice"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Cuphead & Mugman Character Models + Main Game Popup */}
        <div className="group">
          <Image
            className="absolute bottom-14 left-56 z-10 transition-all group-hover:z-20"
            src="/img/porkrind-main-game-picture.png"
            alt="Main Game Picture"
            width={500}
            height={400}
          />
          <Link
            href="https://www.nintendo.com/us/store/products/cuphead-switch/"
            className="group"
          >
            <Image
              className="absolute bottom-72 pb-5 left-60 z-40 group-hover:scale-110 hover:transition-transform duration-500  hover:animate-slideup"
              src="/img/cuphead-&-mugman.png"
              alt="Cuphead & Mugman"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
