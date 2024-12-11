export default function DlcTrailer({ title, video }) {
  return (
    <section className="flex flex-col items-center gap-[5vh]">
      <h2 className="text-center text-3xl">{title}</h2>

      <div className="h-[60vh] w-[50vw]">
        <iframe
          src={video}
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
