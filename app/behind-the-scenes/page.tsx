import BehindTheScenesCard from "../components/BehindTheScenesCard";

const response = await fetch(
  "http://cuphead.williamskodeeventyr.dk/wp-json/wp/v2/behindthescene?acf_format=standard"
);
const bts = await response.json();

export default function BehindTheScenes() {
  return (
    <>
      <div className="my-9 text-center flex items-center flex-col justify-center mx-auto w-full lg:w-1/2">
        <h1 className="text-6xl pb-3 text-zinc-800">
          Explore the Making of Cuphead!
        </h1>
        <p className="text-lg text-center py-2 text-zinc-800">
          Discover the artistry and dedication that brought Cuphead to life.
          From its hand-drawn animations and captivating music to the story of
          its creation, explore the passion behind the scenes of this
          unforgettable game.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap sm:flex-col xl:flex-row p-5">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bts.map(
            (behind: {
              id: number;
              acf: { btstitle: string; btsvideourl: string; btsdesc: string };
              title: { rendered: string };
            }) => (
              <BehindTheScenesCard key={behind.id} behind={behind} />
            )
          )}
        </section>
      </div>
    </>
  );
}
