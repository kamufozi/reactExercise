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
            
        }
    }
    return(
   
       <button className='border-2 m-9 p-5' onClick={handleClick}>Click me {prop.id?prop.id:''}</button>
        
    )
}