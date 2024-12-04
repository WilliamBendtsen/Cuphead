import cupheadMugmanImage from "../../public/img/cuphead-mugman-background.png";
import Image from "next/image";

export default function CupheadMugmanImage() {
    return (
        <div className="relative flex justify-center items-center h-full">
            <Image
             src={cupheadMugmanImage} alt="Cuphead and Mugman" width={400} height={400} 
             className="w-full h-auto"
             />
             <p className="absolute w-1/2 text-4xl text-white bg-green-950 bg-opacity-30 p-5 rounded-3xl top-50 right-12">Cuphead and Mugman are two adventurous brothers from
              the whimsical world of the Cuphead-verse, known for their contrasting personalities—Cuphead, the impulsive risk-taker, and Mugman,
               the cautious voice of reason. Together, they reside on Inkwell Isle under Elder Kettle's care and embark on a high-stakes journey to repay a 
               debt to the Devil, battling challenging foes and showcasing themes of teamwork, bravery, and brotherhood.</p>
        </div>
    )
}