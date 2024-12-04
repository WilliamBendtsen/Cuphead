import Image from "next/image";
import BaronessImage from "../../public/img/baroness-image.png"

export default function Baroness() {
    return (
        <div className="flex justify-center items-center h-full">
            <Image
             src={BaronessImage} alt="Evil Baroness" width={400} height={400} 
             className="w-full h-auto"
             />
             <p className="text-2xl text-white my-9 p-9">The baroness is an evil Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cumque natus! Dolor adipisci quo illo amet molestiae, nemo consequatur atque. Architecto explicabo enim quia nihil quibusdam maiores cupiditate illo at.</p>
        </div>
    )
}