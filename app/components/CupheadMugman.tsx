import cupheadMugmanImage from "../../public/img/cuphead-mugman-background.png";
import Image from "next/image";

export default function CupheadMugmanImage() {
    return (
        <div className="relative flex justify-center items-center h-full">
            <Image
             src={cupheadMugmanImage} alt="Cuphead and Mugman" width={400} height={400} 
             className="w-full h-auto"
             />
             <p className="absolute w-1/2 text-4xl text-white bg-green-950 bg-opacity-30 p-5 rounded-3xl top-50 right-12">Cuphead and mug man are Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cumque natus! Dolor adipisci quo illo amet molestiae, nemo consequatur atque. Architecto explicabo enim quia nihil quibusdam maiores cupiditate illo at.</p>
        </div>
    )
}