export default function MakingOfMusic() {
    return (
        <div>
            <h1>The making of Cuphead tunes!</h1>
            <iframe
                src="https://www.youtube.com/embed/wRRV7TIQTX0"
                allowFullScreen
                title="The making of Cuphead tunes"
                width="560"
                height="315"
            />

            <video width="320" height="240" controls preload="none">
                <source src="/vids/gnomed.mp4" type="video/mp4" />
            </video>
        </div>

        
    );
}
