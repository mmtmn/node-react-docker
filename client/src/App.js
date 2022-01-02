import React, {useState} from 'react'
import './App.css';

export default function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      <p>Valor: {num} </p>
      <button onClick={() => setNum(num+1)}>+1</button>
    </>
  )
}
