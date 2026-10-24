import { useState } from 'react'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Vite + React</h1>
      <p className="mb-4">Count is: {count}</p>
      <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
        Increment
      </Button>
      <Button variant="secondary" onClick={() => setCount(0)} disabled={count === 0}>
        Reset
      </Button>
      <Button variant="danger" onClick={() => alert('Delete clicked')}>
        Delete
      </Button>
      <Button variant="ghost" onClick={() => alert('Link clicked')}>
        Cancel
      </Button>
      <p className="mt-4 text-sm text-gray-600">
        Edit <code>src/App.jsx</code> to get started.
      </p>
    </div>
  )
}

export default App