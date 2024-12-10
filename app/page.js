import CupheadSheetMusic from "./components/CupheadSheetMusic";
import DlcAdvertisement from "./components/DlcAdvertisement";
import DlcTrailer from "./components/DlcTrailer";
import Awards from "./components/Awards";

export default async function Home() {
  const response = await fetch(
    "http://cuphead.williamskodeeventyr.dk/wp-json/wp/v2/frontpage?acf_format=standard"
  );
  const posts = await response.json();
  console.log(posts);

  const post = posts[0];
  const acf = post.acf;

  return (
    <div className="flex flex-col items-center gap-[10vh]">
      <main className="flex flex-col gap-[10vh]">
        <DlcAdvertisement
          title={acf.MsChaliceTitle}
          image={acf.MsChaliceImage}
          buttonText={acf.buybtn}
        />
        <CupheadSheetMusic
          title={acf.SheetMusicTitle}
          link={acf.SheetMusicLink}
          availableNow={acf.AvailableNow}
          image={acf.MarchingBand}
        />
        <DlcTrailer />
        <Awards />
      </main>
    </div>
  );
}
