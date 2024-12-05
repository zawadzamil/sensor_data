import React, {Fragment} from 'react';

const SensorList = () => {
    return (
        <Fragment>
            <div className="overflow-x-auto mt-4 w-[70%] shadow-lg rounded">
                <table className="table-auto w-full text-center">
                    <thead className="text-white">
                    <tr className="bg-primary p-4 rounded-2xl">
                        <th className="px-4 py-2">Sensor ID</th>
                        <th className="px-4 py-2">Created At</th>
                        <th className="px-4 py-2">Camera View</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-4 py-2">daa_aac_123</td>
                        <td className="px-4 py-2">Nov 12, 2024</td>

                        <td className="px-4 py-2">
                            <a href="#" className="text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <td className="px-4 py-2">ass_dsa_432</td>
                        <td className="px-4 py-2">Nov 13, 2024</td>

                        <td className="px-4 py-2">
                            <a href="#" className="text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <td className="px-4 py-2">ede_cdd_555</td>
                        <td className="px-4 py-2">Nov 30, 2024</td>

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

export default SensorList;