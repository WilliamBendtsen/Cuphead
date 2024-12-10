interface BehindTheScenesData {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    btstitle: string;
    btsvideourl: string;
    btsdesc: string;
  };
}

export default async function BehindTheScenesCard({ behind }: { behind: BehindTheScenesData }) {
  return (
    <div className="bg-green-300 bg-opacity-50 p-5 rounded-2xl w-full hover:scale-105 flex items-center flex-col transition-transform duration-500 ease-in-out">
      <h1 className="text-2xl pb-3 text-zinc-800">{behind.acf.btstitle}</h1>
      <iframe
        src={behind.acf.btsvideourl}
        allowFullScreen
        title={behind.title.rendered}
        width="560"
        height="315"
        className="rounded-2xl w-full"
      />
      <p className="text-base text-center py-2 text-zinc-800">{behind.acf.btsdesc}</p>
    </div>
  );
}
