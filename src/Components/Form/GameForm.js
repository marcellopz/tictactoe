import React from 'react';

const GameForm = ({formResponseHandler}) => {
    const submitHandler = (event) => {
        event.preventDefault();
        formResponseHandler(event.target[0].value, event.target[1].value, event.target[2].value)
    }

    return (
        <form className="flex h-screen overflow-hidden justify-center place-items-center" onSubmit={submitHandler}>
            <div className="w-96 rounded-xl border-2 bg-gray-200 p-3 shadow-lg">
                <div className="font-thin block text-center text-2xl w-full mb-5">Fill details to
                    start
                </div>
                <label className="w-max mt-2 mb-1 font-thin block">Player one name:</label>
                <input type="text"
                       className="bg-gray-100 border text-gray-900 rounded-lg block w-full p-2.5"
                       id="player1"/>
                <label className="w-max mt-2 mb-1 font-thin block" htmlFor="cheese">Player two name:</label>
                <input type="text"
                       className="bg-gray-100 border text-gray-900 rounded-lg block w-full p-2.5"
                       id="player2"/>
                <div className="mt-4">
                    <label className="font-thin mr-2" htmlFor="cheese">Number of rounds:</label>
                    <select className="w-16 text-center rounded bg-gray-100 border-gray-100" id="rounds">
                        {[...Array(7)].map((_number, i) => {
                            return <option value={i + 1} key={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
                <div className="block text-right">
                    <button className="rounded-md p-2 bg-blue-300 w-3/12 m-2" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default GameForm;