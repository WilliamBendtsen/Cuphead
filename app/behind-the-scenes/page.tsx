import BehindTheScenesVideos from "../components/BehindTheScenesVideo"
import BehindTheScenesMusic from "../components/BehindTheScenesMusic"
import CupheadTrailer from "../components/CupheadTrailer"
import CupheadDlcTrailer from "../components/CupheadDlcTrailer"

export default function BehindTheScenes() {
    return (
        <div className="flex items-center justify-center flex-wrap sm:flex-col xl:flex-row">
            <BehindTheScenesMusic />
            <BehindTheScenesVideos />
            <CupheadTrailer />
            <CupheadDlcTrailer />
            <h1>This is a branch test</h1>
        </div>
    )
}