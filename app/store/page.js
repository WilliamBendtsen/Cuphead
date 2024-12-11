import Image from "next/image";
import Link from "next/link";

export default async function Store() {
  const response = await fetch(
    "http://cuphead.williamskodeeventyr.dk/wp-json/wp/v2/store?acf_format=standard"
  );
  const posts = await response.json();
  console.log(posts);

  const post = posts[0];
  const acf = post.acf;

  return (
    <div className="h-screen relative">
      <div className="relative h-full flex justify-center items-end">
        {/* Porkrind Shop Background Image */}
        <Image
          className="relative z-0"
          src={acf.StoreBackground}
          alt="Porkrind Shop Background"
          layout="fill"
          objectFit="cover"
        />

        {/* Porkrind Shop Table */}
        <Image
          className="absolute z-30"
          src={acf.StoreTable}
          alt="Porkrind Shop Table"
          style={{
            width: "70%",
          }}
          width={2000}
          height={2000}
        />

        {/* Porkrind Character Model */}
        <Image
          className="absolute bottom-[36.5%] right-[19%] z-40"
          src={acf.StorePorkrind}
          alt="Porkrind"
          style={{
            width: "20%",
          }}
          width={1000}
          height={1000}
        />

        {/* Mugman Marching Character Model +  Sheet Music Popup */}
        <div className="group">
          <Image
            className="absolute bottom-[7.5%] left-[20%] z-10 transition-all group-hover:z-20"
            src={acf.StoreSheetMusic}
            alt="Sheet Music Picture"
            style={{
              width: "28%",
            }}
            width={1000}
            height={1000}
          />

          <Link
            href="https://www.nintendo.com/us/store/products/cuphead-and-the-delicious-last-course-switch/"
            className="group"
          >
            <Image
              className="absolute bottom-1/3 left-[48%] z-40 group-hover:scale-110 transition-transform duration-500 ease-in-out hover:-translate-y-1/4 group-hover:drop-shadow-glow"
              src={acf.StoreMugmanMarching}
              alt="Mugman Marching"
              width={200}
              height={200}
            />
          </Link>
        </div>

        {/* Ms. Chalice Character Model +  DLC Popup */}
        <div className="group">
          <Image
            className="absolute bottom-[7.5%] left-[20%] z-10 transition-all group-hover:z-20"
            src={acf.StoreDLC}
            alt="DLC Picture"
            style={{
              width: "28%",
            }}
            width={1000}
            height={1000}
          />

          <Link
            href="https://www.nintendo.com/us/store/products/cuphead-and-the-delicious-last-course-switch/"
            className="group"
          >
            <Image
              className="absolute bottom-1/3 pb-[1%] left-[37%] z-40 group-hover:scale-110 transition-transform duration-500 ease-in-out hover:-translate-y-1/4 group-hover:drop-shadow-glow"
              src={acf.StoreMsChalice}
              alt="Ms. Chalice"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Cuphead & Mugman Character Models + Main Game Popup */}
        <div className="group">
          <Image
            className="absolute bottom-[7.5%] left-[20%] z-10 transition-all group-hover:z-20"
            src={acf.StoreMainGame}
            alt="Main Game Picture"
            style={{
              width: "28%",
            }}
            width={1000}
            height={1000}
          />
          <Link
            href="https://www.nintendo.com/us/store/products/cuphead-switch/"
            className="group"
          >
            <Image
              className="absolute bottom-1/3 pb-5 left-[20%] z-40 group-hover:scale-110 transition-transform duration-500 ease-in-out hover:-translate-y-1/4 group-hover:drop-shadow-glow"
              src={acf.StoreCupheadMugman}
              alt="Cuphead & Mugman"
              width={200}
              height={200}
            />
          </Link>
        </div>

        {/* "Choose Your Character" Image */}
        <Image
          className="absolute bottom-[7.5%] left-[20%] z-10"
          src={acf.StoreChooseCharacter}
          alt="Choose Your Character"
          style={{
            width: "28%",
          }}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
