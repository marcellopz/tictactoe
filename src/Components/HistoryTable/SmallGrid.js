import SmallSquare from "./SmallSquare";

function SmallGrid({grid}) {
    return (
        <div className="grid place-items-center">
            <div className="max-w rounded shadow-lg">
                <div className="">
                    <SmallSquare id={0} value={grid[0]}/>
                    <SmallSquare id={1} value={grid[1]}/>
                    <SmallSquare id={2} value={grid[2]}/>
                </div>
                <div className="">
                    <SmallSquare id={3} value={grid[3]}/>
                    <SmallSquare id={4} value={grid[4]}/>
                    <SmallSquare id={5} value={grid[5]}/>
                </div>
                <div className="">
                    <SmallSquare id={6} value={grid[6]}/>
                    <SmallSquare id={7} value={grid[7]}/>
                    <SmallSquare id={8} value={grid[8]}/>
                </div>
            </div>
        </div>
    )
}

export default SmallGrid