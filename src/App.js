import React from 'react'
import { useState, useMemo } from 'react'
const App = () => {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);
  const useMemotype = useMemo(
    function funuseMemo() {
      console.log("UseMemo Called !!");
    }, [count])
  return (
    <div>
      <h1>UseMemo Hook !!</h1>
      <h1> {count} </h1>
      <h1> {item} </h1>
      <h1> {useMemotype} </h1>
      <button onClick={() => setcount(count + 1)} >Update Count</button>
      <button onClick={() => setitem(item * 10)} >Update Item</button>
    </div>
  )
}

export default App
