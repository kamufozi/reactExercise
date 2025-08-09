

export default function Form(){
    function submit(formData:FormData){
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        alert(`Hello ${firstName} ${lastName}!`)
    }
    return(
        <form  className="flex flex-col gap-2 px-30 pb-3.5 " action={submit} >
            <input type="text" className="border-1 active:border-2 p-2 rounded-md" placeholder="First name" name="firstName"/>
            <input type="text" className="border-1 active:border-2 p-2 rounded-md" placeholder="Last name" name="lastName"/>
            <button className="uppercase rounded-xl transition-transform  duration-500 ease-in-out active:translate-y-1 text-white text-2xl font-bold bg-red-600 py-1.5 px-5 shadow-2xl">
                Greet me</button>
        </form>
    )
}