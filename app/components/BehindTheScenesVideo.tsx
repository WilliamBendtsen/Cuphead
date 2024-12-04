
import MakingOfMusic from "./videos/MakingOfMusic";

export default function BehindTheScenesVideos() {
    return (
        <div className="flex items-center justify-center mx-auto w-3/4 flex-row bg-stone-500 bg-opacity-30 p-6 m-2 rounded-2xl">
            <div>
            <h1 className="text-2xl text-white text-center py-5">The making of Cuphead tunes!</h1> 
            <MakingOfMusic />
            </div>
            <p className="text-lg text-white">Inkwell Isle is the vibrant setting of the Cuphead-verse, a whimsical world filled with quirky characters, dangerous bosses, and unique locales. Divided into multiple areas, each with its own challenges, it serves as the backdrop for Cuphead and Mugman’s adventures as they battle to settle their debt to the Devil and restore peace to their colorful home.</p>
        </div>
    )
}