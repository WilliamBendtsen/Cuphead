"use server"

export default async function BehindTheScenesMusic() {
    return (      
        <div className="bg-green-300 bg-opacity-50 p-5 rounded-2xl w-full hover:scale-105 sm:w-3/4 m-4 md:w-2/3 lg:w-1/3 flex items-center flex-col transition-transform duration-500 ease-in-out">
        <h1 className="text-2xl pb-3 text-zinc-800">The making of Cuphead tunes!</h1> 
        <iframe
            src="https://www.youtube.com/embed/v6h1vM9W2NM?si=qjy5frLL3656z0HI"
            allowFullScreen
            title="The making of Cuphead tunes"
            width="560"
            height="315"
            className="rounded-2xl w-full"
        />
            <p className="text-base text-center py-2 text-zinc-800">"The Music of Cuphead: Recording Floral Fury" offers an exclusive behind-the-scenes look at ¨
            the recording session for "Floral Fury," a standout track from the Cuphead game. Composed by Kristofer Maddigan. So go watch it now, and get some insight on the music of Cuphead</p>
    </div>           
    )
}