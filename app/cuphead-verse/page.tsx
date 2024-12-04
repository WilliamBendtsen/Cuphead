import Baroness from "../components/Baroness"
import CupheadMugmanImage from "../components/CupheadMugman"


export default function CupheadVerse() {
    return (
        <main>
            <h1 className="text-7xl text-white text-center my-9 p-9">Welcome to the Cupverse!</h1>
            <h2 className="text-5xl text-white text-center my-9 p-9">Evil Baroness</h2>
            <Baroness />
            <h2 className="text-5xl text-white text-center my-9 p-9">Cuphead and Mugman</h2>
            <CupheadMugmanImage />
        </main>
    )
}