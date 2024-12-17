import CupheadSheetMusic from "./components/CupheadSheetMusic";
import DlcAdvertisement from "./components/DlcAdvertisement";
import DlcTrailer from "./components/DlcTrailer";
import Awards from "./components/Awards";

export interface AcfData {
  MsChaliceTitle: string;
  MsChaliceImage: string;
  buybtn: string;
  gif: string;
}

export interface Post {
  acf: AcfData;
}

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
          gif={acf.CupheadRunningGif}
        />
        <CupheadSheetMusic
          title={acf.SheetMusicTitle}
          link={acf.SheetMusicLink}
          linkText={acf.SheetMusicLinkText}
          availableNow={acf.AvailableNow}
          image={acf.MarchingBand}
        />
        <DlcTrailer title={acf.DlcTrailerTitle} video={acf.DlcTrailerVideo} />
        <Awards
          awardsTitle={acf.awardsTitle}
          award1={acf.award1}
          award2={acf.award2}
          award3={acf.award3}
          award4={acf.award4}
          award5={acf.award5}
          award6={acf.award6}
          award7={acf.award7}
          award8={acf.award8}
        />
      </main>
    </div>
  );
}
