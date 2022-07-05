import React from 'react'

export default function Keypad() {
  return (
    <div>
        <input onChange={()=> console.log('Entering password...')} type='password' placeholder='password'></input>
    </div>
  )
}
