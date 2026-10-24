import { useState } from 'react'
import Button from './components/Button.jsx'
import ButtonGroup from './components/ButtonGroup.jsx'
import Textarea from './components/Textarea.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Vite + React</h1>
      <p className="mb-4">Count is: {count}</p>

      <div className="mb-4">
        <ButtonGroup orientation="horizontal">
          <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
            Increment
          </Button>
          <Button variant="secondary" onClick={() => setCount(0)} disabled={count === 0}>
            Reset
          </Button>
          <Button variant="danger" onClick={() => alert('Delete clicked')}>
            Delete
          </Button>
        </ButtonGroup>
      </div>

      <div className="mb-4">
        <ButtonGroup orientation="vertical">
          <Button variant="primary" onClick={() => alert('Top clicked')}>
            Top
          </Button>
          <Button variant="secondary" onClick={() => alert('Middle clicked')}>
            Middle
          </Button>
          <Button variant="ghost" onClick={() => alert('Bottom clicked')}>
            Bottom
          </Button>
        </ButtonGroup>
      </div>

      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium mb-1">Primary textarea</label>
        <Textarea
          variant="primary"
          value={text}
          onChange={setText}
          placeholder="Type something..."
        />
        <p className="text-xs text-gray-500">Value: {text}</p>
        <label className="block text-sm font-medium mb-1">Danger textarea</label>
        <Textarea
          variant="danger"
          value={text}
          onChange={setText}
          placeholder="Type something..."
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Edit <code>src/App.jsx</code> to get started.
      </p>
    </div>
  )
}

export default App