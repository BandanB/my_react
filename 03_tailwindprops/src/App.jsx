import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

//variable should be passed inside {}
function App() {
  const [count, setCount] = useState(0)
  let obj ={
    roll:"32",
    age:"58"
  }

  return (
    <>
      <h1 className='bg-green-300 text-black p-5 rounded-2xl'>learning Tailwind</h1>
      <Card username ="BandanB" btnText="Click here" moreDetails ={obj} />
      
      {/* <Card username="anotherOne" btnText="Click here"  /> */}
      <Card username="anotherOne" />
    </>
  )
}

export default App
