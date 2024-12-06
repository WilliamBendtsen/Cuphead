import CupheadSheetMusic from "./components/CupheadSheetMusic";
import DlcAdvertisement from "./components/DlcAdvertisement";
import DlcTrailer from "./components/DlcTrailer";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[10vh]">
      <main className="flex flex-col gap-[10vh]">
        <DlcAdvertisement />
        <CupheadSheetMusic />
        <DlcTrailer />
        <Awards />
      </main>
    </div>
  );
}
