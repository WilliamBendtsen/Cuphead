import Image from "next/image";

export default function Awards() {
  return (
    <section className=" bg-yellow-400 flex flex-col items-center gap-[5vh] pt-[3%] pb-[3%] w-[100vw] md:w-">
      <Image
        className="ml-[5vw]"
        src={}
        alt="Awards Title"
        width={200}
        height={0}
      />

      <div className="flex w-full justify-center gap-[5vw]">
        <Image
          className="mr-[3%]"
          src={}
          alt="Annie Awards"
          width={500}
          height={0}
        />

        <Image
          className="ml-[-5%]"
          src={}
          alt="The Game Awards"
          width={550}
          height={0}
        />

        <Image src={} alt="Bafta Winner" width={350} height={0} />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image src={} alt="Dice Awards" width={800} height={0} />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image
          src={}
          alt="Game Developers Choice Awards"
          width={350}
          height={0}
        />

        <Image
          className="mr-[-4%]"
          src={}
          alt="SXSW Gaming Award"
          width={550}
          height={0}
        />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image src={} alt="Steam Awards" width={400} height={0} />

        <Image src={} alt="The Webby Awards" width={450} height={0} />
      </div>
    </section>
  );
}
