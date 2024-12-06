import BehindTheScenesVideos from "../components/BehindTheScenesVideo"
import BehindTheScenesMusic from "../components/BehindTheScenesMusic"
import CupheadTrailer from "../components/CupheadTrailer"
import CupheadDlcTrailer from "../components/CupheadDlcTrailer"
import Footer from "../components/Footer"

export default function BehindTheScenes() {
    return (
        <>
        <div className="my-9 text-center flex items-center flex-col justify-center mx-auto w-full lg:w-1/2">
                <h1 className="text-6xl pb-3 text-zinc-800">Explore the Making of Cuphead</h1>
                <p className="text-lg text-center py-2 text-zinc-800">Discover the artistry and dedication that brought Cuphead to life. From its hand-drawn animations and captivating music to the story of its creation, explore the passion behind the scenes of this unforgettable game.</p>
        </div>
        <div className="flex items-center justify-center flex-wrap sm:flex-col xl:flex-row">
            
            <BehindTheScenesMusic />
            <BehindTheScenesVideos />
            <CupheadTrailer />
            <CupheadDlcTrailer />
        </div>
        </>
    )
}