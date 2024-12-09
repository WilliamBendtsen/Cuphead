interface post {
  header: string;
  acf: {
    url: string;
  };
  title: {
    rendered: string;
  };
  text: string;
}

export default async function BehindTheScenesMusic({ post }: { post: post }) {
  return (
    <div className="bg-green-300 bg-opacity-50 p-5 rounded-2xl w-full hover:scale-105 sm:w-3/4 m-4 md:w-2/3 lg:w-1/3 flex items-center flex-col transition-transform duration-500 ease-in-out">
      <h1 className="text-2xl pb-3 text-zinc-800">{post.header}</h1>
      <iframe
        src={post.acf.url}
        allowFullScreen
        title={post.title.rendered}
        width="560"
        height="315"
        className="rounded-2xl w-full"
      />
      <p className="text-base text-center py-2 text-zinc-800">{post.text}</p>
    </div>
  );
}
