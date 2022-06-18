import React from 'react';

const Buttons = (props) => {
    return (
        <div className="flex justify-center">
            <button
                className='bg-blue-300 hover:bg-blue-200 text-white text-2xl py-2 px-4 rounded m-2'
                onClick={props.reset}
            >
                {props.buttonLabel}
            </button>
        </div>
    );
};

export default Buttons;