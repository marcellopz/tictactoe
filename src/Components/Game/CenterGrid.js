import Square from "./Square";

function CenterGrid({grid, switchTurn, gameOver}) {
    return (
        <div className="grid h-full place-items-center m-12">
            <div className="max-w rounded overflow-hidden shadow-lg bg-gray-300">
                <div>
                    <Square id={0} switchTurn={switchTurn} value={grid[0]} gameOver={gameOver}/>
                    <Square id={1} switchTurn={switchTurn} value={grid[1]} gameOver={gameOver}/>
                    <Square id={2} switchTurn={switchTurn} value={grid[2]} gameOver={gameOver}/>
                </div>
                <div>
                    <Square id={3} switchTurn={switchTurn} value={grid[3]} gameOver={gameOver}/>
                    <Square id={4} switchTurn={switchTurn} value={grid[4]} gameOver={gameOver}/>
                    <Square id={5} switchTurn={switchTurn} value={grid[5]} gameOver={gameOver}/>
                </div>
                <div>
                    <Square id={6} switchTurn={switchTurn} value={grid[6]} gameOver={gameOver}/>
                    <Square id={7} switchTurn={switchTurn} value={grid[7]} gameOver={gameOver}/>
                    <Square id={8} switchTurn={switchTurn} value={grid[8]} gameOver={gameOver}/>
                </div>
            </div>
        </div>
    )
}

export default CenterGrid