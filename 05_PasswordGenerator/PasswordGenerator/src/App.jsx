import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const[allowNumber,setAllowNumber]  =useState(false)
  const[allowCharacter,setAllowCharacter] = useState(false)
  const[password,setPassword] = useState("") 

  //useRef hook
  let passwordRef = useRef(null)
  //password copy
  let copyPassword = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password]);

  const passwordGenerator =useCallback(()=>{
    let passw=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowNumber) str+= "0123456789"
    if(allowCharacter) str+= "@#$%^&*(()"
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length +1)
      passw += str.charAt(char)
    }
    setPassword(passw);
  },[length,allowNumber,allowCharacter,setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,allowNumber,allowCharacter,passwordGenerator]);
  
  return (
  <div className='text-white bg-gray-800 w-full max-w-md mx-auto my-5 px-2 py-2 rounded-xl '>
  <h1 className='text-center'>Password generator</h1>
  <div className='flex overflow-hidden m-2 mb-3'> 
  <input 
  type='text'
  value={password}  
  className='rounded-l-xl w-full py-1 px-3 outline-none text-black'
  placeholder='Password'
  ref={passwordRef}
  readOnly
  /><button 
  onClick={copyPassword}
  className='bg-green-500 rounded-r-xl px-3 py-2 hover:bg-blue-600'>Copy</button>
  </div>
  <div className='flex'>
    <div className='flex'>
      <input
      type='range'
      min={8}
      max={100}
      value={length}
      //slider by default color is blue
      className='cursor-pointer accent-green-500 mx-2 text-black'
      onChange={(e)=> setLength(e.target.value)}
      />
      <label>length:{length}</label>
    </div>
    <div className='mx-3'>
    <input
      type='checkbox'
      defaultChecked={allowNumber}
      onChange={()=>{
        setAllowNumber((prev) => !prev)
      }}
    />
    <label>Number</label>
    </div>
    <div>
    <input
      type='checkbox'
      defaultChecked={allowCharacter}
      onChange={()=>{
        setAllowCharacter((prev) => !prev)
      }}
    />
    <label>Character</label>
    </div>
  </div>
  </div>
  )
    }

export default App
