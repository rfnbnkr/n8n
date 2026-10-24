import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to Vite + React</h1>
      <p>Count is: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <p>
        Edit <code>src/App.jsx</code> to get started.
      </p>
    </div>
  )
}

export default App