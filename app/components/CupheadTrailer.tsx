"use server"

export default async function CupheadTrailer () {
    return (
        <div className="bg-stone-500 bg-opacity-30 p-5 m-10 rounded-2xl w-full sm:w-3/4 m-4 md:w-2/3 lg:w-1/3 flex items-center flex-col">
        <h1 className="text-2xl pb-3 text-white">Making of Cuphead!</h1> 
        <iframe
            src="https://www.youtube.com/embed/NN-9SQXoi50?si=S-8WAEtFOiSXfeO8"
            allowFullScreen
            title="The making of Cuphead tunes"
            width="560"
            height="315"
            
            className="rounded-2xl w-full"
        />
        <p className="text-base text-center py-2 text-white">The creation of Cuphead is an interesting story of creative thinking and out-of-the-box solutions, that created
            the cuphead-verse that we all, love and adore. Watch the video, and get an insight into what it means to be a developer at MDHR Studios, working on Cuphead.
        </p>
    </div>  
    )
}