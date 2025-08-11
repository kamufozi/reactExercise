
import './App.css'
import Button from './components/Button'
import UList from './components/UList'
import Form from './components/Form'
import Joke from './components/Joke'
import Card from './components/Card'
import jokes from './jokes'
import { useEffect,useState, type JSX } from 'react'

interface JokeInterface {
  id:number;
  setup:string;
  punchline:string
}
interface pokeProps{
  image:string,
  name:string
}
function App() {
  const [pokemonDetails,setPokemonDetails]=useState<any>(null);
  useEffect(
    ()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
       .then(res=>res.json())
       .then(async (data)=>{
        const details =await Promise.all(data.results.map((item:any)=>
          fetch(item.url)
          .then(res=>res.json())
          .then(pokemon=>({
            name:pokemon.name,
            image:pokemon.sprites.front_default
          }))
          ))
          setPokemonDetails(details)

      })

    },[]
  )
 
  console.log(pokemonDetails);

  // const img = pokemon.sprites.front_default;
  const list = ['dog','cat','chicken','cow','sheep','horse']
  const listx = ['dog','cat','chicken','cow','sheep','horsex']
  const jokesData  = jokes.map((joke:JokeInterface)=>{
    return(
      <Joke
          key={joke.id}
          setup={joke.setup}
          punchline={joke.punchline}/>
    )
  })
  const pokemonCards = pokemonDetails.map((pokemon:pokeProps)=>{
    return(
      <Card
         image={pokemon.image}
         name={pokemon.name} 
        />

    )
  })

  return (
    <>
    <div className='flex justify-center gap-5'>
      <div className='flex w-[400px] h-[400px] mt-30  bg-amber-400 text-black justify-center items-center '>
          <p className=''>Hello, World!</p>    
      </div>
      </div>
      <div>
      <Button 
        id = {1}
      />
      <Button 
        id ={2}
      />
      <Button 
        id ={3}
      />
      </div>
      <Button 
        id={0}
      />
      <div className="flex">

        <UList
          array= {list}
         />
         <UList
          array= {listx}
         />
      </div>
      <div>
        <Form />
      </div>
      <div className='flex w-auto h-auto m-3 border-1 rounded-lg bg-green-700'>
        {jokesData}
      </div>
      <div className='flex flex-col gap-2 px-30 pb-3.5 '>
      <button  className=" rounded-xl transition-transform  duration-500 ease-in-out active:translate-y-1 text-white text-2xl font-bold bg-red-600 py-1.5 px-5 shadow-2xl">
    Fetch Random</button>
       <div className='grid grid-cols-2 gap-2 pb-3.5 bg-green-300 items-center'>
         {pokemonCards}
        </div>
      </div>
    </>
  )
}

export default App
