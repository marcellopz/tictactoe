import SmallGrid from "./SmallGrid";

const HistoryTable = ({history}) => {
    return (
        <div className="flex justify-center mt-12 font-thin">
            <table
                className="rounded-lg table-fixed bg-gray-200 w-4/12 mb-10 text-center shadow-lg w-full">
                <thead className="h-12 text-gray-600">
                <tr className="">
                    <th className="w-4"></th>
                    <th className="w-32">Winner</th>
                    <th className="w-24">Board</th>
                </tr>
                </thead>
                <tbody>
                {history.map((item, i) => {
                    return <tr key={i} className="h-12 odd:bg-gray-300 even:bg-gray-200">
                        <td>{i + 1}</td>
                        <td>{item.winner}</td>
                        <td><SmallGrid grid={item.grid}/></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTable;