// useFilterItems.js

const createSensorFormItem = () => {
    const formItems = [
        {
            label: 'Sensor Id',
            name: 'sensorId',
            type: 'input',
            className: 'col-span-12',
            placeholder: 'Enter Sensor Id',
            rules: [{ required: true, message: 'Please input sensor Id' }],
        },
    ];
    return formItems;
};

export default createSensorFormItem;
