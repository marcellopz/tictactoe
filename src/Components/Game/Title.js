import React from 'react';

const Title = ({turnMessage, roundMessage}) => {
    return (
        <div className="text-center mt-5 mb-10">
            <h1 className="text-4xl text-gray-400 drop-shadow">Tic-tac-toe</h1>
            <h2 className="text-2xl text-gray-400 drop-shadow mt-4">{roundMessage}</h2>
            <h2 className="text-2xl text-gray-400 drop-shadow ">{turnMessage}</h2>
        </div>
    );
};

export default Title;