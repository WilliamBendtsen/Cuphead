import CupheadSheetMusic from "./components/CupheadSheetMusic";
import DlcAdvertisement from "./components/DlcAdvertisement";
import DlcTrailer from "./components/DlcTrailer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10vh]">
      <main className="flex flex-col gap-[10vh]">
        <DlcAdvertisement />
        <CupheadSheetMusic />
        <DlcTrailer />
        <Footer />
      </main>
    </div>
  );
}
