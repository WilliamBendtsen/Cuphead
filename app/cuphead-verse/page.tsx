import Baroness from "../components/Baroness"
import CupheadMugmanImage from "../components/CupheadMugman"
import InkWellIsle from "../components/Inkwell"
import Footer from "../components/Footer"


export default function CupheadVerse() {
    return (
        <main>
            <h1 className="text-white text-center my-9 p-9 text-4xl sm:text-5xl lg:text-7xl">Welcome to the Cupverse!</h1>
            <h2 className="text-white text-center my-9 p-9 text-3xl sm:text-4xl lg:text-5xl">Evil Baroness</h2>
            <Baroness />
            <h2 className="text-white text-center my-9 p-9 text-3xl sm:text-4xl lg:text-5xl">Cuphead and Mugman</h2>
            <CupheadMugmanImage />
            <h2 className="text-white text-center my-9 p-9 text-3xl sm:text-4xl lg:text-5xl">Inkwell Isle</h2>
            <InkWellIsle />
            <Footer />
        </main>
    )
}