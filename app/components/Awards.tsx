import Image from "next/image";

interface AwardsProps {
  awardsTitle: string;
  award1: string;
  award2: string;
  award3: string;
  award4: string;
  award5: string;
  award6: string;
  award7: string;
  award8: string;
}

export default function Awards({
  awardsTitle,
  award1,
  award2,
  award3,
  award4,
  award5,
  award6,
  award7,
  award8,
}: AwardsProps) {
  return (
    <section className=" bg-yellow-400 flex flex-col items-center gap-[5vh] pt-[3%] pb-[3%] w-[100vw] md:w-">
      <Image
        className="ml-[5vw]"
        src={awardsTitle}
        alt="Awards Title"
        width={200}
        height={0}
      />

      <div className="flex w-full justify-center gap-[5vw]">
        <Image
          className="mr-[3%]"
          src={award1}
          alt="Annie Awards"
          width={500}
          height={0}
        />

        <Image
          className="ml-[-5%]"
          src={award2}
          alt="The Game Awards"
          width={550}
          height={0}
        />

        <Image src={award3} alt="Bafta Winner" width={350} height={0} />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image src={award4} alt="Dice Awards" width={800} height={0} />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image
          src={award5}
          alt="Game Developers Choice Awards"
          width={350}
          height={0}
        />

        <Image
          className="mr-[-4%]"
          src={award6}
          alt="SXSW Gaming Award"
          width={550}
          height={0}
        />
      </div>

      <div className="flex w-full justify-center gap-[15vw]">
        <Image src={award7} alt="Steam Awards" width={400} height={0} />

        <Image src={award8} alt="The Webby Awards" width={450} height={0} />
      </div>
    </section>
  );
}
