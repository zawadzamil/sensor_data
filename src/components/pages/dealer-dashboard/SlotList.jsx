import React, {Fragment} from 'react';

const SlotList = () => {
    return (
        <Fragment>
            <div className="overflow-x-auto mt-4 w-[70%] shadow-lg rounded">
                <table className="table-auto w-full text-center">
                    <thead className="text-white">
                    <tr className="bg-primary p-4 rounded-2xl">
                        <th className="px-4 py-2">Spot ID</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Total Ad Slots</th>
                        <th className="px-4 py-2">Free Slots Available</th>
                        <th className="px-4 py-2">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-4 py-2">123</td>
                        <td className="px-4 py-2">Downtown</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">
                            <a href="#" className="text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <td className="px-4 py-2">124</td>
                        <td className="px-4 py-2">Suburbs</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">
                            <a href="#" className="text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-4 py-2">125</td>
                        <td className="px-4 py-2">Mall Area</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">
                            <a href="#" className="text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default SlotList;