import { useState } from 'react'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const newSquares = squares.slice()
    newSquares[i] = isXNext ? 'X' : 'O'
    setSquares(newSquares)
    setIsXNext(!isXNext)
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setIsXNext(true)
  }

  const winner = calculateWinner(squares)
  const status = winner 
    ? `Winner: ${winner}`
    : squares.every(square => square)
    ? "It's a draw!"
    : `Next player: ${isXNext ? 'X' : 'O'}`

  return (
    <div className="app">
      <h1 style={{ color: 'white' }}>Tic Tac Toe</h1>
      <div className="status" style={{ color: 'white', marginBottom: '20px' }}>
        {status}
      </div>
      <div className="board">
        {squares.map((square, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {square}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  )
}

export default App
