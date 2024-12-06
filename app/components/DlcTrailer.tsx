export default function DlcTrailer() {
  return (
    <section className="flex flex-col items-center gap-[5vh]">
      <h2 className="text-center text-3xl">
        Cuphead - The Delicious Last Course | Out Now on Xbox One, Nintendo
        Switch, PS4, Steam & GOG
      </h2>

      <div className="h-[60vh] w-[50vw]">
        <iframe
          src="https://www.youtube.com/embed/zEE0CvlSNZc"
          allowFullScreen
          title="Cuphead - The Delicious Last Course"
          width="560"
          height="315"
          className="rounded-2xl w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
}
