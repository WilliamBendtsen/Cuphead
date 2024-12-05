import BehindTheScenesVideos from "../components/BehindTheScenesVideo"
import BehindTheScenesMusic from "../components/BehindTheScenesMusic"

export default function BehindTheScenes() {
    return (
        <div className="flex items-center justify-center flex-row flex-wrap">
            <BehindTheScenesMusic />
            <BehindTheScenesVideos />
        </div>
    )
}