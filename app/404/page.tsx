import Image from "next/image";
import Link from "next/link";

export default async function ErrorPage() {
  const response = await fetch(
    "http://cuphead.williamskodeeventyr.dk/wp-json/wp/v2/404?acf_format=standard"
  );

  const posts = await response.json();
  console.log(posts);

  const post = posts[0];
  const acf = post.acf;

  return (
    <div className="h-screen flex flex-col items-center">
      <Image
        className="mt-[5vh]"
        src={acf.CupheadDead}
        alt="Cuphead Dead Ghost"
        width={200}
        height={200}
      />
      <section className="flex flex-col text-center gap-[3vh]">
        <h1 className="font-cuphead-felix text-6xl">{acf.YouDiedText}</h1>

        <h2 className="font-cuphead-felix text-6xl">{acf.ErrorText}</h2>

        <Link href={"/"}>
          <button className="w-[20vw] h-[10vh] bg-purple-800 hover:bg-purple-950 font-cuphead-vogue-bold text-white text-3xl font-extrabold rounded inline-flex items-center justify-center">
            {acf.ErrorButtonText}
          </button>
        </Link>
      </section>
    </div>
  );
}
