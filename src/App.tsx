
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
function App() {
  const [pokemonsWithImages,setPokemons]=useState(null)
useEffect(() => {
  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      
      const detailedPromises = data.results.map(pokemon => 
        fetch(pokemon.url).then(res => res.json())
      );
      const detailedPokemons = await Promise.all(detailedPromises);
      
      const pokemonsWithImages = detailedPokemons.map(p => ({
        name: p.name,
        image: p.sprites.front_default
      }));
      
      setPokemons(pokemonsWithImages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setLoading(false);
    }
  };
  
  fetchPokemons();
}, []);


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
      <div>
      <button onClick={()=>random()} className=" rounded-xl transition-transform  duration-500 ease-in-out active:translate-y-1 text-white text-2xl font-bold bg-red-600 py-1.5 px-5 shadow-2xl">
    Fetch Random</button>
       <div className='flex w-auto h-auto m-3 border-1 rounded-lg bg-green-300'>
        
        </div>
      </div>
    </>
  )
}

export default App
