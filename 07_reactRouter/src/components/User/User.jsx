import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    let {userid} =useParams()
  return (
    <>
     user:{userid} 
    </>
  )
}

export default User
