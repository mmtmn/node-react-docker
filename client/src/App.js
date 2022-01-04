import React, {useState} from 'react'
import './App.css';
import axios from 'axios'

const api = axio.create({
  baseURL: 'https://localhost:3000/test/'
})

export default function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      <p>Valor: {num} </p>
      <button onClick={() => setNum(num+1)}>+1</button>
    </>
  )
}




