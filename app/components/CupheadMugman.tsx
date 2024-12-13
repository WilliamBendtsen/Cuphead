import Image from "next/image";

export default function CupheadMugmanImage() {
  return (
    <div className="lg:relative sm:flex sm:flex-col justify-center items-center">
      <Image
        src="/img/cuphead-mugman-background.png"
        alt="Cuphead and Mugman"
        width={400}
        height={400}
        className="w-full h-auto"
      />
      <p className="lg:absolute mg:relative w-11/12 sm:w-3/4 lg:w-1/2 text-lg sm:text-2xl xl:text-4xl lg:text-2xl md:text-zinc-800 lg:text-white sm:bg-none lg:bg-green-950 lg:bg-opacity-30 p-5 rounded-3xl top-50 lg:top-auto lg:right-12">
        Cuphead and Mugman are two adventurous brothers from the whimsical world
        of the Cuphead-verse, known for their contrasting personalities—Cuphead,
        the impulsive risk-taker, and Mugman, the cautious voice of reason.
        Together, they reside on Inkwell Isle under Elder Kettle&apos;s care and
        embark on a high-stakes journey to repay a debt to the Devil, battling
        challenging foes and showcasing themes of teamwork, bravery, and
        brotherhood.
      </p>
    </div>
  );
}
