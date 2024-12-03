import Image from "next/image";
import BaronessImage from "../../public/img/baroness-image.png"

export default function Baroness() {
    return (
        <div className="flex justify-center items-center h-full">
            <Image
             src={BaronessImage} alt="Evil Baroness" width={400} height={400} 
             className="w-full h-auto"
             />
        </div>
    )
}