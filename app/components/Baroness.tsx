import Image from "next/image";
import BaronessImage from "../../public/img/baroness-image.png"

export default function Baroness() {
    return (
        <div className="flex justify-center items-center h-full">
            <Image
             src={BaronessImage} alt="Evil Baroness" width={400} height={400} 
             className="w-full h-auto"
             />
             <p className="absolute w-1/2 text-4xl text-white bg-green-950 bg-opacity-30 p-5 rounded-3xl top-50 right-12">Baroness Von Bon Bon is the eccentric candy queen of Sugarland in the Cuphead-verse, 
             ruling her sugary domain with a mix of charm and menace. As a boss in the Sugarland Shimmy level, she commands a variety of candy-themed minions and uses
              her confectionery powers to challenge players, embodying both the whimsical and perilous nature of Inkwell Isle Two.</p>
        </div>
    )
}