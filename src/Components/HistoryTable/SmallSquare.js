import nothing from "../img/not.png";
import x from "../img/x.png"
import o from "../img/o.png"

const SmallSquare = ({value}) => {

    let mark = nothing

    if (value === 'x') {
        mark = x
    } else if (value === 'o') {
        mark = o
    }
    return <img
        className="inline-block bg-gray-100 rounded shadow-lg w-4"
        src={mark}
        alt="bad"
    />
};

export default SmallSquare;