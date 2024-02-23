'use client'
import { invoke } from '@tauri-apps/api/tauri'
import React, { useEffect, useState } from 'react'

const Greet = () => {
    
    const [counter, setCounter] = useState(0)
    // const greetMe = ()=>{
    //     invoke('greet' , {name:"Shivam"})
    //     .then(console.log)
    //     .catch(console.error)
    // }
    
    const inc = ()=>{
      setCounter(counter+1)
    }
    
  return (
    <div>
        <button onClick={inc}>Increase</button>
        <h2>{counter}</h2>
    </div>
  )
}

export default Greet