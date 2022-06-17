import React from 'react';

const ResetButton = (props) => {
    return (
        <div className="flex justify-center">
            <button
                className='bg-blue-300 hover:bg-blue-200 text-white text-2xl py-2 px-4 rounded'
                onClick={props.reset}
            >
                Reset Game
            </button>
        </div>
    );
};

export default ResetButton;