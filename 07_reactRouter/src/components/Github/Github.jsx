import { data } from 'autoprefixer'
import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // let [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/BandanB')
    //     .then(response => response.json())
    //     .then(data => setData(data) )
    //     console.log(data);
    // },[])
  return (
    <>
        Followers:{data.followers}
        <img src={data.avatar_url} alt='Git pp' width={300}/>

    </>
  )
}

//for loader
export default Github

export const githubInfoLoader = async ()=> {
  let response = await fetch('https://api.github.com/users/BandanB')
  return response.json();
}
