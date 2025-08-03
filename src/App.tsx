
import './App.css'
import Button from './components/Button'
import UList from './components/UList'
import Form from './components/Form'
function App() {
  const list = ['dog','cat','chicken','cow','sheep','horse']
  const listx = ['dog','cat','chicken','cow','sheep','horsex']

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
    </>
  )
}

export default App
