// useFilterItems.js

const useCreateSpotForm = () => {
    // return {
    //     spotAlias: {
    //         label: "Spot Name (Alias)",
    //         type: "input",
    //         rules: [{required: true, message: "Please enter spot alias"}],
    //     },
    //     storeName: {
    //         label: "Store Name",
    //         type: "input",
    //         rules: [{required: true, message: "Please enter store name"}],
    //     },
    //     location: {
    //         label: "Location",
    //         type: "input",
    //         rules: [{required: true, message: "Please enter location"}],
    //     },
    //     details: {
    //         label: "Details (Where it is)",
    //         type: "input",
    //         rules: [{required: true, message: "Please enter spot details"}],
    //     },
    //     reception: {
    //         label: "Reception",
    //         type: "input",
    //         rules: [{required: true, message: "Please enter reception details"}],
    //     },
    //     displaySize: {
    //         label: "Display Size (inches)",
    //         type: "number",
    //         rules: [{required: true, message: "Please enter display size in inches"}],
    //     },
    //     displayResolution: {
    //         label: "Display Resolution",
    //         type: "input",
    //         rules: [{required: true, message: "Please enter display resolution"}],
    //     },
    //     totalSlots: {
    //         label: "Total Slots",
    //         type: "number",
    //         rules: [{required: true, message: "Please enter total slots"}],
    //     },
    //     timeForEachAd: {
    //         label: "Time for Each Ad (seconds)",
    //         type: "number",
    //         defaultValue: 5,
    //         rules: [{required: true, message: "Please enter time for each ad in seconds"}],
    //     },
    //     repeatAdsAfter: {
    //         label: "Repeat Ads After (minutes)",
    //         type: "number",
    //         defaultValue: 3,
    //         rules: [{required: true, message: "Please enter repeat time in minutes"}],
    //     },
    //     feesPerSlot: {
    //         label: "Fees Per Slot ($)",
    //         type: "number",
    //         defaultValue: 50.0,
    //         rules: [{required: true, message: "Please enter fees per slot"}],
    //     },
    // };
    return [
        {
            label: 'Full Name',
            name: 'fullName',
            type: 'input',
            className: 'col-span-12',
            placeholder: 'Enter user name',
            rules: [{required: true, message: 'Please input user name!'}],
        },
        {
            label: 'Email',
            name: 'email',
            type: 'input',
            className: 'col-span-12',
            placeholder: 'Enter user email',
            rules: [{required: true, message: 'Please input user email!'}],
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            className: 'col-span-12',
            placeholder: 'Enter user password',
            rules: [{required: true, message: 'Please input user password!'}],
            extra: 'Between 8 and 10 characters',
        },
    ];
};



export default useCreateSpotForm;
