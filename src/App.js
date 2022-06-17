import './App.css';
import CenterGrid from "./Components/CenterGrid";
import Title from "./Components/Title";
import ResetButton from "./Components/ResetButton";
import {useEffect, useState} from "react";

function App() {

    const [turn, setTurn] = useState(true); // true = x; false = o
    const [grid, setGrid] = useState(['', '', '', '', '', '', '', '', ''])
    const [message, setMessage] = useState("x's turn")
    const [gameOver, setGameOver] = useState(false)
    const winnerLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const switchTurn = (id) => {
        setTurn(!turn);
        setGrid((prevState) => {
            prevState[id] = turn ? 'x' : 'o'
            return prevState
        })
    }

    useEffect(() => {
        setMessage((turn ? 'x' : 'o') + "'s turn")
        checkWinner()
    }, [turn, gameOver])

    const checkWinner = () => {
        for (const line of winnerLines) {
            let a = ''
            for (const id of line) {
                a += grid[id]
            }
            if (a === 'xxx') {
                setMessage('x wins!')
                setGameOver(true)
            } else if (a === 'ooo') {
                setMessage('o wins!')
                setGameOver(true)
            }
        }
    }

    const resetGame = () => {
        setGrid(['', '', '', '', '', '', '', '', ''])
        setTurn(true)
        setGameOver(false)
    }

    return (
        <div>
            <Title message={message}/>
            <CenterGrid turn={turn} switchTurn={switchTurn} grid={grid} gameOver={gameOver}/>
            <ResetButton reset={resetGame}/>
        </div>
    );
}

export default App;
