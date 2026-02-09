import { useState } from "react";
interface ButtonProps{
    id:number;
}
export default function Button(prop:ButtonProps){
    const[count,setCount]=useState(0)
    function handleClick(){
        if(prop.id){
            alert(`You clicked on Button ${prop.id}`)
        }
        else{
            setCount(prevCount=>prevCount+1)
        }
    }
    return(
        <>
     {!prop.id && <p>The button has been clicked: {count} times</p>}
       <button className='border-2 m-9 p-5' onClick={handleClick}>Click me {prop.id?prop.id:''}</button>
        </>
    )
}