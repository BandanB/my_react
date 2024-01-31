import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//React controls ui updation
function App() {
  // let counter =5
  //using hooks
  let [counter,setCounter] = useState(15)
  let addValue =()=>{
    if(counter<20){
    counter =counter+1;
    setCounter(counter)
    console.log(counter);
    }else{
      alert('you cannot update now')
    }
  }
  let removeValue = ()=>{
    if(counter>0){
    setCounter(counter-1)
    }else{
      alert("You cannot drcrease now")
    }
  }

  return (
    <>
      <h1>Hello Everyone</h1>
      <h2>Counter:{counter}</h2>
      <button
      onClick={addValue}
      >Increase</button>
      <button
      onClick={removeValue}
      >Decrease</button>
      <p>value change:{counter}</p>
    </>
  )
}

export default App
