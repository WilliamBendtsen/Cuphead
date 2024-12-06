
import Image from "next/image";

export default function InkWellIsle() {
    return (
        <div className="relative flex flex-col lg:flex-row justify-center items-center h-full">
            <Image
             src="/img/inkwell-isle.png" alt="Cuphead and Mugman" width={400} height={400} 
             className="w-full h-auto m-2 rounded-3xl my-9"
             />
             <p className="lg:w-1/2 text-lg sm:text-2xl lg:text-2xl xl:text-4xl text-white p-5 m-2 rounded-3xl">Inkwell Isle is the vibrant setting of the Cuphead-verse, a whimsical world filled with quirky characters, dangerous bosses, and unique locales. Divided into multiple areas, each with its own challenges, it serves as the backdrop for Cuphead and Mugman’s adventures as they battle to settle their debt to the Devil and restore peace to their colorful home.</p>
        </div>
    )
}