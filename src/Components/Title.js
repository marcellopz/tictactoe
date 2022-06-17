import React from 'react';

const Title = ({message}) => {
    return (
        <div className="text-center mt-5 mb-10">
            <h1 className="text-6xl text-gray-400 drop-shadow-2xl">Tic-tac-toe gaming</h1>
            <h2 className="text-2xl text-gray-400 drop-shadow mt-4">{message}</h2>
        </div>
    );
};

export default Title;