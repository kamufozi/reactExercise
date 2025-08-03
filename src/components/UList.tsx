interface ListProps{
    array : Array<String>;
}
export default function UList(props:ListProps){
    return(
        <>
            <ul className="m-9 list-disc">
            {(props.array).map((item,id)=>(
                <li key={id}>{item}</li>
            ))}

            </ul>

        </>
    )
}