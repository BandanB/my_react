import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] =useState("black")

  return (
<div className=' w-full h-screen'
style={{backgroundColor:color}}
>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='bg-white flex flex-wrap  px-3 rounded-xl'>
  <button 
  onClick={()=>{setColor("red")}}
  className='bg-red-400 p-2 rounded-xl mx-2 my-2 '>Red</button>
  <button 
  onClick={()=>{setColor("green")}}
  className='bg-green-400 p-2 rounded-xl mx-2 my-2'>Green</button>
  <button
  onClick={()=>{setColor("blue")}}
   className='bg-blue-400 p-2 rounded-xl mx-2 my-2'>Blue</button>
</div>
</div>
</div>
  )
}

export default App
