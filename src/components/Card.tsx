// import { useEffect } from "react";
interface PokeProps{
    image:string,
    name:string
}
export default function Card(props:PokeProps){
    return(
        <article className="w-[300px] bg-white rounded-md border-2 p-5 m-3">
        <p className="font-bold text-xl">{props.image} heellooo</p>
        <p className="text-sm py-3">{props.name}</p>
    </article>
    )
}