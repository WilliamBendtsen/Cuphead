import Image from "next/image";

export default function Awards() {
  return (
    <section className=" bg-yellow-400 flex flex-col items-center gap-[5vh] pt-[3%] pb-[3%] w-[100vw] md:w-">
      <Image
        className="ml-[5vw]"
        src="/img/awards.png"
        alt="Awards Title"
        width={200}
        height={0}
      />

      <div className="flex w-full justify-center gap-[5vw]">
        <Image
          className="mr-[3%]"
          src="/img/award1.png"
          alt="Annie Awards"
          width={500}
          height={0}
        />

        <Image
          className="ml-[-5%]"
          src="/img/award2.png"
          alt="The Game Awards"
          width={550}
          height={0}
        />

        <Image
          src="/img/award3.png"
          alt="Bafta Winner"
          width={350}
          height={0}
        />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image src="/img/award4.png" alt="Dice Awards" width={800} height={0} />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image
          src="/img/award5.png"
          alt="Game Developers Choice Awards"
          width={350}
          height={0}
        />

        <Image
          className="mr-[-4%]"
          src="/img/award6.png"
          alt="SXSW Gaming Award"
          width={550}
          height={0}
        />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image
          src="/img/award7.png"
          alt="Steam Awards"
          width={400}
          height={0}
        />

        <Image
          src="/img/award8.png"
          alt="The Webby Awards"
          width={450}
          height={0}
        />
      </div>
    </section>
  );
}
