
interface JokeProps {
    setup: string;
    punchline: string;
}

export default function Joke(props: JokeProps){

    return(
    <article className="w-[300px] bg-white rounded-md border-2 p-5 m-3">
        <p className="font-bold text-xl">{props.setup}</p>
        <p className="text-sm py-3">{props.punchline}</p>
    </article>
    )
}