import './App.css';
import CenterGrid from "./Components/Game/CenterGrid";
import Title from "./Components/Game/Title";
import Buttons from "./Components/Game/Buttons";
import {useEffect, useState} from "react";
import GameForm from "./Components/Form/GameForm";
import HistoryTable from "./Components/HistoryTable/HistoryTable";

function App() {

    const [gameStart, setGameStart] = useState(false);
    const [gameInfo, setGameInfo] = useState({
        player1: {
            name: 'Player1',
            symbol: 'x'
        },
        player2: {
            name: 'Player2',
            symbol: 'o'
        },
        numberOfRounds: 0
    })
    const [turn, setTurn] = useState(true); // true = x; false = o
    const [grid, setGrid] = useState(['', '', '', '', '', '', '', '', ''])
    const [turnMessage, setTurnMessage] = useState('')
    const [roundCount, setRoundCounter] = useState(1)
    const [gameOver, setGameOver] = useState(false)
    const [winner, setWinner] = useState('')
    const [history, setHistory] = useState([])
    const winnerLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


    const switchTurn = (id) => {
        setTurn((prevTurn) => {
            return !prevTurn
        });
        setGrid((prevState) => {
            prevState[id] = turn ? 'x' : 'o'
            return prevState
        })
    }

    useEffect(() => {
        setTurnMessage((turn ? gameInfo.player1.name : gameInfo.player2.name) + "'s turn")
        checkWinner()
    }, [turn])

    useEffect(() => {
        if (roundCount > gameInfo.numberOfRounds) {
            setRoundCounter(1)
            setGameStart(false)
            setHistory([])
        }
    }, [roundCount])

    const checkWinner = () => {
        for (const line of winnerLines) {
            let a = ''
            for (const id of line) {
                a += grid[id]
            }
            if (a === gameInfo.player1.symbol.repeat(3)) {
                setWinner(gameInfo.player1.name)
                let m = gameInfo.player1.name + ' wins!'
                setTurnMessage(m)
                setGameOver(true)
                alert(m)
                return
            } else if (a === gameInfo.player2.symbol.repeat(3)) {
                setWinner(gameInfo.player2.name)
                let m = gameInfo.player2.name + ' wins!'
                setTurnMessage(m)
                setGameOver(true)
                alert(m)
                return
            }
        }
        setWinner('Tie')
    }

    const addResult = (w) => {
        setHistory((prevState) => {
            return [...prevState, {
                winner: winner,
                grid: grid
            }]
        })
    }

    const resetGame = () => {
        addResult(winner)
        let t = Math.random() > 0.5
        setGrid(['', '', '', '', '', '', '', '', ''])
        setTurn(t)
        setTurnMessage((t ? gameInfo.player1.name : gameInfo.player2.name) + "'s turn")
        setGameOver(false)
        setWinner('Tie')
        setRoundCounter((prevState) => {
            return prevState + 1
        })
    }

    const formResponseHandler = (p1Name, p2Name, nOfRounds) => {
        setGameInfo({
            player1: {
                name: p1Name === '' ? "Player 1" : p1Name,
                symbol: 'x'
            },
            player2: {
                name: p2Name === '' ? "Player 2" : p2Name,
                symbol: 'o'
            },
            numberOfRounds: parseInt(nOfRounds),
        })

        setTurn(Math.random() > 0.5)
        setGameStart(true);
    }


    return (<>
            {
                (gameStart) ?
                    <div>
                        <Title turnMessage={turnMessage}
                               roundMessage={'Round ' + roundCount + '/' + gameInfo.numberOfRounds}/>
                        <CenterGrid turn={turn} switchTurn={switchTurn} grid={grid} gameOver={gameOver}/>
                        <Buttons reset={resetGame}
                                 buttonLabel={roundCount === gameInfo.numberOfRounds ? 'Restart Game' : 'Next Game'}/>
                        {history.length > 0 && <HistoryTable history={history}/>}
                    </div>
                    :
                    <GameForm formResponseHandler={formResponseHandler}/>
            }
        </>
    );
}

export default App;
