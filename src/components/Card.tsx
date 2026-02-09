// import { useEffect } from "react";
interface PokeProps{
    image:string,
    name:string
}
export default function Card(props:PokeProps){
    return(
        <article className="w-[300px] bg-white rounded-md border-2 p-5 m-3">
        <img src={props.image} alt="" />
        <p className="text-sm py-3">{props.name}</p>
    </article>
    )
}